<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'brand_name',
        'full_name',
        'role_title',
        'availability_text',
        'short_bio',
        'avatar_url',
        'cv_url',
        'focus_label',
        'locale_badge',
        'email',
        'location',
        'github_username',
        'social_links',
        'about_pillars',
    ];

    protected function casts(): array
    {
        return [
            'social_links' => 'array',
            'about_pillars' => 'array',
        ];
    }
}
