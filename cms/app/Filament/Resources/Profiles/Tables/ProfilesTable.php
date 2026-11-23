<?php

namespace App\Filament\Resources\Profiles\Tables;

use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ProfilesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('brand_name')->label('Brand')->searchable(),
                TextColumn::make('full_name')->label('Nama')->searchable(),
                TextColumn::make('email'),
                TextColumn::make('github_username')->label('GitHub'),
                TextColumn::make('updated_at')->dateTime()->sortable(),
            ])
            ->recordActions([
                EditAction::make(),
            ]);
    }
}
