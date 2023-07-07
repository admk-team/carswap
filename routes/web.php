<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
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


//render admin dashboard 
Route::get('/admin_dashboard' , [DashboardController::class, 'index']);
// homepage is Test
Route::get('/', function () {
    return Inertia::render('Test', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    $username = auth()->user()->name;

    return Inertia::render('Dashboard', [
        'username' => $username,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


//Admin Routes
Route::prefix('admin')->name('admin.')->group(function(){
    //Dashboard
    Route::get('/dashboard',[AdminDashboardController::class,'index'])->name('dashboard');
    //Brands
    Route::resource('/brands',BrandController::class);
})->middleware(['auth', 'verified']);


//Route::get('/test', function () {
    //return Inertia::render('Test', ['test_var' => "hello world!!!!!!!!"]);
//})->middleware(['auth', 'verified'])->name('test');

Route::get('/postcar', function () {
    return Inertia::render('PostCar');
})->middleware(['auth', 'verified'])->name('postcar');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/demo' , [ProfileController::class, 'demo'])->name('demo');
    Route::get('/user-profile' , [ProfileController::class , 'user_profile'])->name('user-profile');
    Route::get('/Logout' , [ProfileController::class , 'Logout'])->name('Logout');
});

require __DIR__.'/auth.php';
