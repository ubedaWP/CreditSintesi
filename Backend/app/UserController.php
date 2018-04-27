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
        if (count($data) > 0) {
            return $data;
        }
    }

    public function addUser(Request $request, $form){
        DB::table('USUARIS')->insert([
            [
            'Usuari'=>$form[0],
            'Contrasenya'=>$form[1],
            'Avatar'=>$form[2],
            'Email'=>$form[3],
            'Nom'=>$form[4],
            'Edat'=>$form[5],
            'Pais'=>$form[6],
            'Nif'=>$form[7],
            'Admin'=>$form[8]],
        ]);
    }
}