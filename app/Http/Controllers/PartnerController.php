<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Front/Partner');
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
            'email' => 'required|email|unique:partners,email',
            'whatsapp_number' => 'required|unique:partners,whatsapp_number',
            // Add other validation rules for your fields
        ], [
            'email.unique' => 'The email address is already in use.',
            'whatsapp_number.unique' => 'The WhatsApp number is already in use.',
            // Add custom messages for other validation rules if needed
        ]);
    
        $model = new Partner();
        $model->name = $request->name;
        $model->email = $request->email;
        $model->age = $request->age;
        $model->state = $request->state;
        $model->local_government = $request->local_government;
        $model->type_of_partnership = $request->type_of_partnership;
        $model->whatsapp_number = $request->whatsapp_number;
    
        if ($model->save()) {
            // Successfully saved
            return Inertia::location(route('partners.index'));
        } else {
            // Failed to save
            return Inertia::location(route('requestquote', [
                'error' => 'Failed to add Partner!',
                'input' => $request->all(), // Send back the input data for displaying in the form
            ]));
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Partner $partner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Partner $partner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Partner $partner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Partner $partner)
    {
        //
    }
}
