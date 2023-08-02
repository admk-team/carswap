<?php

namespace App\Http\Controllers;

use App\Mail\UserSwapEmail;
use App\Models\Booking;
use App\Models\Car;
use App\Models\Payment;
use App\Models\Swap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class RavepayController extends Controller
{
    public function store(Request $request)
    {
        $paymentData = $request->input('paymentData');
        $carId = $request->input('carId');
        Payment::create([
            'status' => $paymentData['status'],
            'user_id' => auth()->user()->id,
            'amount' => $paymentData['amount'],
            'charge_response_code' => $paymentData['charge_response_code'],
            'charge_response_message' =>$paymentData['charge_response_message'],
            'charged_amount' => $paymentData['charged_amount'],
            'currency' => $paymentData['currency'],
            'date'=>$paymentData['created_at'],
            'flw_ref'=>$paymentData['flw_ref'],
            'transaction_id'=>$paymentData['transaction_id'],
            'tx_ref'=>$paymentData['tx_ref'],
            'car_id'=>$carId ?? null,
        ]);
        $data1 = $request->input('data');
        $data = json_decode($data1 ?? '{}', true);
        $my_car_id = $data["my_car_id"] ?? null;
        if(!isset($my_car_id) && $my_car_id==null){
            if(isset($data) && $data!=null){
                Booking::create([
                    'car_id' => $data['car_id'],
                    'user_id' => auth()->user()->id,
                    'Inspection_date' => $data['Inspection_date'],
                    'Inspection_Time' => $data['Inspection_Time'],
                ]);
            }
        }
        // $my_car_id = json_encode($data["my_car_id"]);
        if(isset($my_car_id) && $my_car_id!=null){
            if(isset($data) && $data!=null){
                foreach($data["my_car_id"] as $myCarId){
                    Swap::create([
                        'car_id' => $data['car_id'],
                        'mycar_id' => $myCarId,
                        'Inspection_date' => $data['Inspection_date'],
                        'Inspection_Time' => $data['Inspection_Time'],
                        'price_diff' => $data['price_diff'],
                    ]);
                    $car=Car::find($myCarId);
                    $data['cars'][] = [
                        'title' => $car->title,
                        'condition' => $car->condition,
                        'engine_capacity' => $car->engine_capacity,
                        'price' => $car->price,
                        'model' => $car->model,
                    ];
                }
                $car=Car::with('user')->where('id',$data['car_id'])->first();

                $to = auth()->user()->email;
                $data0=[
                    'first_name'=>auth()->user()->first_name,
                    'last_name'=>auth()->user()->last_name,
                    'title'=>$car->title,
                    'condition'=>$car->condition,
                    'engine_capacity'=>$car->engine_capacity,
                    'price'=>$car->price,
                    'model'=>$car->model,
                ];
                Mail::to($to)->send(new UserSwapEmail($data0));
                
                $to = $car->user->email;
                $data1=[
                    'first_name'=>auth()->user()->first_name,
                    'last_name'=>auth()->user()->last_name,
                    'cars' => [],
                ];
                foreach($data["my_car_id"] as $myCarId){
                    $car=Car::find($myCarId);
                    $data1['cars'][] = [
                        'title' => $car->title,
                        'condition' => $car->condition,
                        'engine_capacity' => $car->engine_capacity,
                        'price' => $car->price,
                        'model' => $car->model,
                    ];
                }
                Mail::to($to)->send(new UserSwapEmail($data1));
            }
        }
        return redirect()->back()->with(['message' => 'Payment data stored successfully'], 201);
    }
}
