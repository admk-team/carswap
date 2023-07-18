<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RavepayController extends Controller
{
    public function store(Request $request)
    {
        return redirect()->intended('https://flutterwave.com/pay/carswaplimitedsyuy');
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
