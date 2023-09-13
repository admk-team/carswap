<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Car;
use App\Models\User;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CarsForSwapController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cars = Car::where('type', 'swap')
        ->with('brand', 'payment', 'user')
        ->latest()
        ->get();
    
    return Inertia::render('Admin/CarsForSwap/Index', [
        'cars' => $cars,
        'success' => request()->get('success'),
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $brands=Brand::get();
        $users=User::get();
        return Inertia::render('Admin/CarsForSwap/Create',['brands'=>$brands,'users'=>$users]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'lga' => 'required',
            'street' => 'required',
            'cylinder' => 'required',
            'title' => 'required',
            'brand_id' => 'required',
            'condition' => 'required',
            'engine_capacity' => 'required',
            'mileage' => 'required',
            'type' => 'required',
            'trim' => 'required',
            'location' => 'required',
            'price' => 'required',
            'fuel_type' => 'required',
            'model' => 'required',
            'transmission' => 'required',
            'drive' => 'required',
            'interior_color' => 'required',
            'exterior_color' => 'required',
            'description' => 'required',
            'images' => 'required|array',
            'images.*' => 'image',
            'body_type' => 'required',
            'price_negotiable' => 'required',
            'custom_paper' => 'required',
            'porpose' => 'required',
            'fixedtrans' => 'required',
            'fixedengine' => 'required',
            'year' => 'required',
            'title1'=>'required',
            'model1'=>'required',
            'year1'=>'required',
            'condition1'=>'required',
            'interiorColor1'=>'required',
            'milage1'=>'required',
            'title2'=>'required',
            'model2'=>'required',
            'year2'=>'required',
            'condition2'=>'required',
            'interiorColor2'=>'required',
            'milage2'=>'required',
        ], [
            'brand_id.required' => 'The brand field is required',
            'trim.required' => 'The Owner field is required',
        ]);
        
        $images = '';
        $arr=[];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $item) {
                $var = date_create();
                $time = date_format($var, 'YmdHis');
                $imageName = $time . '-' . $item->getClientOriginalName();
                $item->move(public_path('storage/images/cars'), $imageName);
                array_push($arr, '/images/cars/' . $imageName);
            }
        }
        $images = implode(",", $arr);
        $model=new Car();
        $model->title=$request->title;
        $model->brand_id=$request->brand_id;
        $model->user_id=$request->user_id;
        $model->condition=$request->condition;
        $model->engine_capacity=$request->engine_capacity;
        $model->mileage=$request->mileage;
        $model->trim=$request->trim;
        $model->type = "swap";
        $model->location=$request->location;
        $model->price=$request->price;
        $model->drive=$request->drive;
        $model->images=$images;
        $model->fuel_type=$request->fuel_type;
        $model->model=$request->model;
        $model->transmission=$request->transmission;
        $model->interior_color=$request->interior_color;
        $model->exterior_color=$request->exterior_color;
        $model->description=$request->description;
        $model->lga=$request->lga;
        $model->street=$request->street;
        $model->cylinder=$request->cylinder;
        $model->body_type=$request->body_type;
        $model->price_negotiable=$request->price_negotiable;
        $model->custom_paper=$request->custom_paper;
        $model->year=$request->year;
        $model->porpose=$request->porpose;
        $model->fixedengine=$request->fixedengine;
        $model->fixedtrans=$request->fixedtrans;
        $model->title1=$request->title1;
        $model->model1=$request->model1;
        $model->year1=$request->year1;
        $model->condition1=$request->condition1;
        $model->interiorColor1=$request->interiorColor1;
        $model->milage1=$request->milage1;
        $model->title2=$request->title2;
        $model->model2=$request->model2;
        $model->year2=$request->year2;
        $model->condition2=$request->condition2;
        $model->interiorColor2=$request->interiorColor2;
        $model->milage2=$request->milage2;
        if($model->save()){
            $model->slug=Str::slug($request->title).'-'.$model->id;
            $model->update();
            return Inertia::location(route('admin.swap.index', ['success' => 'Car added successfully.']));
        }else{
            return Inertia::location(route('admin.swap.index', ['error' => 'Failed to add car!']));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $car = Car::find($id);

        if (!$car) {
            // Handle not found error
        }
    
        $images = explode(',', $car->images); // Explode the images string into an array
        $car->images = $images; // Replace the images property with the array of images
    
        $user = $car->user1; // Retrieve the associated user data
        $payment = Payment::where('user_id', $user->id)
            ->where('car_id', $car->id)
            ->first(); // Retrieve the payment data
    
        return Inertia::render('Admin/CarsForSwap/Details', [
            'car' => $car, // Pass the modified car data (with exploded images array) to the Details component
            'user' => $user, // Pass the user data to the Details component
            'payment' => $payment,
        ]);      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $brands=Brand::get();
        $users=User::get();
        $car=Car::find($id);
        return Inertia::render('Admin/CarsForSwap/Edit',['brands'=>$brands,'car'=>$car,'users'=>$users]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'lga' => 'required',
            'street' => 'required',
            'cylinder' => 'required',
            'title' => 'required',
            'brand_id' => 'required',
            'condition' => 'required',
            'engine_capacity' => 'required',
            'mileage' => 'required',
            'type' => 'required',
            'trim' => 'required',
            'location' => 'required',
            'price' => 'required',
            'fuel_type' => 'required',
            'model' => 'required',
            'transmission' => 'required',
            'drive' => 'required',
            'interior_color' => 'required',
            'exterior_color' => 'required',
            'description' => 'required',
            'images.*' => 'image',
            'body_type' => 'required',
            'price_negotiable' => 'required',
            'custom_paper' => 'required',
            'porpose' => 'required',
            'fixedtrans' => 'required',
            'fixedengine' => 'required',
            'year' => 'required',
            'title1'=>'required',
            'model1'=>'required',
            'year1'=>'required',
            'condition1'=>'required',
            'interiorColor1'=>'required',
            'milage1'=>'required',
            'title2'=>'required',
            'model2'=>'required',
            'year2'=>'required',
            'condition2'=>'required',
            'interiorColor2'=>'required',
            'milage2'=>'required',
        ], [
            'brand_id.required' => 'The brand field is required',
            'trim.required' => 'The Owner field is required',
        ]);
        $model=Car::find($id);

        // Initialize $images with the existing images
  $images = $model->images;
  
  if ($request->hasFile('images')) {
      // Delete existing images (if any)
      $existingImages = explode(',', $model->images);
      foreach ($existingImages as $existingImage) {
          Storage::disk('public')->delete($existingImage);
      }
      
      $arr = [];
      $maxImages = 30;
      $uploadedImagesCount = count($request->file('images'));
      
      if ($uploadedImagesCount <= $maxImages) {
          foreach ($request->file('images') as $item) {
              $var = date_create();
              $time = date_format($var, 'YmdHis');
              $imageName = $time . '-' . $item->getClientOriginalName();
              $item->move(public_path('storage/images/cars'), $imageName);
              array_push($arr, '/images/cars/' . $imageName);
          }
          // After successfully uploading and processing the new images
          $images = implode(",", $arr);
      } else {
          // Handle the case when the user exceeds the maximum allowed images
          return response()->json(['message' => 'You can upload a maximum of ' . $maxImages . ' images.'], 400);
      }
  }
  
  $model->images = $images; // Update the model's images property
          $model->title=$request->title;
          $model->brand_id=$request->brand_id;
          $model->user_id=$request->user_id;
          $model->condition=$request->condition;
          $model->engine_capacity=$request->engine_capacity;
          $model->mileage=$request->mileage;
          $model->trim=$request->trim;
          $model->location=$request->location;
          $model->price=$request->price;
          $model->drive=$request->drive;
          $model->fuel_type=$request->fuel_type;
          $model->model=$request->model;
          $model->transmission=$request->transmission;
          $model->interior_color=$request->interior_color;
          $model->exterior_color=$request->exterior_color;
          $model->description=$request->description;
          $model->lga=$request->lga;
          $model->street=$request->street;
          $model->cylinder=$request->cylinder;
          $model->body_type=$request->body_type;
          $model->price_negotiable=$request->price_negotiable;
          $model->custom_paper=$request->custom_paper;
          $model->year=$request->year;
          $model->title1=$request->title1;
          $model->model1=$request->model1;
          $model->year1=$request->year1;
          $model->condition1=$request->condition1;
          $model->interiorColor1=$request->interiorColor1;
          $model->milage1=$request->milage1;
          $model->title2=$request->title2;
          $model->model2=$request->model2;
          $model->year2=$request->year2;
          $model->condition2=$request->condition2;
          $model->interiorColor2=$request->interiorColor2;
          $model->milage2=$request->milage2;
          if($model->save()){
              $model->slug=Str::slug($request->title).'-'.$model->id;
              $model->update();
              return Inertia::location(route('admin.swap.index', ['success' => 'Car updated successfully.']));
          }else{
              return Inertia::location(route('admin.swap.index', ['error' => 'Failed to update car!']));
          }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    { 
        $car = Car::find($id);
        if ($car) {
            // if ($car->image) {
            //     Storage::disk('public')->delete($car->image);
            // }
            $car->delete();
            return Inertia::location(route('admin.swap.index', ['success' => 'Car deleted successfully.']));
        } else {
            return redirect()->back()->with('error', 'Car not found.');
        }
    }
    public function status($id,$status)
    {
        $car=Car::find($id);
        $car->status=$status;
        if ($car->save()) {
            
            return Inertia::location(route('admin.swap.index', ['success' => 'Status Change successfully.']));
        } else {
            return Inertia::location(route('admin.swap.index', ['success' => 'Failed to change status.']));
        }
    }
}
