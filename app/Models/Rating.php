<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'car_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Define the relationship with the Car model
    public function car()
    {
        return $this->belongsTo(Car::class);
    }
    
}
