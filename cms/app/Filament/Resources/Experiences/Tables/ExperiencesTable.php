<?php

namespace App\Filament\Resources\Experiences\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ExperiencesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('sort_order')->label('#')->sortable(),
                TextColumn::make('category')->label('Kategori')->badge()->sortable(),
                TextColumn::make('year')->label('Tahun'),
                TextColumn::make('title')->label('Judul')->searchable(),
                TextColumn::make('institution')->label('Institusi')->searchable(),
                IconColumn::make('highlight')->label('Highlight')->boolean(),
            ])
            ->defaultSort('sort_order')
            ->filters([
                SelectFilter::make('category')
                    ->options([
                        'experience' => 'Experience',
                        'education' => 'Education',
                        'achievement' => 'Achievements',
                    ]),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
