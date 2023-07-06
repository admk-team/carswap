<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        // return view('admin.index');

        return Inertia::render('Admin',  [
            'user' => ['hi'=> "this is admin"],
        ]);

    }
}
