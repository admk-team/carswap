<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use App\Models\Swap;
use Illuminate\Http\Request;

class SwapController extends Controller
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
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $swap)
    {
        return $swap;
        $swap->validate([
            'star' => 'required',
            'user_id' => 'required',
            'car_id' => 'required',
            'message' => 'required',
           

        ]);
        
        // $model->message=$swap->message;
        // if($model->save()){
        //    return redirect()->back()->withSuccess(['success' => 'Reviews addedd successfully.']);
        // }else{
        //     return Inertia::location(route('user.dashboard', ['error' => 'Failed Car not added.']));
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(Swap $swap)
    {
     
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Swap $swap)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Swap $swap)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Swap $swap)
    {
        //
    }
}
