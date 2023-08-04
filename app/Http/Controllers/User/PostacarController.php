<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Mail\AdminCarEmail;
use App\Mail\UserPostCarEmail;
use App\Models\Postacar;
use App\Models\Brand;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
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
            'swaptitle1' => $request->type == 'swap' ? 'required' : '',
            'swaptitle2' => $request->type == 'swap' ? 'required' : '',
        ], [
            'brand_id.required' => 'The brand field is required',
            'swaptitle1.required' => 'The first swap title is required',
            'swaptitle2.required' => 'The second swap title is required',
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
        $model->type=$request->type;
        $model->swaptitle1=$request->swaptitle1;
        $model->swaptitle2=$request->swaptitle2;
        $model->trim=$request->trim;
        $model->model=$request->model;
        $model->transmission=$request->transmission;
        $model->interior_color=$request->interiorColor;
        $model->exterior_color=$request->exteriorColor;
        $model->description=$request->description;
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
    public function show(Postacar $postacar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($slug)
    {
        
        $brands=Brand::where('status',1)->get();
        $car=Car::where('slug',$slug)->first();
        $car->images=explode(",",$car->images);
        return Inertia::render('User/EditCar',['brands'=>$brands,'car'=>$car]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $request->validate([
            'title' => 'required',
            'brand_id' => 'required',
            'condition' => 'required',
            'engineCapacity' => 'required',
            'mileage' => 'required',
            'type' => 'required',
            'swaptitle1' => 'required',
            'swaptitle2' => 'required',
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
            'images.*' => 'image',
        ],[
            'brand_id.required' =>'The brand field is required',
            'swaptitle1.required' =>'The field is required',
            'swaptitle2.required' =>'The field is required',
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
            $model->images=$images;
        }
        $model->title=$request->title;
        $model->brand_id= $request->brand_id;
        $model->condition=$request->condition;
        $model->engine_capacity=$request->engineCapacity;
        $model->mileage=$request->mileage;
        $model->location=$request->location;
        $model->price=$request->price;
        $model->drive=$request->drive;
        $model->fuel_Type=$request->fuelType;
        $model->model=$request->model;
        $model->type=$request->type;
        $model->swaptitle1=$request->swaptitle1;
        $model->swaptitle2=$request->swaptitle2;
        $model->trim=$request->trim;
        $model->transmission=$request->transmission;
        $model->interior_color=$request->interiorColor;
        $model->exterior_color=$request->exteriorColor;
        $model->description=$request->description;
        if($model->save()){
            $model->slug=Str::slug($request->title).'-'.$model->id;
            $model->update();
            return Inertia::location(route('user.dashboard', ['success' => 'Car update successfully.']));
        }else{
            return Inertia::location(route('user.dashboard', ['error' => 'Failed to update car.']));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete($slug)
    {
        $model=Car::where('slug',$slug)->first();
        if($model){
            if($model->images){
                $images = explode(",", $model->images);
                foreach($images as $img){
                    if($img){
                        Storage::disk('public')->delete($img);
                    }
                }
            }
            $model->delete();
            return redirect()->back()->withSuccess(['success' => 'Car deleted successfully.']);
        }else{
            return redirect()->back()->withError('error', 'Failed to delete car.');
        }
    }
}
