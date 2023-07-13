<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Postacar;
use App\Models\Brand;
use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;
class PostacarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $brands=Brand::where('status',1)->get();
        return Inertia::render('User/PostCar',['brands'=>$brands]);
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
            'drive' => 'required',
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
        $model->brand_id= $request->brand_id;
        // $model->user_id= auth()->id(1);// auth()->id();
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
            return Inertia::location(route('user.dashboard', ['success' => 'Car added successfully.']));
        }else{
            return Inertia::location(route('user.dashboard', ['error' => 'Failed Car not added.']));
        }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Postacar $postacar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Postacar $postacar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Postacar $postacar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Postacar $postacar)
    {
        //
    }
}
