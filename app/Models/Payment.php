<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'amount',
        'charge_response_code',
        'charge_response_message',
        'charged_amount',
        'date',
        'currency',
        'flw_ref',
        'status',
        'transaction_id',
        'tx_ref',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
