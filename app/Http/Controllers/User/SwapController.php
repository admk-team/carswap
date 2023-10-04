<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use App\Models\Swap;
use Illuminate\Http\Request;
use Inertia\Inertia;
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
        $swap->validate([
            'car_id' => 'required',
            'my_car_id' => 'required',
            'Inspection_date' => 'required',
            'Inspection_Time' => 'required',
        ]);
        $model=new Swap();
        $model->car_id=$swap->car_id;
        $model->mycar_id= $swap->my_car_id;
        $model->Inspection_date=$swap->Inspection_date;
        $model->Inspection_Time=$swap->Inspection_Time;
        if($model->save()){
            return Inertia::location(route('user.dashboard', ['success' => 'Book Inspection completed.']));
        }else{
            return Inertia::location(route('user.dashboard', ['error' => 'Failed Car not added.']));
        }
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
