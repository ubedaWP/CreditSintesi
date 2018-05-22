<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;

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
        $data=DB::select('select * from USUARIS where USUARIS.Usuari = ? and USUARIS.Contrasenya = ?', [$user, md5($password)]);
        if (count($data) > 0) {
            return $data;
        }
    }

    public function getUserById(Request $request, $id){
        $data=DB::select('select * from USUARIS where IDUsr = ?', [$id]);
        if (count($data) > 0){
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
            'Contrasenya'=>md5($password),
            'Email'=>$email,
            'Nom'=>$nom,
            'Edat'=>$edat,
            'Provincia'=>$provincia,
            'Nif'=>$nif,
            'Avatar'=>$avatar,
            'Admin'=>$admin]
        ]);
    }

    public function getProductFisicId(Request $request, $id){
        $data=DB::select('select * from PRODUCTES_FISICS where IDProd_Fisic = ?', [$id]);
        if (count($data) > 0) {
            return $data;
        }
    }

    public function getProductDigitalId(Request $request, $id){
        $data=DB::select('select * from PRODUCTES_DIGITALS where IDProd_Digital = ?', [$id]);
        if (count($data) > 0) {
            return $data;
        }
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

    public function productSearchLineFisics(Request $request, $words){
        $data=DB::select('select * from PRODUCTES_FISICS where PRODUCTES_FISICS.Producte like ?', [$words]);
        if (count($data) > 0){
            return $data;
        }
    }

    public function productSearchLineDigitals(Request $request, $words){
        $data=DB::select('select * from PRODUCTES_DIGITALS where PRODUCTES_DIGITALS.Producte like ?', [$words]);
        if (count($data) > 0){
            return $data;
        }
    }

    public function getIdTag(Request $request, $tag){
        $data=DB::select('select * from TAGS where Tag = ?', [$tag]);
        if (count($data) > 0){
            return $data;
        }
    }

    public function getDigitalTag(Request $request, $tag1){
        $data=DB::select('select distinct PRODUCTES_DIGITALS.* from PRODUCTES_DIGITALS,TAGS,TAGS_PRODUCTES_DIGITALS 
        where PRODUCTES_DIGITALS.IDProd_Digital = TAGS_PRODUCTES_DIGITALS.IDProd 
        and TAGS_PRODUCTES_DIGITALS.IDTag = TAGS.IDTag 
        and TAGS.Tag in (?)',[$tag1]);
        return $data;
    }

    public function getFisicalTag(Request $request, $tag1){
        $data=DB::select('select distinct PRODUCTES_FISICS.* from PRODUCTES_FISICS,TAGS,TAGS_PRODUCTES_FISICS 
        where PRODUCTES_FISICS.IDProd_Fisic = TAGS_PRODUCTES_FISICS.IDProd 
        and TAGS_PRODUCTES_FISICS.IDTag = TAGS.IDTag 
        and TAGS.Tag in (?)',[$tag1]);
        return $data;
    }

    public function getDigitalTags(Request $request, $tag1, $tag2){
        $data=DB::select('select distinct PRODUCTES_DIGITALS.* from PRODUCTES_DIGITALS,TAGS,TAGS_PRODUCTES_DIGITALS 
        where PRODUCTES_DIGITALS.IDProd_Digital = TAGS_PRODUCTES_DIGITALS.IDProd 
        and TAGS_PRODUCTES_DIGITALS.IDTag = TAGS.IDTag 
        and TAGS.Tag in (?,?)',[$tag1,$tag2]);
        return $data;
    }

    public function getFisicalTags(Request $request, $tag1, $tag2){
        $data=DB::select('select distinct PRODUCTES_FISICS.* from PRODUCTES_FISICS,TAGS,TAGS_PRODUCTES_FISICS 
        where PRODUCTES_FISICS.IDProd_Fisic = TAGS_PRODUCTES_FISICS.IDProd 
        and TAGS_PRODUCTES_FISICS.IDTag = TAGS.IDTag 
        and TAGS.Tag in (?,?)',[$tag1,$tag2]);
        return $data;
    }

    public function getNewsData(Request $request, $categoria){
        $data=DB::select('select * from NOTICIES where Categoria = ?', [$categoria]);
        if(count($data) > 0){
            return $data;
        }
    }

    public function getNewsById(Request $request, $id){
        $data=DB::select('select * from NOTICIES where IDNot = ?', [$id]);
        if(count($data) > 0){
            return $data;
        }
    }
    
    public function uploadFile(Request $request, $text1, $text2, $categoria, $titol, $resum, $imatgePortada, $imatgeMitg){
        $data=DB::table('NOTICIES')->insert([
            'Text1'=>$text1,
            'Text2'=>$text2,
            'Categoria'=>$categoria,
            'Titol'=>$titol,
            'Resum'=>$resum,
            'ImatgePortada'=>$imatgePortada,
            'ImatgeMitg'=>$imatgeMitg
        ]);
    }
    
    public function uploadProductFisic(Request $request, $nom, $descripcio, $dExtensa, $imatge, $imatgeGallery, $price){
        $data=DB::table('PRODUCTES_FISICS')->insert([
            'Producte'=>$nom,
            'Descripcio'=>$descripcio,
            'DescripcioExtensa'=>$dExtensa,
            'Imatge'=>$imatge,
            'ImatgeGaleria'=>$imatgeGallery,
            'Preu'=>$price
        ]);
    }

    public function uploadProductDigital(Request $request, $nom, $descripcio, $dExtensa, $imatge, $imatgeGallery, $price){
        $data=DB::table('PRODUCTES_DIGITALS')->insert([
            'Producte'=>$nom,
            'Descripcio'=>$descripcio,
            'DescripcioExtensa'=>$dExtensa,
            'Imatge'=>$imatge,
            'ImatgeGaleria'=>$imatgeGallery,
            'Preu'=>$price
        ]);
    }
}