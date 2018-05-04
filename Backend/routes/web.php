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

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/ie', function () {
//     return 'Hello World';
// });

//WEB SERVICES
Route::group(['middleware'=>'cors'], function(){
    Route::get('/usersRaw', 'UserController@getUsers');
    Route::get('/user/user={user}&password={password}', 'UserController@getUser');
    Route::get('/registreProva/user={user}&password={password}&email={email}&nom={nom}&dataNaixament={dataNaixament}&provincia={provincia}&nif={nif}&avatar={avatar}&admin={admin}', 'UserController@addUser');
    Route::get('/user={user}', 'UserController@userExists');
    Route::get('/lastDigitalProducts', 'UserController@getLastProductsDigital');
    Route::get('/lastFisicalProducts', 'UserController@getLastProductsFisic');
    Route::get('/digitalProducts', 'UserController@getProductsDigitals');
    Route::get('/fisicalProducts', 'UserController@getProductsFisics');
    Route::get('/tags', 'UserController@getTags');
});