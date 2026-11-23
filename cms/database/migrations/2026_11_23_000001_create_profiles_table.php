<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('brand_name')->default('Maulzz.Dev');
            $table->string('full_name');
            $table->string('role_title');
            $table->string('availability_text');
            $table->text('short_bio');
            $table->string('avatar_url')->nullable();
            $table->string('cv_url')->nullable();
            $table->string('focus_label')->nullable();
            $table->string('locale_badge', 20)->default('ID / EN');
            $table->string('email');
            $table->string('location');
            $table->string('github_username');
            $table->json('social_links')->nullable();
            $table->json('about_pillars')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
