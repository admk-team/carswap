<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaymentGateway;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentGatewayController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payment_data=PaymentGateway::first();
        return Inertia::render('Admin/Paymentgateway/Index', ['payment_data' => $payment_data, 'success' => request()->get('success')]);
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
            'public_key'=>'required',
            'booking_price'=>'required|integer',
            'post_car_price'=>'required|integer',
        ]);
        $data=PaymentGateway::first() ?? new PaymentGateway();
        $data->public_key=$request->public_key;
        $data->booking_price=$request->booking_price;
        $data->post_car_price=$request->post_car_price;
        if($data->save()){
            return Inertia::location(route('admin.paymentGateway.index', ['success' => 'Ravepay setting updated successfully.']));
        } else {
            return Inertia::location(route('admin.paymentGateway.index', ['success' => 'Failed to change setting.']));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(PaymentGateway $paymentGateway)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PaymentGateway $paymentGateway)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PaymentGateway $paymentGateway)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PaymentGateway $paymentGateway)
    {
        //
    }
}
