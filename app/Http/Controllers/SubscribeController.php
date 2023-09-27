<?php

namespace App\Http\Controllers;

use App\Models\Subscribe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscribeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'email' => 'required|email|unique:subscribes,email',
            // Add other validation rules for your fields
        ], [
            'email.unique' => 'The email address is already in use.',
            // Add custom messages for other validation rules if needed
        ]);
        $model = new Subscribe();
        $model->email = $request->email;
        if ($model->save()) {
            // Successfully saved
            return Inertia::location(route('front.index', ['success' => 'Subscried to Newsletter Successfully.']));
        }        
         else {
            // Failed to save
            return Inertia::location(route('', [
                'error' => 'Failed to add Subscribe!',
                'input' => $request->all(), // Send back the input data for displaying in the form
            ]));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Subscribe $subscribe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subscribe $subscribe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subscribe $subscribe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subscribe $subscribe)
    {
        //
    }
}
