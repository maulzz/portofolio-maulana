<?php

namespace App\Filament\Resources\Experiences\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ExperienceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Detail Pengalaman / Pendidikan / Pencapaian')
                    ->columns(2)
                    ->schema([
                        Select::make('category')
                            ->label('Kategori')
                            ->options([
                                'experience' => 'Experience',
                                'education' => 'Education',
                                'achievement' => 'Achievements',
                            ])
                            ->required(),
                        TextInput::make('year')
                            ->label('Periode / Tahun')
                            ->required()
                            ->placeholder('2025 - Sekarang'),
                        TextInput::make('tag')
                            ->label('Badge Tag')
                            ->required()
                            ->placeholder('WORK / AWARD / INFRASTRUCTURE / ACADEMIC'),
                        TextInput::make('sort_order')
                            ->label('Urutan')
                            ->numeric()
                            ->default(0),
                        TextInput::make('title')
                            ->label('Judul / Peran')
                            ->required(),
                        TextInput::make('institution')
                            ->label('Institusi / Organisasi')
                            ->required(),
                        Textarea::make('desc')
                            ->label('Deskripsi')
                            ->rows(4)
                            ->required()
                            ->columnSpanFull(),
                        TagsInput::make('learnings')
                            ->label('Keahlian / Tag Terkait')
                            ->columnSpanFull(),
                        Toggle::make('highlight')
                            ->label('Sorot Badge (Accent Yellow)'),
                    ]),
            ]);
    }
}
