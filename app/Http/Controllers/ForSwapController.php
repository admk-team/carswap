<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\AdminCarEmail;
use App\Mail\UserPostCarEmail;
use App\Models\Postacar;
use App\Models\Brand;
use App\Models\Car;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
class ForSwapController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands=Brand::where('status',1)->get();
        $categories=Category::get();
        return Inertia::render('User/SwapCar',['brands'=>$brands,'categories'=>$categories]);
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
            'trim' => 'required',
            'location' => 'required',
            'price' => 'required',
            'fuelType' => 'required',
            'model' => 'required',
            'year'=>'required',
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
            'porpose'=>'required',
            'fixedengine'=>'required',
            'fixedtrans'=>'required',
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
        $arr = [];
        
        if ($request->hasFile('images')) {
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
            } else {
                // Handle the case when the user exceeds the maximum allowed images
                return response()->json(['message' => 'You can upload a maximum of ' . $maxImages . ' images.'], 400);
            }
        }
        
        $images = implode(",", $arr);        
        $model=new Car();
        $model->lga=$request->lga;
        $model->street=$request->street;
        $model->cylinder=$request->cylinder;
        $model->title=$request->title;
        $model->brand_id= $request->brand_id;
        $model->user_id= auth()->user()->id;
        $model->condition=$request->condition;
        $model->engine_capacity=$request->engineCapacity;
        $model->mileage=$request->mileage;
        $model->location=$request->location;
        $model->price=$request->price;
        $model->drive=$request->drive;
        $model->images=$images;
        $model->fuel_Type=$request->fuelType;
        $model->type = "swap";
        $model->trim=$request->trim;
        $model->model=$request->model;
        $model->year=$request->year;
        $model->transmission=$request->transmission;
        $model->interior_color=$request->interiorColor;
        $model->exterior_color=$request->exteriorColor;
        $model->description=$request->description;
        $model->body_type=$request->body_type;
        $model->price_negotiable=$request->price_negotiable;
        $model->custom_paper=$request->custom_paper;
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
        $model->status=0;
        if($model->save()){
            $model->slug=Str::slug($request->title).'-'.$model->id;
            $model->update();
            $to = auth()->user()->email;
            $data=[
                'first_name'=>$request->first_name,
                'last_name'=>$request->last_name,
                'title'=>$request->title,
                'condition'=>$request->condition,
                'engine_capacity'=>$request->engine_capacity,
                'price'=>$request->price,
                'model'=>$request->model,
            ];
            Mail::to($to)->send(new UserPostCarEmail($data));
            Mail::to('cars@carswap.ng')->send(new AdminCarEmail($data));
            return Inertia::location(route('user.dashboard', ['success' => 'Car added successfully.']));
        }else{
            return Inertia::location(route('user.dashboard', ['error' => 'Failed Car not added.']));
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
