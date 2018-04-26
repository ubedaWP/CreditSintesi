<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    // public function show(Request $request)
    // {   
    //     $data=DB::select('select * from prova1');
    //     return $data;
    // }
    public function getUsers(Request $request){
        $data=DB::select('select * from USUARIS');
        return $data;
    }

    public function getUser(Request $request, $user, $password){
        $data=DB::select('select * from USUARIS where USUARIS.Usuari = ? and USUARIS.Contrasenya = ?', [$user, $password]);
        return $data;
    }
}