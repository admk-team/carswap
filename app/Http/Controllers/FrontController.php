<?php

namespace App\Http\Controllers;

use App\Mail\ContactEmail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Brand;
use App\Models\Car;
use App\Models\Rating;
use Illuminate\Support\Facades\Mail;

class FrontController extends Controller
{
    public function index(){
        $brands=Brand::where('status','1')->get();
        $cars=Car::where('status','1')->where('slug','!=',null)->limit(4)->latest()->get();
        $fav = auth()->user()?->wishlist;
        $cars=$cars->map(function($car) use ($fav){
            $images=explode(',',$car->images);
            if($car->type=='swap'){
                $type="For Swap";
            }else if($car->type=='sale'){
                $type="For Sale";
            }
            return [
                'id'=>$car->id,
                'title'=>$car->title,
                'slug'=>$car->slug,
                'brand_id'=>$car->brand_id,
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
                'model' => $car->model,
                'transmission' => $car->transmission,
                'interiorColor' => $car->interior_color,
                'exteriorColor' => $car->exterior_color,
                'is_fav' => $fav&&$fav!=null?($fav->where('id', $car->id)->first() ? true : false):false
            ];
        });
        return Inertia::render('Front/Index',['brands'=>$brands,'cars'=>$cars]);
    }
    public function ViewAllCars(){
        $brands=Brand::where('status','1')->get();
        $cars=Car::where('status','1')->where('slug','!=',null)->latest()->get();
        $cars=$cars->map(function($car){
            $images=explode(',',$car->images);
            if($car->type=='swap'){
                $type="For Swap";
            }else if($car->type=='sale'){
                $type="For Sale";
            }
            return [
                'id'=>$car->id,
                'title'=>$car->title,
                'slug'=>$car->slug,
                'brand_id'=>$car->brand_id,
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
                'model' => $car->model,
                'transmission' => $car->transmission,
                'interiorColor' => $car->interior_color,
                'exteriorColor' => $car->exterior_color,
            ];
        });
        return Inertia::render('Front/AllCars',['brands'=>$brands,'cars'=>$cars]);
    }
    public function CarDetail($slug){
        $brands=Brand::where('status','1')->get();
        $car=Car::with('ratings.user')->where('slug',$slug)->first();
        $car->images=explode(',',$car->images);
        $similarCars=Car::where('status','1')->limit(4)->latest()->get();
        $similarCars=$similarCars->map(function($car){
            $car->images=explode(',',$car->images);
            return $car;
        });
        if(auth()->user()){
            $user_rating=Rating::where('user_id',auth()->user()->id)->where('car_id',$car->id)->first();
            $my_cars=Car::where('user_id',auth()->user()->id)->get();
            if($my_cars){
                $my_cars=$my_cars->map(function($car){
                    $car->images=explode(',',$car->images);
                    return $car;
                });
            }
        };
        return Inertia::render('Front/CarDetail',['brands'=>$brands,'car'=>$car,'similarCars'=>$similarCars,'user_rating'=>$user_rating ?? null,'my_cars'=>$my_cars ?? null]);
    }

    public function contactus(){

        return Inertia::render('Front/ContactUsPage');
    }
    public function handleMailForm(Request $request){
        $to = "depami5024@ridteam.com";
        $subject = "Contact Us";
        
        $message = "
        <html>
        <head>
        <title>HTML email</title>
        </head>
        <body>
        <p>This email contains user Issues!</p>
        <table>
        <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Messag</th>
        </tr>
        <tr>
        <td>$request->first_name</td>
        <td>$request->last_name</td>
        <td>$request->email</td>
        <td>$request->phone_number</td>
        <td>$request->message</td>
        </tr>
        </table>
        </body>
        </html>
        ";
        // return $message;
        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        
        // More headers
        $headers .= 'From: <depami5024@ridteam.com>' . "\r\n";
        $headers .= 'Cc: depami5024@ridteam.com' . "\r\n";
        Mail::to($to)->send(new ContactEmail($request));
        return redirect()->back();
    }


    public function aboutus(){

        return Inertia::render('Front/AboutUsPage');
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
        if ($request->model) {
            $query->where('model', $request->model);
        }
        $cars = $query->get();
        $cars=$cars->map(function($car){
            $car->images=explode(',',$car->images);
            return $car;
        });
        return Inertia::render('Front/AllCars',['brands'=>$brands,'cars'=>$cars]);
    }
}
