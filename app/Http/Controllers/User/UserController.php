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
        $cars = Car::where('user_id', auth()->user()->id)
        ->latest()
        ->get();
    
    $data = $cars->map(function ($item) {
        $image = explode(',', $item->images);
        $item->images = $image;
    
        return $item;
    });
    $pendings = Car::where('user_id', auth()->user()->id)
    ->where('status', 0)
    ->latest()
    ->get();

    $pendingsdata = $pendings->map(function ($item) {
        $image = explode(',', $item->images);
        $item->images = $image;

        return $item;
    });
    $approved = Car::where('user_id', auth()->user()->id)
    ->where('status', 1)
    ->latest()
    ->get();

    $approved = $approved->map(function ($item) {
        $image = explode(',', $item->images);
        $item->images = $image;

        return $item;
    });
        return Inertia::render('User/UserDashBoard', ['cars' => $data,'pendings'=>$pendingsdata,'approved'=>$approved,'success'=>request()->success,'error'=>request()->error]);
    }
    
    public function EditProfile(){
        
        return Inertia::render('User/EditProfile',['success'=>request()->success,'error'=>request()->error]);
    }
    public function updateProfile(Request $request)
    {
        $data=$request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|unique:users,email,'.auth()->user()->id,
            'city' => 'max:256',
            'state' => 'max:256',
            'address' => 'max:256',
            'phone_no' => 'max:256',
           
        ]);

        $user = User::findOrFail(auth()->user()->id);
        // $data = $request->all();
        $user->fill($data);
    
        if ($request->hasFile('image')) {
            $img_path = $request->file('image')->store('/images/user', 'public');
            $user->image = $img_path;
        }
        if($user->save()){
             return Inertia::location(route('user.editProfile', ['success' => 'Profile updated successfully.']));
            // return redirect()->back()->withErrors(['success' => 'Profile not updated successfully.']);
           // return Inertia::render('User/EditProfile', ['success' => 'Profile updated successfully']);
            // return  Inertia::location(route('user.editProfile', ['success' => 'Image updated successfully']));
        }else{
            return Inertia::location(route('user.editProfile', ['error' => 'Failed to update the Profile']));
           // return Inertia::render('User/EditProfile', ['error' => 'Failed to update the user!']);
            // return Inertia::location(route('user.editProfile', ['error' => 'Failed to update the user!']));
        }
    }
    public function updatePassword(Request $request)
    {
        $data=$request->validate([
          
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        if($request->password){
            $request->user()->update([
                'password' => Hash::make($request->password),
            ]);
        }
        $user = User::findOrFail(auth()->user()->id);
        // $data = $request->all();
        $user->fill($data);
  
        if($user->save()){
            return Inertia::location(route('user.editProfile', ['success' => 'Profile updated successfully.']));
           // return Inertia::render('User/EditProfile', ['success' => 'Profile updated successfully']);
            // return  Inertia::location(route('user.editProfile', ['success' => 'Image updated successfully']));
        }else{
            return Inertia::location(route('user.editProfile', ['error' => 'Failed to update the Password']));
           // return Inertia::render('User/EditProfile', ['error' => 'Failed to update the user!']);
            // return Inertia::location(route('user.editProfile', ['error' => 'Failed to update the user!']));
        }
    }

}
