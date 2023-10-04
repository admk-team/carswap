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
            $table->string('cylinder')->nullable(); // Add 'cylinder' column
            $table->string('street')->nullable(); // Add 'street' column (nullable)
            $table->string('lga')->nullable(); // Add 'lga' column (nullable)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn(['cylinder', 'street', 'lga']); // Rollback: remove columns
        });
    }
};
