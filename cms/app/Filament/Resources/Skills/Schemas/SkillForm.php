<?php

namespace App\Filament\Resources\Skills\Schemas;

use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class SkillForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Kategori Technical Stack')
                    ->columns(3)
                    ->schema([
                        TextInput::make('code')
                            ->label('Kode')
                            ->required()
                            ->placeholder('01'),
                        TextInput::make('category')
                            ->label('Kategori')
                            ->required()
                            ->placeholder('Backend'),
                        TextInput::make('sort_order')
                            ->label('Urutan')
                            ->numeric()
                            ->default(0),
                    ]),

                Section::make('Daftar Teknologi')
                    ->schema([
                        Repeater::make('items')
                            ->columns(3)
                            ->schema([
                                TextInput::make('name')
                                    ->label('Nama Teknologi')
                                    ->required(),
                                TextInput::make('iconKey')
                                    ->label('Icon Key')
                                    ->placeholder('laravel, react, docker')
                                    ->required(),
                                TextInput::make('iconUrl')
                                    ->label('Custom Icon URL (Opsional)')
                                    ->url()
                                    ->placeholder('https://cdn.simpleicons.org/...'),
                            ]),
                    ]),
            ]);
    }
}
