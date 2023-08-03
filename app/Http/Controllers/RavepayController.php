<?php

namespace App\Http\Controllers;

use App\Mail\UserSwapEmail;
use App\Mail\EmailToCarPurchaser;
use App\Mail\EmailToCarSeller;
use App\Mail\CarSaleEmailToAdmin;
use App\Mail\CarSwap;
use App\Mail\SwapEmailToAdmin;
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
        // return $request;
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
        //for buy
        $data1 = $request->input('data');
        $data = json_decode($data1 ?? '{}', true);
        $my_car_id = $data["my_car_id"] ?? null;
       
            if(isset($data) && $data!=null && empty($my_car_id) && $my_car_id==null){
                Booking::create([
                    'car_id' => $data['car_id'],
                    'user_id' => auth()->user()->id,
                    'Inspection_date' => $data['Inspection_date'],
                    'Inspection_Time' => $data['Inspection_Time'],
                ]);
                $car=Car::with('user')->where('id',$data['car_id'])->first();
                $tobuyer = auth()->user()->email;
                $data0=[
                    'first_name'=>auth()->user()->first_name,
                    'last_name'=>auth()->user()->last_name,
                    'title'=>$car->title,
                    'condition'=>$car->condition,
                    'engine_capacity'=>$car->engine_capacity,
                    'price'=>$car->price,
                    'model'=>$car->model,
                    'Inspection_date' => $data['Inspection_date'],
                    'Inspection_Time' => $data['Inspection_Time'],
                ];            
                $to = $car->user->email;
                $data1=[
                    'first_name'=>$car->user->first_name,
                    'last_name'=>$car->user->last_name,
                ];
                Mail::to($tobuyer)->send(new EmailToCarPurchaser($data0));
                Mail::to($to)->send(new EmailToCarSeller($data0, $data1));
                Mail::to('cars@carswap.ng')->send(new CarSaleEmailToAdmin($data0, $data1));
            }
        
            //for swap
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

                $toUser = auth()->user()->email;

                $data0=[
                    'first_name'=>auth()->user()->first_name,
                    'last_name'=>auth()->user()->last_name,
                    'title'=>$car->title,
                    'condition'=>$car->condition,
                    'engine_capacity'=>$car->engine_capacity,
                    'price'=>$car->price,
                    'model'=>$car->model,
                    'Inspection_date' => $data['Inspection_date'],
                    'Inspection_Time' => $data['Inspection_Time'],
                ];

                Mail::to($toUser)->send(new UserSwapEmail($data0));
                
                $toOwner = $car->user->email;
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
                        'Inspection_date' => $data['Inspection_date'],
                        'Inspection_Time' => $data['Inspection_Time'],
                    ];
                }
                Mail::to($toOwner)->send(new CarSwap($data1));
                Mail::to('cars@carswap.ng')->send(new SwapEmailToAdmin($data0, $data1));
            }
        }
        return redirect()->back()->with(['message' => 'Payment data stored successfully'], 201);
    }
}
