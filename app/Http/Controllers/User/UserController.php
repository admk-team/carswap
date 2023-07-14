<?php

namespace App\Http\Controllers\User;
use Illuminate\Http\RedirectResponse;
use App\Http\Controllers\Controller;
use App\Models\Car;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Hash;


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
        $data=$request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|unique:users,email,'.auth()->user()->id,
            'city' => 'required',
            'state' => 'required',
            'address' => 'required',
            'phone_no' => 'required'
        ]);
        $user = User::findOrFail(auth()->user()->id);
        // $data = $request->all();
        $user->fill($data);
    
        if ($request->hasFile('image')) {
            $img_path = $request->file('image')->store('/images/user', 'public');
            $user->image = $img_path;
        }
        if($user->save()){
            return redirect()->back()->withErrors(['success' => 'Profile updated successfully.']);
           // return Inertia::render('User/EditProfile', ['success' => 'Profile updated successfully']);
            // return  Inertia::location(route('user.editProfile', ['success' => 'Image updated successfully']));
        }else{
            return redirect()->back()->withErrors(['failed' => 'Profile not updated successfully.']);
           // return Inertia::render('User/EditProfile', ['error' => 'Failed to update the user!']);
            // return Inertia::location(route('user.editProfile', ['error' => 'Failed to update the user!']));
        }
    }
    
    public function update(Request $request): RedirectResponse
    {
        return $request;
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();
    }


    // public function update(Request $request){
    //     $admin =  User::find(auth()->user()->id);
        
    //     if(isset($request->password) && $request->password != null){
    //         $admin->password = Hash::make($request->password);
    //     }
       
    //     if($admin->update()){
    //         return back()->with('success' , 'Profile Successfully Updated.');
    //     }else{
    //         return back()->with('success' , 'Failed to update Profile.');
    //     }
    // }

}
