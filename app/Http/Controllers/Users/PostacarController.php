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
        $cars=Postacar::latest()->get();
        return $data = $cars->map(function($item){
            $images = explode(",", $item->Car_img);
            $item->Car_img = array_map(function($im){ 
                return url('storage' . $im); 
            },
            $images);

            return $item;
        });
       
        return Inertia::render('UserDashBoard', ['cars' => $cars]);
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
            'first_name' => 'required',
            'last_name' => 'required',
            'email'=>'required',
            'Phone'=>'required',
            'Car_address'=>'required',
            'State'=>'required',
            'address'=>'required',
            'City'=>'required',
            'Inspection_date'=>'required',
            'Inspection_Time'=>'required',
            'Modal'=>'required',
            'Year'=>'required',
            'Trim'=>'required',
            'Price'=>'required',
            'Usedcar'=>'required',
            'Milage'=>'required',
            'Transmission_Type'=>'required',
            'Engin_size'=>'required',
            'Comments'=>'required',
            'Car_img' => 'required|array',
            'Car_img.*' => 'image',
        ]);
        $Car_img= '';
        $arr=[];
        if ($request->hasFile('Car_img')) {
            foreach ($request->file('Car_img') as $item) {
                $var = date_create();
                $time = date_format($var, 'YmdHis');
                $imageName = $time . '-' . $item->getClientOriginalName();
                $item->move(public_path('storage/Postcar/Usercar'), $imageName);
                array_push($arr, '/Postcar/Usercar/' . $imageName);
            }
        }
        $Car_img= implode(",", $arr);
        $model=new Postacar();
        $model->first_name=$request->first_name;
        $model->last_name=$request->last_name;
        $model->email=$request->email;
        $model->Phone=$request->Phone;
        $model->Car_address=$request->Car_address;
        $model->State=$request->State;
        $model->Address=$request->address;
        $model->City=$request->City;
        $model->Inspection_date=$request->Inspection_date;
        $model->Inspection_Time=$request->Inspection_Time;
        $model->Modal=$request->Modal;
        $model->Year=$request->Year;
        $model->Trim=$request->Trim;
        $model->Price=$request->Price;
        $model->Usedcar=$request->Usedcar;
        $model->Milage=$request->Milage;
        $model->Transmission_Type=$request->Transmission_Type;
        $model->Engin_size=$request->Engin_size;
        $model->Comments=$request->Comments;
        $model->Car_img=$Car_img;
       
        if($model->save()){
            return Inertia::location(route('userdashboard', ['success' => 'Car added successfully.']));
        }else{
            return Inertia::location(route('postcar', ['error' => 'Failed to add car!']));
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
