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
        Schema::table('cars', function (Blueprint $table) {
            $table->string('porpose')->nullable();  
            $table->string('fixedengine')->nullable(); 
            $table->string('fixedtrans')->nullable(); 
            $table->string('title1')->nullable(); 
            $table->string('model1')->nullable(); 
            $table->string('year1')->nullable(); 
            $table->string('condition1')->nullable(); 
            $table->string('interiorColor1')->nullable();
            $table->string('milage1')->nullable(); 
            $table->string('title2')->nullable(); 
            $table->string('model2')->nullable(); 
            $table->string('year2')->nullable(); 
            $table->string('condition2')->nullable(); 
            $table->string('interiorColor2')->nullable();
            $table->string('milage2')->nullable(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn(['porpose', 'fixedengine', 'fixedtrans','title1', 'model1', 'year1','condition1', 'interiorColor1','title2', 'model2', 'year2','condition2', 'interiorColor2','milage1','milage2']); // Rollback: remove columns
        });
    }
};
