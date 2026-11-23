<?php

use App\Http\Controllers\Api\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::get('/profile', [PortfolioController::class, 'profile']);
    Route::get('/projects', [PortfolioController::class, 'projects']);
    Route::get('/projects/{slug}', [PortfolioController::class, 'project']);
    Route::get('/skills', [PortfolioController::class, 'skills']);
    Route::get('/experiences', [PortfolioController::class, 'experiences']);
});
