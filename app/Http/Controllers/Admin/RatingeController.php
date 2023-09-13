<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Rating;
use Illuminate\Http\Request;
use App\Models\Brand;
use App\Models\Car;
use App\Models\Partner;
use App\Models\Payment;
use App\Models\Subscribe;
use App\Models\Swap;
use App\Models\User;

use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
class RatingeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ratings = Rating::with('user', 'car')->latest()->get();
        return Inertia::render('Admin/Ratings/Index', ['ratings' => $ratings, 'success' => request()->get('success')]);
    }
    public function payment()
    {
        $payments = Payment::with('user')->latest()->get();
        return Inertia::render('Admin/Payment/Index', ['payments' => $payments]);
    }
    public function Inspection()
    {
        $bookings = Booking::with('user','car')->latest()->get();
        // return $bookings;
        return Inertia::render('Admin/Booking/Buy_Details', ['bookings' => $bookings]);
    }
    public function Swap_ins()
    {
        $bookings = Swap::with(['car','mycar'])->latest()->get();
        //return $bookings;
        return Inertia::render('Admin/Booking/Swap_Details', ['bookings' => $bookings]);
    }
    public function partners()
    {
        $payments = Partner::latest()->get();
        return Inertia::render('Admin/PartnersReq/Index', ['payments' => $payments]);
    }
    public function subscribe()
    {
        $payments = Subscribe::latest()->get();
        return Inertia::render('Admin/Subscribe/Index', ['payments' => $payments]);
    }



    /**
     * Show the form for creating a new resource.
     */
    //For Buy Car Booking Inspection status
    public function status($id,$status)
    {
        $user=Booking::find($id);
        $user->status=$status;
        if ($user->save()) {
            return Inertia::location(route('admin.inspections.index', ['success' => 'Status Change successfully.']));
        } else {
            return Inertia::location(route('admin.inspections.index', ['success' => 'Failed to change status.']));
        }
    }
  //For Swap Car Booking Inspection status
    public function statusIns($id,$status)
    {
        $user=Swap::find($id);
        $user->status=$status;
        if ($user->save()) {
            return Inertia::location(route('admin.swap_Ins.index', ['success' => 'Status Change successfully.']));
        } else {
            return Inertia::location(route('admin.swap_Ins.index', ['success' => 'Failed to change status.']));
        }
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
