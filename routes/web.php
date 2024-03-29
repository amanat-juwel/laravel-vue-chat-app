<?php

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

Route::get('/home', function () {
    return redirect('chat');
});

Auth::routes();

Route::get('/admin', 'HomeController@index')->name('home');

Route::get('chat', 'ChatsController@index');
Route::get('messages', 'ChatsController@fetchMessages');
Route::post('messages', 'ChatsController@sendMessage');

//vue js routing
Route::get('{path}',"HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );

