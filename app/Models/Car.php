<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    public function brand(){
        return $this->belongsTo(Brand::class);
    }
    public function ratings(){
        return $this->hasMany(Rating::class);
    }
    public function payment(){
        return $this->hasOne(Payment::class);
    }
    public function swaps()
    {
        return $this->hasMany(Swap::class, 'car_id');
    }
}
