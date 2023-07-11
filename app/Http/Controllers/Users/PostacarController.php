<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\Postacar;
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'first_name' => 'required',
        //     'last_name' => 'required',
        //     'email'=>'required',
        //     'Phone'=>'required',
        //     // 'Car_address'=>'required',
        //     // 'State'=>'required',
        //     // 'Address'=>'required',
        //     // 'City'=>'required',
        //     // 'Inspection_date'=>'required',
        //     // 'Inspection_Time'=>'required',
        //     // 'Modal'=>'required',
        //     // 'Year'=>'required',
        //     // 'Trim'=>'required',
        //     // 'Price'=>'required',
        //     // 'Usedcar'=>'required',
        //     // 'Milage'=>'required',
        //     // 'Tarnsmisiion_Type'=>'required',
        //     // 'Engin_size'=>'required',
        //     'Comments'=>'required',
        //     // 'Car_img'=>'required',
        // ]);
      
        $model=new Postacar();
        $model->first_name=$request->first_name;
        $model->last_name=$request->last_name;
        $model->email=$request->email;
        $model->Phone=$request->Phone;
        $model->Car_address=$request->Car_address;
        $model->State=$request->State;
        $model->Address=$request->Address;
        $model->City=$request->City;
        $model->Inspection_date=$request->Inspection_date;
        $model->Inspection_Time=$request->Inspection_Time;
        $model->Modal=$request->Modal;
        $model->Year=$request->Year;
        $model->Trim=$request->Trim;
        $model->Price=$request->Price;
        $model->Usedcar=$request->Usedcar;
        $model->Milage=$request->Milage;
        $model->Tarnsmisiion_Type=$request->Tarnsmisiion_Type;
        $model->Engin_size=$request->Engin_size;
        $model->Comments=$request->Comments;
        $model->Car_img=$request->Car_imtg;

       
            return $request;
        
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
