<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands=Brand::latest()->get();
        return Inertia::render('Admin/Brand/Index',['brands'=>$brands]);
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
            return Inertia::location(route('admin.brands.index'));
        }else{
            return Inertia::redirect('Admin/Brand/Index');
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
            'title' => 'required',
            'image' => 'image',
        ]);
        $model=Brand::find($brand->id);
        if($request->hasFile('image')){
            if ($model->image) {
                Storage::disk('public')->delete($model->image);
            }
            $img_path = $request->file('image')->store('/images/brand', 'public');        
            $model->image = $img_path;
        }
        $model->title=$request->title;
        $model->description=$request->description;
        if($model->save()){
            return Inertia::location(route('admin.brands.index'));
        }else{
            return Inertia::redirect('Admin/Brand/Index');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        //
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
