<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Swap extends Model
{
    use HasFactory;
    protected $fillable = [
        'Inspection_Time',
        'Inspection_date',
        'mycar_id',
        'car_id',
        'price_diff',
    ];

    public function car(){
        return $this->belongsTo(Car::class);
    }
}
