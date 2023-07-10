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
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->bigInteger('brand_id')->nullable();
            $table->string('condition')->nullable();
            $table->string('engine_capacity')->nullable();
            $table->string('mileage')->nullable();
            $table->string('location')->nullable();
            $table->string('price')->nullable();
            $table->string('images')->nullable();
            $table->string('fuel_type')->nullable();
            $table->string('model')->nullable();
            $table->string('transmission')->nullable();
            $table->string('drive')->nullable();
            $table->string('interior_color')->nullable();
            $table->string('exterior_color')->nullable();
            $table->text('description')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
