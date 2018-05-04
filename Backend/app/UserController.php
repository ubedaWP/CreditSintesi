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

    public function userExists(Request $request, $user){
        $data=DB::select('select * from USUARIS where USUARIS.Usuari = ?', [$user]);
        if (count($data) > 0){
            return $data;
        }
    }

    public function addUser(Request $request, $user, $password, $email, $nom, $edat, $provincia, $nif, $avatar, $admin){
        DB::table('USUARIS')->insert([
            [
            'Usuari'=>$user,
            'Contrasenya'=>$password,
            'Email'=>$email,
            'Nom'=>$nom,
            'Edat'=>$edat,
            'Provincia'=>$provincia,
            'Nif'=>$nif,
            'Avatar'=>$avatar,
            'Admin'=>$admin]
        ]);
    }

    public function getLastProductsDigital(Request $request){
        $data=DB::select('select * from PRODUCTES_DIGITALS order by IDProd_Digital DESC');
        if (count($data) > 0){
            return $data;
        }
    }

    public function getLastProductsFisic(Request $request){
        $data=DB::select('select * from PRODUCTES_FISICS order by IDProd_Fisic DESC');
        if (count($data) > 0){
            return $data;
        }
    }

    public function getProductsDigitals(Request $request){
        $data=DB::select('select * from PRODUCTES_DIGITALS');
        if (count($data) > 0){
            return $data;
        }
    }

    public function getProductsFisics(Request $request){
        $data=DB::select('select * from PRODUCTES_FISICS');
        if (count($data) > 0){
            return $data;
        }
    }

    public function getTags(Request $request){
        $data=DB::select('select * from TAGS order by IDTag ASC');
        if (count($data) > 0) {
            return $data;
        }
    }
}