<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(array('middleware' => 'auth'), function (){
    Route::resource('fornecedores','FornecedorController');
    Route::resource('categorias','CategoriaController');
    Route::get('/principal','PrincipalController@index')->name('principal');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
