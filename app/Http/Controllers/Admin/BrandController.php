<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands=Brand::latest()->get();
        return Inertia::render('Admin/Brand/Index',['brands'=>$brands, 'success'=>request()->get('success')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Brand/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'required|image',
        ]);
        if($request->hasFile('image')){
            $img_path = $request->file('image')->store('/images/brand', 'public');
        }
        $model=new Brand();
        $model->title=$request->title;
        $model->image = $img_path ?? '';
        $model->description=$request->description;
        if($model->save()){
            $model->slug=Str::slug($request->title).'-'.$model->id;
            $model->update();
            return Inertia::location(route('admin.brands.index', ['success' => 'Brand added successfully.']));
        }else{
            return Inertia::location(route('admin.brands.index', ['error' => 'Failed to add brand!']));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $brand=Brand::find($id);
        return Inertia::render('Admin/Brand/Edit',['brand'=>$brand]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand)
    {
        $request->validate([
            'title' => 'required'
        ]);
        $model=Brand::find($brand->id);
        if($request->hasFile('image')){
            $img_path = $request->file('image')->store('/images/brand', 'public');
            if ($model->image && $img_path) {
                Storage::disk('public')->delete($model->image);
            }
            $model->image = $img_path;
        }
        $model->title=$request->title;
        $model->description=$request->description;
        if($model->save()){
            $model->slug=Str::slug($request->title).'-'.$model->id;
            $model->update();
            return Inertia::location(route('admin.brands.index', ['success' => 'Brand updated successfully.']));
        }else{
            return Inertia::location(route('admin.brands.index', ['error' => 'Failed to update the brand!']));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $brand=Brand::find($id);
        if($brand){
            if ($brand->image) {
                Storage::disk('public')->delete($brand->image);
            }
            $brand->delete();
            return Inertia::location(route('admin.brands.index', ['success' => 'Brand deleted successfully.']));
        }else{
            return redirect()->back()->with('error', 'Brand not found.');
        }
    }
    public function status($id,$status)
    {
        $brand=Brand::find($id);
        $brand->status=$status;
        if ($brand->save()) {
            return redirect()->back();
        } else {
            return response()->json(['success' => false]);
        }
    }
}
