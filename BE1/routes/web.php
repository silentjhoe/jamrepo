<?php

use Illuminate\Support\Facades\Routes;
use App\Http\Controllers\UserController;

Route::get('/', function() {
    return view('post');
});

Route::post("display", [UserController::class, 'getData']);
Route::View("show", 'post');
