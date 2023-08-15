<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories=Category::latest()->get();
        return Inertia::render('Admin/Category/Index',['categories'=>$categories, 'success'=>request()->get('success')]);
    }

    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
        ]);
        $model=new Category();
        $model->title=$request->title;
        if($model->save()){
            return Inertia::location(route('admin.categories.index', ['success' => 'categories added successfully.']));
        }else{
            return Inertia::location(route('admin.categories.index', ['error' => 'Failed to add Category!']));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $Category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $category=Category::find($id);
        return Inertia::render('Admin/Category/Edit',['category'=>$category]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $Category)
    {
        $request->validate([
            'title' => 'required'
        ]);
        $model=Category::find($Category->id);
        $model->title=$request->title;
        if($model->save()){
            return Inertia::location(route('admin.categories.index', ['success' => 'Category updated successfully.']));
        }else{
            return Inertia::location(route('admin.categories.index', ['error' => 'Failed to update the Category!']));
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $Category=Category::find($id);
        if($Category){
            $Category->delete();
            return Inertia::location(route('admin.categories.index', ['success' => 'Category deleted successfully.']));
        }else{
            return redirect()->back()->with('error', 'Category not found.');
        }
    }
}
