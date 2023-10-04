<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Car;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index(){
        $brand=Brand::count();
        $car=Car::count();
        $pending_car=Car::where('status',0)->count();
        $user=User::count();
        return Inertia::render('Admin/Dashboard',['brand'=>$brand,'car'=>$car,'user'=>$user,'pending_car'=>$pending_car]);
    }
    
}
