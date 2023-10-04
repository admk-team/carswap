<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Providers\RouteServiceProvider;
use Inertia\Response;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Mail\SignupEmail;
use App\Mail\AdminSignupEmail;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
class AuthController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('LoginPage', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }
    public function store(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->only('email', 'password');
        $user = User::where('email', $credentials['email'])->first();

        if ($user && $user->status == 0) {
            return redirect()->back()->withErrors(['deactivated' => 'Your account is currently deactivated.']);
        }else{
            $request->authenticate();

            $request->session()->regenerate();

            return redirect()->route('front.index');
        }

        // if ($request->authenticate()) {
        //     $request->session()->regenerate();
        //     return redirect()->route('front.index');
        // } else {
        //     return redirect()->back()->withErrors(['credentials' => 'Invalid email or password.']);
        // }
    }
    public function register()
    {
        return Inertia::render('SignUpPage');
    }
    public function signup(RegisterRequest $request)
    {
        // return $request;
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone_no' => $request->phone_no,
            'email' => $request->email,
            'status' => 1,
            'password' => Hash::make($request->password),
        ]);
        

        event(new Registered($user));
        $to =$user->email;
        $data=[
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'phone_no' => $request->phone_no,
           
        ];
        Mail::to($to)->send(new SignupEmail($data));
        Mail::to('cars@carswap.ng')->send(new AdminSignupEmail($data));

        Auth::login($user);

        // return redirect(RouteServiceProvider::HOME);
        return redirect()->route('front.index');
    }
}
