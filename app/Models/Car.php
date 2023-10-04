<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Car extends Model
{
    use HasFactory;
    use SoftDeletes;
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
    
    public function user1()
    {
        return $this->belongsTo(User::class, 'user_id'); // 'user_id' is the foreign key in the cars table referencing the id column in the users table
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }
    // public function getImagesAttribute($value){
    //     return url("storage/" .$value);
    // }
}
