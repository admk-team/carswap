<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Car;
use App\Models\User;
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
    public function updateProfile(Request $request)
    {
        // $request->validate([
        //     'first_name' => 'required',
        //     'last_name' => 'required',
        //     'email' => 'required|unique:users,email,'.$id,
        //     'city' => 'required',
        //     'state' => 'required',
        //     'address' => 'required',
        //     'phone_no' => 'required'
        // ]);
        $user = User::findOrFail(auth()->user()->id);
    
        $user->fill($request->only($user->getFillable()));
    
        if ($request->hasFile('image')) {
            $img_path = $request->file('image')->store('/images/user', 'public');
            $user->image = $img_path;
        }
        if($user->save()){
            return Inertia::render('User/EditProfile', ['success' => 'Profile updated successfully']);
            // return  Inertia::location(route('user.editProfile', ['success' => 'Image updated successfully']));
        }else{
            return Inertia::render('User/EditProfile', ['error' => 'Failed to update the user!']);
            // return Inertia::location(route('user.editProfile', ['error' => 'Failed to update the user!']));
        }
    }


}
