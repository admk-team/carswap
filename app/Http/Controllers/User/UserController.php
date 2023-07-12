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
            $imageUrl = url('storage' . $item->images);
            $item->images = $imageUrl;
            
            return $item;
        });
        return Inertia::render('User/UserDashBoard', ['cars' => $data]);
    }
    public function EditProfile(){
        return Inertia::render('User/EditProfile');
    }
}
