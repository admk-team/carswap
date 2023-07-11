<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cars=Car::with('brand')->latest()->get();
        return Inertia::render('Admin/Cars/Index',['cars'=>$cars, 'success'=>request()->get('success')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $brands=Brand::get();
        return Inertia::render('Admin/Cars/Create',['brands'=>$brands]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'brand_id' => 'required',
            'condition' => 'required',
            'engineCapacity' => 'required',
            'mileage' => 'required',
            'location' => 'required',
            'price' => 'required',
            'fuelType' => 'required',
            'model' => 'required',
            'transmission' => 'required',
            'interiorColor' => 'required',
            'exteriorColor' => 'required',
            'description' => 'required',
            'images' => 'required|array',
            'images.*' => 'image',
        ],[
            'brand_id.required' =>'The brand field is required',
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
        $model->condition=$request->condition;
        $model->engine_capacity=$request->engineCapacity;
        $model->mileage=$request->mileage;
        $model->location=$request->location;
        $model->price=$request->price;
        $model->drive=$request->drive;
        $model->images=$images;
        $model->fuel_Type=$request->fuelType;
        $model->model=$request->model;
        $model->transmission=$request->transmission;
        $model->interior_color=$request->interiorColor;
        $model->exterior_color=$request->exteriorColor;
        $model->description=$request->description;
        if($model->save()){
            return Inertia::location(route('admin.cars.index', ['success' => 'Car added successfully.']));
        }else{
            return Inertia::location(route('admin.cars.index', ['error' => 'Failed to add car!']));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Car $car)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $brands=Brand::get();
        $car=Car::find($id);
        return Inertia::render('Admin/Cars/Edit',['brands'=>$brands,'car'=>$car]);
    }
    public function update($id,Request $request)
    {
        $request->validate([
            'title' => 'required',
            'brand_id' => 'required',
            'condition' => 'required',
            'engine_capacity' => 'required',
            'mileage' => 'required',
            'location' => 'required',
            'price' => 'required',
            'fuel_type' => 'required',
            'model' => 'required',
            'transmission' => 'required',
            'interior_color' => 'required',
            'exterior_color' => 'required',
            'description' => 'required',
            'images.*' => 'image',
        ]);
        
        $model=Car::find($id);
        if($request->hasFile('images')){
            if ($request->hasFile('images')) {
                $existingImages = explode(',', $model->images);
                foreach ($existingImages as $existingImage) {
                    Storage::disk('public')->delete($existingImage);
                }
            }
            $images = '';
            $arr=[];
            foreach ($request->images ?? [] as $item){
                $var = date_create();
                $time = date_format($var, 'YmdHis');
                $imageName = $time . '-' . $item->getClientOriginalName();
                $item->move(public_path('storage/images/cars'), $imageName);
                array_push($arr,'/images/cars/'.$imageName);
            }
            $images = implode(",", $arr);
            $model->images=$images;
        }
        $model->title=$request->title;
        $model->brand_id=$request->brand_id;
        $model->condition=$request->condition;
        $model->engine_capacity=$request->engine_capacity;
        $model->mileage=$request->mileage;
        $model->location=$request->location;
        $model->price=$request->price;
        $model->drive=$request->drive;
        $model->fuel_type=$request->fuel_type;
        $model->model=$request->model;
        $model->transmission=$request->transmission;
        $model->interior_color=$request->interior_color;
        $model->exterior_color=$request->exterior_color;
        $model->description=$request->description;
        if($model->save()){
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
        $car=Car::find($id);
        if($car){
            // if ($car->image) {
            //     Storage::disk('public')->delete($car->image);
            // }
            $car->delete();
            return Inertia::location(route('admin.cars.index', ['success' => 'car deleted successfully.']));
        }else{
            return redirect()->back()->with('error', 'Car not found.');
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
