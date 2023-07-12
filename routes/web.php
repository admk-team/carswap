<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CarController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Users\PostacarController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontController;
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

Route::get('/', [FrontController::class,'index'])->name('test');
Route::get('/car-detail/{id}', [FrontController::class,'CarDetail'])->name('CarDetail');
Route::get('/cars/all', [FrontController::class,'ViewAllCars'])->name('ViewAllCars');


Route::get('/detail', function () {
    return Inertia::render('CarDetail');
})->name('car.detail');

Route::get('/all', function () {
    return Inertia::render('AllDetail');
})->name('all.detail');
Route::get('/user/profile', function () {
    return Inertia::render('EditProfile');
})->name('edit.profile');

// Route::get('/bannerslider', function () {
//     return Inertia::render('BannerSlider');
// })->middleware(['auth', 'verified'])->name('bannerslider');
Route::get('/postcar', function () {
    return Inertia::render('PostCar');
})->middleware(['auth', 'verified'])->name('postcar');
// Route::post('/postcars', [PostacarController::class, 'store'])->name('postcars.store');
Route::get('/userdashboard', function () {
    return Inertia::render('UserDashBoard');
})->middleware(['auth', 'verified'])->name('userdashboard');

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
