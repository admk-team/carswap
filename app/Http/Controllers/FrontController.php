<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Brand;
use App\Models\Car;
class FrontController extends Controller
{
    public function index(){
        $brands=Brand::where('status','1')->get();
        $cars=Car::where('status','1')->where('slug','!=',null)->limit(3)->latest()->get();
        $cars=$cars->map(function($car){
            $images=explode(',',$car->images);
            return [
                'id'=>$car->id,
                'title'=>$car->title,
                'slug'=>$car->slug,
                'brand_id'=>$car->brand_id,
                'description'=>$car->description,
                'images'=>$images ?? null,
                'user_id' =>$car->user_id,
                'condition' => $car->condition,
                'engineCapacity' => $car->engine_capacity,
                'mileage' => $car->mileage,
                'location' => $car->location,
                'price' => $car->price,
                'fuelType' => $car->fuel_type,
                'model' => $car->model,
                'transmission' => $car->transmission,
                'interiorColor' => $car->interior_color,
                'exteriorColor' => $car->exterior_color,
            ];
        });
        return Inertia::render('Front/Index',['brands'=>$brands,'cars'=>$cars]);
    }
    public function ViewAllCars(){
        $brands=Brand::where('status','1')->get();
        $cars=Car::where('status','1')->where('slug','!=',null)->latest()->get();
        $cars=$cars->map(function($car){
            $images=explode(',',$car->images);
            return [
                'id'=>$car->id,
                'title'=>$car->title,
                'slug'=>$car->slug,
                'brand_id'=>$car->brand_id,
                'description'=>$car->description,
                'images'=>$images ?? null,
                'user_id' =>$car->user_id,
                'condition' => $car->condition,
                'engineCapacity' => $car->engine_capacity,
                'mileage' => $car->mileage,
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
        $car=Car::where('slug',$slug)->first();
        $car->images=explode(',',$car->images);
        $similarCars=Car::where('status','1')->limit(3)->latest()->get();
        $similarCars=$similarCars->map(function($car){
            $car->images=explode(',',$car->images);
            return $car;
        });
        return Inertia::render('Front/CarDetail',['brands'=>$brands,'car'=>$car,'similarCars'=>$similarCars]);
    }
    public function search(Request $request){
        $brands=Brand::where('status','1')->get();
        $query = Car::query();
        if ($request->location) {
            $query->where('location', $request->location);
        }
        if ($request->min && $request->max) {
            $query->whereBetween('price', [$request->min, $request->max]);
        }
        if ($request->brand) {
            $query->where('brand_id', $request->brand);
        }
        $cars = $query->get();
        return Inertia::render('Front/AllCars',['brands'=>$brands,'cars'=>$cars]);
    }
}
