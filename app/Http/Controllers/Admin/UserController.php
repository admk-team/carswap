<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users=User::latest()->get();
        return Inertia::render('Admin/Users/Index',['users'=>$users, 'success'=>request()->get('success')]); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Users/Create'); 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|confirmed',
            'city' => 'required',
            'state' => 'required',
            'address' => 'required',
            'phone_no'=>'required',
            'image' => 'image'
        ]);
        if($request->hasFile('image')){
            $img_path = $request->file('image')->store('/images/user', 'public');
        }else{
            $img_path='';
        }
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'password' => Hash::make($request->password),
            'city' => $request->city,
            'state' => $request->state,
            'address' => $request->address,
            'phone_no'=>$request->phone_no,
            'image' => $img_path
        ]);
        if($user){
            return Inertia::location(route('admin.users.index', ['success' => 'User added successfully.']));
        }else{
            return Inertia::location(route('admin.users.index', ['error' => 'Failed to add user!']));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user=User::find($id);
        return Inertia::render('Admin/Users/Edit',['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=$request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|unique:users,email,'.$id,
            'city' => 'required',
            'state' => 'required',
            'address' => 'required',
            'phone_no' => 'required'
        ]);
    
        $user = User::findOrFail($id);
    
        $user->fill($data);
    
        if ($request->hasFile('image')) {
            $img_path = $request->file('image')->store('/images/user', 'public');
            $user->image = $img_path;
        }
        if($user->update()){
            return Inertia::location(route('admin.users.index', ['success' => 'User updated successfully.']));
        }else{
            return Inertia::location(route('admin.users.index', ['error' => 'Failed to update the user!']));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user=User::find($id);
        if($user){
            if ($user->image) {
                Storage::disk('public')->delete($user->image);
            }
            $user->delete();
            return Inertia::location(route('admin.users.index', ['success' => 'User deleted successfully.']));
        }else{
            return redirect()->back()->with('error', 'User not found.');
        }
    }
    public function status($id,$status)
    {
        $user=User::find($id);
        $user->status=$status;
        if ($user->save()) {
            return Inertia::location(route('admin.users.index', ['success' => 'Status Change successfully.']));
        } else {
            return Inertia::location(route('admin.users.index', ['success' => 'Failed to change status.']));
        }
    }
    public function role($id,$role)
    {
        $user=User::find($id);
        $user->role=$role;
        if ($user->save()) {
            return Inertia::location(route('admin.users.index', ['success' => 'Role Change successfully.']));
        } else {
            return Inertia::location(route('admin.users.index', ['success' => 'Failed to change role.']));
        }
    }
}
