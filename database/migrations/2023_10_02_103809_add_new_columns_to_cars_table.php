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
            $table->string('no_owner')->nullable();
            $table->unsignedBigInteger('categories_id')->nullable();
            $table->string('feature')->nullable();
            $table->string('distress')->nullable();
            $table->string('brand1')->nullable();
            $table->string('fuelType1')->nullable();
            $table->string('transmission1')->nullable();
            $table->string('exteriorColor1')->nullable();
            $table->string('price1')->nullable();
            $table->integer('cylinder1')->nullable();
            $table->string('custom_paper1')->nullable();
            $table->string('feature1')->nullable();
            $table->string('brand2')->nullable();
            $table->string('fuelType2')->nullable();
            $table->string('transmission2')->nullable();
            $table->string('exteriorColor2')->nullable();
            $table->string('price2')->nullable();
            $table->integer('cylinder2')->nullable();
            $table->string('custom_paper2')->nullable();
            $table->string('feature2')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn(['no_owner', 'categories_id', 'feature', 'distress', 'brand1', 'fuelType1', 'transmission1', 'exteriorColor1', 'price1', 'cylinder1', 'custom_paper1', 'brand2', 'fuelType2', 'transmission2', 'exteriorColor2', 'price2', 'cylinder2', 'custom_paper2']);
        });
    }
};
