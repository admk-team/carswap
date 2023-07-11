<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('postacars', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->integer('Phone')->unique()->numeric();
            $table->string('Car_address');
            $table->string('State');
            $table->string('Address');
            $table->string('City');
            $table->string('Inspection_date');
            $table->string('Inspection_Time');
            $table->string('Modal');
            $table->integer('Year')->numeric();
            $table->string('Trim');
            $table->string('Price');
            $table->string('Usedcar');
            $table->string('Milage');
            $table->string('Transmission_Type');
            $table->string('Engin_size');
            $table->string('Comments');
            $table->string('Car_img');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('postacars');
    }
};
