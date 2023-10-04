<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class RatingController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'star' => 'required',
            'user_id' => 'required',
            'car_id' => 'required',
            'message' => 'required',
           

        ]);
        $model=Rating::where('user_id',auth()->user()->id)->where('car_id',$request->car_id)->first() ?? new Rating();
        $model->rating=$request->star;
        $model->car_id= $request->car_id;
        $model->user_id= auth()->user()->id;
        $model->message=$request->message;
        if($model->save()){
           return redirect()->back()->withSuccess(['success' => 'Reviews addedd successfully.']);
        }else{
            return Inertia::location(route('user.dashboard', ['error' => 'Failed Car not added.']));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Rating $rating)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rating $rating)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rating $rating)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rating $rating)
    {
        //
    }
}
