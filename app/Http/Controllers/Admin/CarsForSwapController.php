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
        //
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
            'engineCapacity' => 'required',
            'mileage' => 'required',
            'type' => 'required',
            'trim' => 'required',
            'location' => 'required',
            'price' => 'required',
            'fuelType' => 'required',
            'model' => 'required',
            'transmission' => 'required',
            'drive' => 'required',
            'interiorColor' => 'required',
            'exteriorColor' => 'required',
            'description' => 'required',
            'images' => 'required|array',
            'images.*' => 'image',
            'body_type'=>'required',
            'price_negotiable'=>'required',
            'custom_paper'=>'required',
            'year'=>'required'
           
        ], [
            'brand_id.required' => 'The brand field is required',
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
        $model->engine_capacity=$request->engineCapacity;
        $model->mileage=$request->mileage;
        $model->type = "sale";
        $model->trim=$request->trim;
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
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
