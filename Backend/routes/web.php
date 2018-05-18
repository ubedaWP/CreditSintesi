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
    Route::get('/userID={id}', 'UserController@getUserById');
    Route::get('/user/user={user}&password={password}', 'UserController@getUser');
    Route::get('/registreProva/user={user}&password={password}&email={email}&nom={nom}&dataNaixament={dataNaixament}&provincia={provincia}&nif={nif}&avatar={avatar}&admin={admin}', 'UserController@addUser');
    Route::get('/user={user}', 'UserController@userExists');
    Route::get('/lastDigitalProducts', 'UserController@getLastProductsDigital');
    Route::get('/lastFisicalProducts', 'UserController@getLastProductsFisic');
    Route::get('/digitalProducts', 'UserController@getProductsDigitals');
    Route::get('/fisicalProducts', 'UserController@getProductsFisics');
    Route::get('/tags', 'UserController@getTags');
    Route::get('/searchFisics={words}', 'UserController@productSearchLineFisics');
    Route::get('/searchDigitals={words}', 'UserController@productSearchLineDigitals');
    Route::get('/tag={tag}', 'UserController@getIdTag');
    Route::get('/fisicId={id}', 'UserController@getProductFisicId');
    Route::get('/digitalId={id}', 'UserController@getProductDigitalId');
    Route::get('/digitalTag={tag1}', 'UserController@getDigitalTag');
    Route::get('/fisicalTag={tag1}', 'UserController@getFisicalTag');
    Route::get('/digitalTags={tag1}/{tag2}', 'UserController@getDigitalTags');
    Route::get('/fisicalTags={tag1}/{tag2}', 'UserController@getFisicalTags');
    Route::get('/newsCategory={categoria}', 'UserController@getNewsData');
    Route::get('/news/Id={id}', 'UserController@getNewsById');
    Route::get('/addNew/{text1}/{text2}/{categoria}/{titol}/{resum}/{imatgePortada}/{imatgeMitg}', 'UserController@uploadFile');
});