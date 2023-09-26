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

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cars = Car::where('type', 'sale')
        ->with('brand', 'payment', 'user')
        ->latest()
        ->get();
    
    return Inertia::render('Admin/CarsForSale/Index', [
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
        return Inertia::render('Admin/CarsForSale/Create',['brands'=>$brands,'users'=>$users]);
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
            'year' => 'required'
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
        $model->type = "sale";
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
        if($model->save()){
            $model->slug=Str::slug($request->title).'-'.$model->id;
            $model->update();
            return Inertia::location(route('admin.cars.index', ['success' => 'Car added successfully.']));
        }else{
            return Inertia::location(route('admin.cars.index', ['error' => 'Failed to add car!']));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
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
    
        return Inertia::render('Admin/CarsForSale/Details', [
            'car' => $car, // Pass the modified car data (with exploded images array) to the Details component
            'user' => $user, // Pass the user data to the Details component
            'payment' => $payment,
        ]);      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $brands=Brand::get();
        $users=User::get();
        $car=Car::find($id);
        return Inertia::render('Admin/CarsForSale/Edit',['brands'=>$brands,'car'=>$car,'users'=>$users]);
    }
    public function update($id,Request $request)
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
            'body_type'=>'required',
            'price_negotiable'=>'required',
            'custom_paper'=>'required',
            'year'=>'required'
           
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
        if($model->save()){
            $model->slug=Str::slug($request->title).'-'.$model->id;
            $model->update();
            return Inertia::location(route('admin.cars.index', ['success' => 'Car updated successfully.']));
        }else{
            return Inertia::location(route('admin.cars.index', ['error' => 'Failed to update car!']));
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function destroy($id)
    {
        $data = Car::findOrFail($id);
        if($data){
        if($data->images){
            $images = explode(",", $data->images);
            foreach($images as $img){
                if($img){
                    Storage::disk('public')->delete($img);
                }
            }
        }
        if($data->destroy($data->id)){
            return redirect()->back()->with(['success' => 'Car deleted successfully.']);
        }else{
            return redirect()->back()->with('error', 'Failed to delete car.');
        }
    }
    }
    public function status($id,$status)
    {
        $car=Car::find($id);
        $car->status=$status;
        if ($car->save()) {
            
            return Inertia::location(route('admin.cars.index', ['success' => 'Status Change successfully.']));
        } else {
            return Inertia::location(route('admin.cars.index', ['success' => 'Failed to change status.']));
        }
    }
}
