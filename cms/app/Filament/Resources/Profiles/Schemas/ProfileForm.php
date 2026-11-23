<?php

namespace App\Filament\Resources\Profiles\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ProfileForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Hero & Identitas')
                    ->columns(2)
                    ->schema([
                        TextInput::make('brand_name')
                            ->required()
                            ->default('Maulzz.Dev'),
                        TextInput::make('full_name')
                            ->required(),
                        TextInput::make('role_title')
                            ->required()
                            ->columnSpanFull(),
                        TextInput::make('availability_text')
                            ->required()
                            ->columnSpanFull(),
                        Textarea::make('short_bio')
                            ->rows(3)
                            ->required()
                            ->columnSpanFull(),
                        TextInput::make('focus_label'),
                        TextInput::make('locale_badge')
                            ->default('ID / EN'),
                    ]),

                Section::make('Media & CV')
                    ->columns(2)
                    ->schema([
                        FileUpload::make('avatar_url')
                            ->label('Foto Profil')
                            ->disk('public')
                            ->directory('profile')
                            ->image(),
                        FileUpload::make('cv_url')
                            ->label('File CV (PDF)')
                            ->disk('public')
                            ->directory('profile')
                            ->acceptedFileTypes(['application/pdf']),
                    ]),

                Section::make('Kontak & GitHub')
                    ->columns(3)
                    ->schema([
                        TextInput::make('email')
                            ->email()
                            ->required(),
                        TextInput::make('location')
                            ->required(),
                        TextInput::make('github_username')
                            ->required(),
                    ]),

                Section::make('Social Links')
                    ->schema([
                        Repeater::make('social_links')
                            ->columns(3)
                            ->schema([
                                TextInput::make('name')->required(),
                                TextInput::make('url')->url()->required(),
                                Select::make('iconKey')
                                    ->options([
                                        'github' => 'GitHub',
                                        'linkedin' => 'LinkedIn',
                                        'instagram' => 'Instagram',
                                        'medium' => 'Medium',
                                    ])
                                    ->required(),
                            ]),
                    ]),

                Section::make('About Me (3 Pillars)')
                    ->schema([
                        Repeater::make('about_pillars')
                            ->columns(2)
                            ->schema([
                                TextInput::make('code')->required(),
                                TextInput::make('title')->required(),
                                Textarea::make('description')
                                    ->rows(2)
                                    ->required()
                                    ->columnSpanFull(),
                            ]),
                    ]),
            ]);
    }
}
