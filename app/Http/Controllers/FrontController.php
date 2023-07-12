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
        $cars=Car::where('status','1')->limit(3)->latest()->get();
        return Inertia::render('Front/Index',['brands'=>$brands,'cars'=>$cars]);
    }
    public function ViewAllCars(){
        $brands=Brand::where('status','1')->get();
        $cars=Car::where('status','1')->latest()->get();
        return Inertia::render('Front/AllCars',['brands'=>$brands,'cars'=>$cars]);
    }
    public function CarDetail($slug){
        $brands=Brand::where('status','1')->get();
        $car=Car::where('slug',$slug)->first();
        $similarCars=Car::where('status','1')->limit(3)->latest()->get();
        return Inertia::render('Front/CarDetail',['brands'=>$brands,'car'=>$car,'similarCars'=>$similarCars]);
    }
}
