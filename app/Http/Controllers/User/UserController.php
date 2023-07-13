<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $cars=Car::latest()->get();
        $data = $cars->map(function($item){
            $image = explode(',',$item->images);
            $item->images = $image;
            
            return $item;
        });
        return Inertia::render('User/UserDashBoard', ['cars' => $data,'success'=>request()->success,'error'=>request()->error]);
    }
    public function EditProfile(){
        return Inertia::render('User/EditProfile');
    }
}
