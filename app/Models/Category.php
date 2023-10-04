<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    public function cars(){
        return $this->hasMany(Car::class,'body_type');
        
    }
    public function car()
    {
        return $this->hasMany(Car::class, 'categories_id');
    }
}
