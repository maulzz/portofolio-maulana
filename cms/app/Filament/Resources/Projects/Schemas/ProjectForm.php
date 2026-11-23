<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Informasi Utama')
                    ->columns(2)
                    ->schema([
                        TextInput::make('title')
                            ->label('Judul Proyek')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn ($state, callable $set) => $set('slug', Str::slug((string) $state))),
                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true),
                        TextInput::make('category')
                            ->label('Kategori')
                            ->required(),
                        TextInput::make('year')
                            ->label('Tahun')
                            ->placeholder('2026'),
                        TextInput::make('sort_order')
                            ->label('Urutan')
                            ->numeric()
                            ->default(0),
                        Toggle::make('featured')
                            ->label('Proyek Unggulan'),
                        Toggle::make('is_published')
                            ->label('Publikasikan')
                            ->default(true),
                    ]),

                Section::make('01–03 / Overview, Problem & Solution')
                    ->schema([
                        Textarea::make('overview')
                            ->label('01. Overview')
                            ->rows(3),
                        Textarea::make('problem')
                            ->label('02. Problem')
                            ->rows(3),
                        Textarea::make('solution')
                            ->label('03. Solution')
                            ->rows(3),
                    ]),

                Section::make('04 / My Role & Kontribusi Pribadi')
                    ->schema([
                        TextInput::make('my_role.title')
                            ->label('Peran (Role)'),
                        Textarea::make('my_role.contribution')
                            ->label('Kontribusi Pribadi')
                            ->rows(2),
                        TagsInput::make('my_role.responsibilities')
                            ->label('Daftar Tanggung Jawab'),
                    ]),

                Section::make('05–06 / Tech Stack & Key Features')
                    ->columns(2)
                    ->schema([
                        TagsInput::make('tech_stack')
                            ->label('05. Tech Stack'),
                        TagsInput::make('key_features')
                            ->label('06. Key Features'),
                    ]),

                Section::make('07 / Architecture')
                    ->schema([
                        Textarea::make('architecture.summary')
                            ->label('Ringkasan Arsitektur')
                            ->rows(2),
                        TagsInput::make('architecture.flow')
                            ->label('Alur Sistem (Node berurutan, misal: Next.js, Laravel API, PostgreSQL)'),
                    ]),

                Section::make('08 / Technical Challenges')
                    ->schema([
                        Repeater::make('challenges')
                            ->columns(2)
                            ->schema([
                                Textarea::make('problem')
                                    ->label('Masalah Teknis')
                                    ->rows(2)
                                    ->required(),
                                Textarea::make('solution')
                                    ->label('Penyelesaian')
                                    ->rows(2)
                                    ->required(),
                            ]),
                    ]),

                Section::make('09 / Screenshots')
                    ->schema([
                        Repeater::make('screenshots')
                            ->columns(2)
                            ->schema([
                                FileUpload::make('src')
                                    ->label('Gambar Screenshot')
                                    ->disk('public')
                                    ->directory('projects')
                                    ->image()
                                    ->required(),
                                TextInput::make('caption')
                                    ->label('Caption (Opsional)'),
                            ]),
                    ]),

                Section::make('10 / Links')
                    ->columns(2)
                    ->schema([
                        TextInput::make('links.live')
                            ->label('Live Demo URL')
                            ->url(),
                        TextInput::make('links.github')
                            ->label('GitHub Repository URL')
                            ->url(),
                    ]),
            ]);
    }
}
