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
        Schema::create('partners', function (Blueprint $table) {
        $table->id();
        $table->string('name')->nullable();
        $table->integer('age')->nullable();
        $table->string('state')->nullable();
        $table->string('local_government')->nullable();
        $table->string('type_of_partnership')->nullable();
        $table->string('email')->unique();
        $table->string('whatsapp_number')->unique();
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('partners', function (Blueprint $table) {
        $table->dropColumn(['name', 'age', 'state','local_government', 'type_of_partnership', 'email','whatsapp_number',]); // Rollback: remove columns
    });
    }
};
