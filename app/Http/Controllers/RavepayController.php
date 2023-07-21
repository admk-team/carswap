<?php

namespace App\Http\Controllers;

use App\Models\Payment;
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
        ]);
        return response()->json(['message' => 'Payment data stored successfully'], 201);
    }
}
