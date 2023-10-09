<?php

namespace App\Http\Controllers\User;

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
        $categories=Category::get();
        return Inertia::render('User/PostCar',['brands'=>$brands,'categories'=>$categories]);
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
            'type' => 'required',
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
            'body_type' => 'required',
            'price_negotiable' => 'required',
            'custom_paper' => 'required',
            'year' => 'required',
            'no_owner' => 'required',
            'categories_id' => 'required',
            'feature' => 'required',
            'distress' => $request->input('type') == 'sale' ? 'required' : '',
            'title1' => $request->input('type') == 'swap' ? 'required' : '',
            'model1' => $request->input('type') == 'swap' ? 'required' : '',
          'year1' => $request->input('type') == 'swap' ? 'required' : '',
        'condition1' => $request->input('type') == 'swap' ? 'required' : '',
        'interiorColor1' => $request->input('type') == 'swap' ? 'required' : '',
        'milage1' => $request->input('type') == 'swap' ? 'required' : '',
        'brand1' => $request->input('type') == 'swap' ? 'required' : '',
        'fuelType1' => $request->input('type') == 'swap' ? 'required' : '',
        'transmission1' => $request->input('type') == 'swap' ? 'required' : '',
        'exteriorColor1' => $request->input('type') == 'swap' ? 'required' : '',
        'price1' => $request->input('type') == 'swap' ? 'required' : '',
        'cylinder1' => $request->input('type') == 'swap' ? 'required' : '',
        'custom_paper1' => $request->input('type') == 'swap' ? 'required' : '',
        'feature1' => $request->input('type') == 'swap' ? 'required' : '',
        'title2' => $request->input('type') == 'swap' ? 'required' : '',
        'model2' => $request->input('type') == 'swap' ? 'required' : '',
        'year2' => $request->input('type') == 'swap' ? 'required' : '',
        'condition2' => $request->input('type') == 'swap' ? 'required' : '',
        'interiorColor2' => $request->input('type') == 'swap' ? 'required' : '',
        'milage2' => $request->input('type') == 'swap' ? 'required' : '',
        'brand2' => $request->input('type') == 'swap' ? 'required' : '',
        'fuelType2' => $request->input('type') == 'swap' ? 'required' : '',
        'transmission2' => $request->input('type') == 'swap' ? 'required' : '',
        'exteriorColor2' => $request->input('type') == 'swap' ? 'required' : '',
        'price2' => $request->input('type') == 'swap' ? 'required' : '',
        'cylinder2' => $request->input('type') == 'swap' ? 'required' : '',
        'custom_paper2' => $request->input('type') == 'swap' ? 'required' : '',
        'feature2' => $request->input('type') == 'swap' ? 'required' : '',

        'porpose' => $request->input('type') == 'swap' ? 'required' : '',
        'fixedengine' => $request->input('type') == 'swap' ? 'required' : '',
        'fixedtrans' => $request->input('type') == 'swap' ? 'required' : '',
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
        $model->fuel_type=$request->fuelType;
        $model->type = $request->type;
        $model->trim=$request->trim;
        $model->model=$request->model;
        $model->transmission=$request->transmission;
        $model->interior_color=$request->interiorColor;
        $model->exterior_color=$request->exteriorColor;
        $model->description=$request->description;
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
        $model->porpose=$request->porpose;
        $model->fixedengine=$request->fixedengine;
        $model->fixedtrans=$request->fixedtrans;
        //new feilds swap1
        $model->brand1=$request->brand1;
        $model->fuelType1=$request->fuelType1;
        $model->transmission1=$request->transmission1;
        $model->exteriorColor1=$request->exteriorColor1;
        $model->price1=$request->price1;
        $model->cylinder1=$request->cylinder1;
        $model->custom_paper1=$request->custom_paper1;
        $model->feature1=$request->feature1;
        // if (is_array($request->feature1)) {
        //     $model->feature1 = implode(',', $request->feature1);
        // } else {
        //     // Handle the case where $request->feature is a string
        //     $model->feature1 = $request->feature1;
        // }
        
       //new feilds swap2
        $model->title2=$request->title2;
        $model->model2=$request->model2;
        $model->year2=$request->year2;
        $model->condition2=$request->condition2;
        $model->interiorColor2=$request->interiorColor2;
        $model->milage2=$request->milage2;
        $model->brand2 = $request->brand2;
        $model->fuelType2 = $request->fuelType2;
        $model->transmission2 = $request->transmission2;
        $model->exteriorColor2 = $request->exteriorColor2;
        $model->price2 = $request->price2;
        $model->cylinder2 = $request->cylinder2;
        $model->custom_paper2 = $request->custom_paper2;
        $model->feature2 = $request->feature2;

        // if (is_array($request->feature2)) {
        //     $model->feature2 = implode(',', $request->feature2);
        // } else {
        //     // Handle the case where $request->feature is a string
        //     $model->feature2 = $request->feature2;
        // }
        //new fileds
        $model->no_owner = $request->no_owner;
        $model->categories_id = $request->categories_id;
        $model->feature = $request->feature;
        // if (is_array($request->feature)) {
        //     $model->feature = implode(',', $request->feature);
        // } else {
        //     Handle the case where $request->feature is a string
        //     $model->feature = $request->feature;
        // }
        
        $model->distress = $request->distress;
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
    public function show(Request $request)
    {
       //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($slug)
    {
        
        $brands=Brand::where('status',1)->get();
        $categories=Category::get();
        $car=Car::where('slug',$slug)->first();
        $car->images=explode(",",$car->images);
        return Inertia::render('User/EditCar',['brands'=>$brands,'car'=>$car,'categories'=>$categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $rules = [
         
                'lga' => 'required',
                'street' => 'required',
                'cylinder' => 'required',
                'title' => 'required',
                'brand_id' => 'required',
                'condition' => 'required',
                'engineCapacity' => 'required',
                'mileage' => 'required',
                'trim' => 'required',
                'type' => 'required',
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
                'body_type' => 'required',
                'price_negotiable' => 'required',
                'custom_paper' => 'required',
                'year' => 'required',
                'no_owner' => 'required',
                'categories_id' => 'required',
                'feature' => 'required',
                'distress' => $request->input('type') == 'sale' ? 'required' : '',
                'title1' => $request->input('type') == 'swap' ? 'required' : '',
                'model1' => $request->input('type') == 'swap' ? 'required' : '',
              'year1' => $request->input('type') == 'swap' ? 'required' : '',
            'condition1' => $request->input('type') == 'swap' ? 'required' : '',
            'interiorColor1' => $request->input('type') == 'swap' ? 'required' : '',
            'milage1' => $request->input('type') == 'swap' ? 'required' : '',
            'brand1' => $request->input('type') == 'swap' ? 'required' : '',
            'fuelType1' => $request->input('type') == 'swap' ? 'required' : '',
            'transmission1' => $request->input('type') == 'swap' ? 'required' : '',
            'exteriorColor1' => $request->input('type') == 'swap' ? 'required' : '',
            'price1' => $request->input('type') == 'swap' ? 'required' : '',
            'cylinder1' => $request->input('type') == 'swap' ? 'required' : '',
            'custom_paper1' => $request->input('type') == 'swap' ? 'required' : '',
            'feature1' => $request->input('type') == 'swap' ? 'required' : '',
            'title2' => $request->input('type') == 'swap' ? 'required' : '',
            'model2' => $request->input('type') == 'swap' ? 'required' : '',
            'year2' => $request->input('type') == 'swap' ? 'required' : '',
            'condition2' => $request->input('type') == 'swap' ? 'required' : '',
            'interiorColor2' => $request->input('type') == 'swap' ? 'required' : '',
            'milage2' => $request->input('type') == 'swap' ? 'required' : '',
            'brand2' => $request->input('type') == 'swap' ? 'required' : '',
            'fuelType2' => $request->input('type') == 'swap' ? 'required' : '',
            'transmission2' => $request->input('type') == 'swap' ? 'required' : '',
            'exteriorColor2' => $request->input('type') == 'swap' ? 'required' : '',
            'price2' => $request->input('type') == 'swap' ? 'required' : '',
            'cylinder2' => $request->input('type') == 'swap' ? 'required' : '',
            'custom_paper2' => $request->input('type') == 'swap' ? 'required' : '',
            'feature2' => $request->input('type') == 'swap' ? 'required' : '', 
            'porpose' => $request->input('type') == 'swap' ? 'required' : '',
            'fixedengine' => $request->input('type') == 'swap' ? 'required' : '',
            'fixedtrans' => $request->input('type') == 'swap' ? 'required' : '',       
        ];
        
        $messages = [
            'brand_id.required' => 'The brand field is required',
            'trim.required' => 'The Owner field is required',
        ];
         
        $request->validate($rules, $messages);
            
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
        $model->fuel_type=$request->fuelType;
        $model->type = $request->type;
        $model->trim=$request->trim;
        $model->model=$request->model;
        $model->transmission=$request->transmission;
        $model->interior_color=$request->interiorColor;
        $model->exterior_color=$request->exteriorColor;
        $model->description=$request->description;
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
        $model->porpose=$request->porpose;
        $model->fixedengine=$request->fixedengine;
        $model->fixedtrans=$request->fixedtrans;
        //new feilds swap1
        $model->brand1=$request->brand1;
        $model->fuelType1=$request->fuelType1;
        $model->transmission1=$request->transmission1;
        $model->exteriorColor1=$request->exteriorColor1;
        $model->price1=$request->price1;
        $model->cylinder1=$request->cylinder1;
        $model->custom_paper1=$request->custom_paper1;
        $model->feature1 = $request->feature1;
        // if (is_array($request->feature1)) {
        //     $model->feature1 = implode(',', $request->feature1);
        // } else {
        //     // Handle the case where $request->feature is a string
        //     $model->feature1 = $request->feature1;
        // }
       //new feilds swap2
        $model->title2=$request->title2;
        $model->model2=$request->model2;
        $model->year2=$request->year2;
        $model->condition2=$request->condition2;
        $model->interiorColor2=$request->interiorColor2;
        $model->milage2=$request->milage2;
        $model->brand2 = $request->brand2;
        $model->fuelType2 = $request->fuelType2;
        $model->transmission2 = $request->transmission2;
        $model->exteriorColor2 = $request->exteriorColor2;
        $model->price2 = $request->price2;
        $model->cylinder2 = $request->cylinder2;
        $model->custom_paper2 = $request->custom_paper2;
        $model->feature2 = $request->feature2;
        // if (is_array($request->feature2)) {
        //     $model->feature2 = implode(',', $request->feature2);
        // } else {
        //     // Handle the case where $request->feature is a string
        //     $model->feature2 = $request->feature2;
        // }
        //new fileds
        $model->no_owner = $request->no_owner;
        $model->categories_id = $request->categories_id;
        $model->feature = $request->feature;
        // if (is_array($request->feature)) {
        //     $model->feature = implode(',', $request->feature);
        // } else {
        //     // Handle the case where $request->feature is a string
        //     $model->feature = $request->feature;
        // }
        $model->distress = $request->distress;
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
    public function softDeleteUser($slug)
    {
        $user = Car::where('slug',$slug)->first();
        if($user->delete()){
            return redirect()->back()->withSuccess(['success' => 'Car deleted successfully.']);
        }else{
            return redirect()->back()->withError('error', 'Failed to delete car.');
        }
    }

}