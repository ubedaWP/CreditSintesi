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
Route::get('/ie', function () {
    return 'Hello World';
});
Route::group(['middleware'=>'cors'], function(){
    Route::get('/usersRaw', 'UserController@getUsers');
    Route::get('/user/user={user}&password={password}', 'UserController@getUser');
});