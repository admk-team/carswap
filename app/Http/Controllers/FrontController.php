<?php

namespace App\Http\Controllers;

use App\Mail\ContactEmail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Brand;
use App\Models\Car;
use App\Models\Category;
use App\Models\PaymentGateway;
use App\Models\Rating;
use Illuminate\Support\Facades\Mail;

class FrontController extends Controller
{
    public function index(Request $request){
        $brands=Brand::where('status','1')->get();
        $categories=Category::withCount('car')->get();
        $swap_cars=Car::with('ratings','brand')->where('deleted_at',null)->where('status','1')->where('slug','!=',null)->limit(4)->latest()->get();
        $sale_cars=Car::with('ratings','brand')->where('deleted_at',null)->where('status','1')->where('type','sale')->where('slug','!=',null)->limit(5)->latest()->get();
        $fav = auth()->user()?->wishlist;
        $swap_cars=$swap_cars->map(function($car) use ($fav){
            $images=explode(',',$car->images);
            if($car->type=='swap'){
                $type="For Swap";
            }
            $totalRating=0;
            if ($car->ratings && count($car->ratings) > 0) {
                $averageRating = $car->ratings->avg('rating');

                $totalRating = round($averageRating, 2);
            }
            return [
                'id'=>$car->id,
                'title'=>$car->title,
                'slug'=>$car->slug,
                'brand_id'=>$car->brand_id,
                'cylinder'=>$car->cylinder,
                'brand'=>$car->brand,
                'description'=>$car->description,
                'images'=>$images ?? null,
                'user_id' =>$car->user_id,
                'condition' => $car->condition,
                'engine_capacity' => $car->engine_capacity,
                'mileage' => $car->mileage,
                'type' => $type ?? '',
                'trim' => $car->trim,
                'feature' =>$car->feature,
                'location' => $car->location,
                'price' => $car->price,
                'fuelType' => $car->fuel_type,
                'model' => $car->model,
                'transmission' => $car->transmission,
                'interiorColor' => $car->interior_color,
                'exteriorColor' => $car->exterior_color,
                'is_fav' => $fav&&$fav!=null?($fav->where('id', $car->id)->first() ? true : false):false,
                'total_rating' => $totalRating,
                'year' => $car->year,
            ];
        });
        $sale_cars=$sale_cars->map(function($car) use ($fav){
            $images=explode(',',$car->images);
           if($car->type=='sale'){
                $type="For Sale";
            }
            $totalRating=0;
            if ($car->ratings && count($car->ratings) > 0) {
                $averageRating = $car->ratings->avg('rating');

                $totalRating = round($averageRating, 2);
            }
            return [
                'id'=>$car->id,
                'title'=>$car->title,
                'slug'=>$car->slug,
                'brand_id'=>$car->brand_id,
                'cylinder'=>$car->cylinder,
                'brand'=>$car->brand,
                'description'=>$car->description,
                'images'=>$images ?? null,
                'user_id' =>$car->user_id,
                'condition' => $car->condition,
                'engine_capacity' => $car->engine_capacity,
                'mileage' => $car->mileage,
                'type' => $type ?? '',
                'trim' => $car->trim,
                'location' => $car->location,
                'price' => $car->price,
                'feature' =>$car->feature,
                'fuelType' => $car->fuel_type,
                'model' => $car->model,
                'transmission' => $car->transmission,
                'interiorColor' => $car->interior_color,
                'exteriorColor' => $car->exterior_color,
                'is_fav' => $fav&&$fav!=null?($fav->where('id', $car->id)->first() ? true : false):false,
                'total_rating' => $totalRating
            ];
        });

        if($request->q){
            $query = $request->q;
            $suggestions=Car::select(['location'])->where('location','LIKE', "%$query%")->where('deleted_at',null)->groupBy('location')->limit(8)->pluck('location') ?? [];
            return Inertia::render('Front/Index',['brands'=>$brands,'swap_cars'=>$swap_cars, 'sale_cars'=>$sale_cars,'suggestions'=> $suggestions,'categories'=>$categories,'success'=>request()->success ?? '']);
        }

        return Inertia::render('Front/Index',['brands'=>$brands,'swap_cars'=>$swap_cars, 'sale_cars'=>$sale_cars,'categories'=>$categories,'success'=>request()->success ?? '']);
    }
    public function ViewAllCars($type){
        $brands=Brand::where('status','1')->get();
        $cars=Car::with('brand')->where('status','1')->where('deleted_at',null)->where('slug','!=',null)->latest()->get();
        $cars=$cars->map(function($car){
            $images=explode(',',$car->images);
            // if($car->type=='swap'){
            //     $type="For Swap";
            // }else if($car->type=='sale'){
            //     $type="For Sale";
            // }

            $totalRating=0;
            if ($car->ratings && count($car->ratings) > 0) {
                $averageRating = $car->ratings->avg('rating');

                $totalRating = round($averageRating, 2);
            }
            return [
                'id'=>$car->id,
                'title'=>$car->title,
                'slug'=>$car->slug,
                'brand_id'=>$car->brand_id,
                'cylinder'=>$car->cylinder,
                'brand'=>$car->brand,
                'description'=>$car->description,
                'images'=>$images ?? null,
                'user_id' =>$car->user_id,
                'condition' => $car->condition,
                'engine_capacity' => $car->engine_capacity,
                'mileage' => $car->mileage,
                'type' => $type ?? '',
                'trim' => $car->trim,
                'location' => $car->location,
                'feature' =>$car->feature,
                'price' => $car->price,
                'fuelType' => $car->fuel_type,
                'model' => $car->model,
                'year' => $car->year,
                'transmission' => $car->transmission,
                'interiorColor' => $car->interior_color,
                'exteriorColor' => $car->exterior_color,
                'total_rating' => $totalRating
            ];
        });
        return Inertia::render('Front/AllCars',['brands'=>$brands,'cars'=>$cars]);
    }
    public function CarDetail($slug){
        $payment_data=PaymentGateway::first();
        $brands=Brand::where('status','1')->get();
        $car=Car::with('ratings.user','bookings','swaps','brand')->where('deleted_at',null)->where('slug',$slug)->first();
        $car->images=explode(',',$car->images);
        $similarCars=Car::where('status','1')->limit(5)->latest()->get();
        $similarCars=$similarCars->map(function($car){
            $totalRating=0;
            if ($car->ratings && count($car->ratings) > 0) {
                $averageRating = $car->ratings->avg('rating');
                $totalRating = round($averageRating, 2);
            }
            if($car->type=='swap'){
                $type="For Swap";
            }else if($car->type=='sale'){
                $type="For Sale";
            }
            $images=explode(',',$car->images);
            return [
                'id'=>$car->id,
                'title'=>$car->title,
                'slug'=>$car->slug,
                'brand_id'=>$car->brand_id,
                'cylinder'=>$car->cylinder,
                'brand'=>$car->brand,
                'description'=>$car->description,
                'images'=>$images ?? null,
                'user_id' =>$car->user_id,
                'condition' => $car->condition,
                'engine_capacity' => $car->engine_capacity,
                'mileage' => $car->mileage,
                'type' => $type ?? '',
                'trim' => $car->trim,
                'location' => $car->location,
                'price' => $car->price,
                'fuelType' => $car->fuel_type,
                'feature' =>$car->feature,
                'year' =>$car->year,
                'model' => $car->model,
                'transmission' => $car->transmission,
                'interiorColor' => $car->interior_color,
                'exteriorColor' => $car->exterior_color,
                'total_rating' => $totalRating
            ];
        });
        if(auth()->user()){
            $user_rating=Rating::where('user_id',auth()->user()->id)->where('car_id',$car->id)->first();
            $my_cars=Car::where('user_id',auth()->user()->id)->where('deleted_at',null)->where('type','swap')->get();
            if($my_cars){
                $my_cars=$my_cars->map(function($car){
                    $car->images=explode(',',$car->images);
                    return $car;
                });
            }
        };
        return Inertia::render('Front/CarDetail',['brands'=>$brands,'car'=>$car,'similarCars'=>$similarCars,'user_rating'=>$user_rating ?? null,'my_cars'=>$my_cars ?? null,'payment_data'=>$payment_data]);
    }

    public function contactus(){

        return Inertia::render('Front/ContactUsPage');
    }
    public function handleMailForm(Request $request){
        $to = "cars@carswap.ng";
        $data=[
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'phone'=>$request->phone_number,
            'message'=>$request->message,
        ];
        Mail::to($to)->send(new ContactEmail($data));
        return redirect()->back();
    }


    public function aboutus(){

        return Inertia::render('Front/AboutUsPage');
    }
    public function livechat(){

        return Inertia::render('Front/LiveChat');
    }
    public function wishlist(){

        return Inertia::render('Front/WishList');
    }
    public function partner(){

        return Inertia::render('Front/Partner');
    }
    public function search(Request $request){
        $brands=Brand::where('status','1')->get();
        $query = Car::query();
        if ($request->searchTerm && $request->searchTerm!='') {
            $query->where('title', $request->searchTerm);
        }
        if ($request->location) {
            $query->where('location', $request->location);
        }
        if ($request->min && $request->max) {
            $query->whereBetween('price', [$request->min, $request->max]);
        }
        if ($request->minMileage && $request->maxMileage) {
            $query->whereBetween('mileage', [$request->minMileage, $request->maxMileage]);
        }
        if ($request->brand) {
            $query->where('brand_id', $request->brand);
        }
        if ($request->category) {
            $query->where('categories_id', $request->category);
        }
        if ($request->model) {
            $query->where('model', $request->model);
        }
        $cars = $query->with('brand')->where('deleted_at',null)->get();
        $cars=$cars->map(function($car){
            $car->images=explode(',',$car->images);
            return $car;
        });
        return Inertia::render('Front/AllCars',['brands'=>$brands,'cars'=>$cars]);
    }
    public function footerLocation($location){
        $brands=Brand::where('status','1')->get();
        $cars=Car::where('location','like', '%' . $location . '%')->where('deleted_at',null)->get();
        $cars=$cars->map(function($car){
            $car->images=explode(',',$car->images);
            return $car;
        });
        return Inertia::render('Front/AllCars',['brands'=>$brands,'cars'=>$cars]);
    }
    public function footerBrands($brand){
        $brands=Brand::where('status','1')->get();
        $footerBrand = Brand::where('title', 'like', '%' . $brand . '%')->with('cars')->get();
        $carData = $footerBrand->pluck('cars')->flatten();
        $cars=$carData->map(function($car){
            $car->images=explode(',',$car->images);
            return $car;
        });
        return Inertia::render('Front/AllCars',['brands'=>$brands,'cars'=>$cars]);
    }
}
