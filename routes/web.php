<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CarController;
use App\Http\Controllers\Admin\CarsForSwapController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PaymentGatewayController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\RatingeController;
use App\Http\Controllers\ForSwapController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\PostacarController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\RavepayController;
use App\Http\Controllers\SubscribeController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\SwapController;
use App\Http\Controllers\User\UserController as FrontUserController;
use App\Models\Rating;
use App\Models\Swap;
use Inertia\Inertia;
use Illuminate\Support\Facades\Artisan;

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
    Artisan::call($cmd);
    echo "<pre style='background-color: black;color:white; padding: 20px 10px;'>";
    return Artisan::output();
});
//Admin Routes
Route::prefix('admin')->name('admin.')->middleware(['admin.auth'])->group(function(){
    //Dashboard
    Route::get('/',[AdminDashboardController::class,'index'])->name('dashboard.index');
    Route::get('/dashboard',[AdminDashboardController::class,'index'])->name('dashboard');

    //Category
    Route::resource('/categories',CategoryController::class);

    //Brands
    Route::resource('/brands',BrandController::class);
    Route::get('brands/{id}/{status}',[BrandController::class,'status'])->name('brands.status');

    //Cars for sale
    Route::resource('/cars',CarController::class);
    Route::get('cars/{id}/{status}',[CarController::class,'status'])->name('cars.status');
     //Cars for Swap
    Route::resource('/swap',CarsForSwapController::class);
    Route::get('swap/{id}/{status}',[CarsForSwapController::class,'status'])->name('swap.status');
    //User
    Route::resource('/users',UserController::class);
    Route::get('users/{id}/{status}',[UserController::class,'status'])->name('users.status');
    Route::get('users/role/{id}/{role}',[UserController::class,'role'])->name('users.role');
    //Rating(reviews)
    Route::resource('/ratings',RatingeController::class);
    Route::get('/payments',[RatingeController::class,'payment'])->name('payments.index');
       //Rating(reviews)
    Route::resource('/ratings',RatingeController::class);
    Route::get('/payments',[RatingeController::class,'payment'])->name('payments.index');
    //Sale Inspections details
    Route::get('/inspections',[RatingeController::class,'Inspection'])->name('inspections.index');
    Route::get('inspections/{id}/{status}',[RatingeController::class,'status'])->name('inspections.status');
    //Swap Inspection details
    Route::get('/swap_Ins',[RatingeController::class,'Swap_ins'])->name('swap_Ins.index');
    Route::get('swap_Ins/{id}/{status}',[RatingeController::class,'statusIns'])->name('swap_Ins.status');
    
    //Paymentgatway
    Route::get('/paymentGateway',[PaymentGatewayController::class,'index'])->name('paymentGateway.index');
    Route::post('/paymentGateway/store',[PaymentGatewayController::class,'store'])->name('paymentGateway.store');

    //For Partners request
    Route::get('/partners',[RatingeController::class,'partners'])->name('partners.index');
     //For Subscribe details
     Route::get('/subscribe',[RatingeController::class,'subscribe'])->name('subscribe.index');
});

Route::get('/', [FrontController::class,'index'])->name('front.index');
Route::get('/car-detail/{slug}', [FrontController::class,'CarDetail'])->name('CarDetail');
Route::get('/cars/{type}', [FrontController::class,'ViewAllCars'])->name('ViewAllCars');
Route::get('/contactus', [FrontController::class,'contactus'])->name('contactus');
Route::get('/wishlist', [FrontController::class,'wishlist'])->name('wishlist');
Route::get('/partner', [FrontController::class,'partner'])->name('partner');
Route::get('/livechat', [FrontController::class,'livechat'])->name('livechat');

Route::get('/aboutus', [FrontController::class,'aboutus'])->name('aboutus');
Route::get('/search',[FrontController::class,'search'])->name('search');
Route::get('/suggestion',[FrontController::class,'suggestion'])->name('suggestion');

//Use Auth Routes
Route::get('/signin',[AuthController::class,'create'])->name('user.login');
Route::post('/login-post',[AuthController::class,'store'])->name('user.logedIn');
Route::get('/signup',[AuthController::class,'register'])->name('user.register');
Route::post('/signup-post',[AuthController::class,'signup'])->name('user.signup');

Route::middleware(['auth', 'verified'])->prefix('/user')->name('user.')->group(function () {
    Route::get('/dashboard', [FrontUserController::class, 'index'])->name('dashboard');
    Route::get('/wishlist', [FrontUserController::class,'wishlist'])->name('wishlist');
    Route::get('/wishlist/{id}', [FrontUserController::class,'add_to_wishlist'])->name('add.wishlist');
    //User Edit Profile
    Route::get('/profile', [FrontUserController::class,'EditProfile'])->name('editProfile');
    Route::post('/updateProfile',[FrontUserController::class,'updateProfile'])->name('updateProfile');
    Route::post('/updatePassword',[FrontUserController::class,'updatePassword'])->name('updatePassword');
    Route::get('/postcar',[PostacarController::class,'create'])->name('postcar');
    Route::get('/edit-car/{slug}',[PostacarController::class,'edit'])->name('editcar');
    Route::any('/update-car/{slug}',[PostacarController::class,'update'])->name('updateCar');
    Route::get('/delete-car/{slug}',[PostacarController::class,'softDeleteUser'])->name('deleteCar');

    // Payment initiation route
    Route::any('/store-payment', [RavepayController::class, 'store'])->name('storePayment');

    //ratings
    Route::post('user/ratings',[RatingController::class,'store'])->name('ratings.store');

    //swap
    Route::post('user/swap', [SwapController::class, 'store'])->name('swap.store');
     //Post car for swap
     Route::resource('/swap',ForSwapController::class);
});

    //contactus mail function call
    Route::post('user/mail',[FrontController::class,'handleMailForm'])->name('mail');
    // Payment callback route
    Route::get('/payment/callback', [RavepayController::class, 'handleCallback'])->name('callback');
    Route::any('/test', [RavepayController::class, 'test']);

    //Post car for sale
    Route::resource('user/cars',PostacarController::class, ['as'=> 'user']);
    
     //Post car for swap
     Route::resource('swap',ForSwapController::class);
 

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/demo' , [ProfileController::class, 'demo'])->name('demo');
    Route::get('/user-profile' , [ProfileController::class , 'user_profile'])->name('user-profile');
    Route::get('/Logout' , [ProfileController::class , 'Logout'])->name('Logout');
});
Route::name('footer.')->group(function () {
    Route::get('/location/{location}' , [FrontController::class, 'footerLocation'])->name('location');
    Route::get('/brand/{brand}' , [FrontController::class, 'footerBrands'])->name('brands');
});
   //Partners
   Route::resource('partners',PartnerController::class);
   Route::any('/partners/store', [PartnerController::class,'store'])->name('partners.store');
     //Subscribe
     Route::any('/subcribe/store', [SubscribeController::class,'store'])->name('subcribe.store');
   


require __DIR__.'/auth.php';
