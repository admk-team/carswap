<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\Postacar;
use Illuminate\Http\Request;

class PostacarController extends Controller
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
        return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show(Postacar $postacar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Postacar $postacar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Postacar $postacar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Postacar $postacar)
    {
        //
    }
}
