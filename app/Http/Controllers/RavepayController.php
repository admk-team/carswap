<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\RedirectResponse;

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
            if($request->status=='success'){
                return Inertia::location(route('user.dashboard', ['success' => 'Payment Done Successfully']));
            }
        }
    }
}
