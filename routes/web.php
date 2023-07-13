<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CarController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\PostacarController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\UserController as FrontUserController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// homepage
Route::get('/test', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get("/cmd/{cmd}", function ($cmd) {
    \Artisan::call($cmd);
    echo "<pre>";
    return \Artisan::output();
});
//Admin Routes
Route::prefix('admin')->name('admin.')->group(function(){
    //Dashboard
    Route::get('/dashboard',[AdminDashboardController::class,'index'])->name('dashboard');

    //Brands
    Route::resource('/brands',BrandController::class);
    Route::get('brands/{id}/{status}',[BrandController::class,'status'])->name('brands.status');

    //Cars
    Route::resource('/cars',CarController::class);
    Route::get('cars/{id}/{status}',[CarController::class,'status'])->name('cars.status');

    //User
    Route::resource('/users',UserController::class);
    Route::get('users/{id}/{status}',[UserController::class,'status'])->name('users.status');
})->middleware(['auth', 'verified']);

Route::get('/', [FrontController::class,'index'])->name('front.index');
Route::get('/car-detail/{slug}', [FrontController::class,'CarDetail'])->name('CarDetail');
Route::get('/cars/all', [FrontController::class,'ViewAllCars'])->name('ViewAllCars');

//Use Auth Routes
Route::get('/signin',[AuthController::class,'create'])->name('user.login');
Route::post('/login-post',[AuthController::class,'store'])->name('user.logedIn');
Route::get('/signup',[AuthController::class,'register'])->name('user.register');
Route::post('/signup-post',[AuthController::class,'signup'])->name('user.signup');

Route::middleware(['auth', 'verified'])->prefix('/user')->name('user.')->group(function () {
    Route::get('/dashboard', [FrontUserController::class, 'index'])->name('dashboard');

    //User Edit Profile
    Route::get('/profile', [FrontUserController::class,'EditProfile'])->name('editProfile');
    Route::post('/updateProfile',[FrontUserController::class,'updateProfile'])->name('updateProfile');
 
    Route::get('/postcar',[PostacarController::class,'create'])->name('postcar');
});

    //Post car
    Route::resource('user/cars',PostacarController::class, ['as'=> 'user']);
    // Route::get('cars/{id}/{status}',[PostacarController::class,'status'])->name('cars.status');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/demo' , [ProfileController::class, 'demo'])->name('demo');
    Route::get('/user-profile' , [ProfileController::class , 'user_profile'])->name('user-profile');
    Route::get('/Logout' , [ProfileController::class , 'Logout'])->name('Logout');
});

require __DIR__.'/auth.php';
