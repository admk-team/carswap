<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;

class RavepayController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $paymentUrl = 'https://checkout.flutterwave.com/v3/hosted/pay';
        return new RedirectResponse($paymentUrl, 302);
    }
    public function handleCallback(Request $request)
    {
        if($request->status){
            if($request->status=='cancelled'){
                return Inertia::location(route('user.dashboard', ['error' => 'Payment Failed']));
            }
            if($request->status=='successful'){
                return Inertia::location(route('user.dashboard', ['success' => 'Congratulations! Your Payment Was Successful.']));
            }
        }else{
            return Inertia::location(route('user.dashboard', ['error' => 'Payment Failed']));
        }
    }
    public function test(Request $request)
    {
        $paymentData = [
            'public_key' => 'FLWPUBK_TEST-5362dd26662af2fa2bb22c99f29ab2c3-X',
            'customer' => [
                'email' => 'wani@gmail.com',
                'name' => 'Test',
            ],
            'email' => 'wani@gmail.com',
            'tx_ref' => 'w212',
            'amount' => '1000',
            'currency' => 'NGN',
            'meta' => [
                'token' => '54',
            ],
            'redirect_url' => 'https://carswap.admksol.com'
        ];
    
        try {
            $response = \Http::withHeaders([
                'Authorization' => 'FLWSECK_TEST-a7e7898f59f4a2d503e63eab09923efa-X',
                'Content-Type' => 'application/json',
            ])->post('https://checkout.flutterwave.com/v3/hosted/pay', $paymentData);
            $responseData = $response->json();
            if ($responseData['status'] === 'success') {
                $paymentLink = $responseData['data']['link'];
                return new RedirectResponse($paymentLink);
            } else {
                return response()->json(['error' => $responseData['message']], 500);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Payment request failed'], 500);
        }

    }
}
