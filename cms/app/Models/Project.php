<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'category',
        'year',
        'featured',
        'is_published',
        'sort_order',
        'overview',
        'problem',
        'solution',
        'my_role',
        'tech_stack',
        'key_features',
        'architecture',
        'challenges',
        'screenshots',
        'links',
    ];

    protected function casts(): array
    {
        return [
            'featured' => 'boolean',
            'is_published' => 'boolean',
            'my_role' => 'array',
            'tech_stack' => 'array',
            'key_features' => 'array',
            'architecture' => 'array',
            'challenges' => 'array',
            'screenshots' => 'array',
            'links' => 'array',
        ];
    }
}
