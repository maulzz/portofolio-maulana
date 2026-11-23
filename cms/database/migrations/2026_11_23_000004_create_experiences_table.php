<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->string('category', 30)->index();
            $table->string('year', 50);
            $table->string('tag', 40);
            $table->string('title');
            $table->string('institution');
            $table->text('desc');
            $table->json('learnings')->nullable();
            $table->boolean('highlight')->default(false);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};
