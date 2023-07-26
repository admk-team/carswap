<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Payment;
use App\Models\Swap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;

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
        if(isset($my_car_id) && $my_car_id!=null){
            if(isset($data) && $data!=null){
                Swap::create([
                    'car_id' => $data['car_id'],
                    'mycar_id' => $my_car_id,
                    'Inspection_date' => $data['Inspection_date'],
                    'Inspection_Time' => $data['Inspection_Time'],
                ]);
            }
        }
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
        return redirect()->back()->with(['message' => 'Payment data stored successfully'], 201);
    }
}
