<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RavepayController extends Controller
{
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            // 'amount' => 'required|numeric|min:1',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $rave = new \Rave\Rave(config('services.rave.public_key'), config('services.rave.secret_key'));

        $paymentData = [
            'amount' => $request->input('amount'),
            'txref' => uniqid('TXREF_'),
            'redirect_url' => route('user.callback'),
        ];

        $payment = $rave->initializePayment($paymentData);

        if ($payment && $payment->data->link) {
            return redirect($payment->data->link);
        } else {
            return redirect()->back()->withErrors(['error' => 'Failed to initiate payment. Please try again.']);
        }
    }
    public function handleCallback(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'txref' => 'required',
            'status' => 'required|in:successful,failed,pending',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'message' => 'Invalid callback data'], 400);
        }

        $transactionReference = $request->input('txref');
        $paymentStatus = $request->input('status');

        if ($paymentStatus === 'successful') {
            // Update your application's database with the successful payment status
            // You can also perform additional actions for successful payments
        } else {
            // Handle payment failure or pending status
            // Update your application's database accordingly
        }

        return response()->json(['status' => 'success', 'message' => 'Payment callback processed successfully']);
    }
}
