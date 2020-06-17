<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Products Route
//listar
Route::get('/products', 'Api\ProductController@index');
//inserir
Route::post('/products', 'Api\ProductController@save');
//atualizar
Route::put('/products/{id}', 'Api\ProductController@update');
//deletar
Route::delete('/products/{id}', 'Api\ProductController@delete');
