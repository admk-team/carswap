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
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function ratings(){
        return $this->hasMany(Rating::class);
    }
    public function payment(){
        return $this->hasOne(Payment::class);
    }
    public function bookings(){
        return $this->hasOne(Booking::class);
    }
    public function swaps()
    {
        return $this->hasOne(Swap::class, 'car_id');
    }
}
