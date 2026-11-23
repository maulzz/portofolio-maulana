<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = [
        'category',
        'year',
        'tag',
        'title',
        'institution',
        'desc',
        'learnings',
        'highlight',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'learnings' => 'array',
            'highlight' => 'boolean',
        ];
    }
}
