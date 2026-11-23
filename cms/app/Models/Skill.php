<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'code',
        'category',
        'sort_order',
        'items',
    ];

    protected function casts(): array
    {
        return [
            'items' => 'array',
        ];
    }
}
