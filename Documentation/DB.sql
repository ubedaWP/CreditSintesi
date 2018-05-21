-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 21, 2018 at 04:00 PM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.1.17-1+ubuntu16.04.1+deb.sury.org+1

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DB`
--
CREATE DATABASE IF NOT EXISTS `DB` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `DB`;

-- --------------------------------------------------------

--
-- Table structure for table `COMENTARIS`
--

CREATE TABLE `COMENTARIS` (
  `IDCom` int(11) NOT NULL,
  `IDUsr` int(11) NOT NULL,
  `IDNot` int(11) NOT NULL,
  `Comentari` text COLLATE utf8_spanish_ci NOT NULL,
  `Data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `COMENTARIS`:
--

-- --------------------------------------------------------

--
-- Table structure for table `COMPRES`
--

CREATE TABLE `COMPRES` (
  `IDCom` int(11) NOT NULL,
  `IDUsr` int(11) NOT NULL,
  `IDFac` int(11) NOT NULL,
  `IDProd` int(11) NOT NULL,
  `Preu` double NOT NULL,
  `Digital` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `COMPRES`:
--

-- --------------------------------------------------------

--
-- Table structure for table `FACTURES`
--

CREATE TABLE `FACTURES` (
  `IDFac` int(11) NOT NULL,
  `PreuT` double NOT NULL,
  `Data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `FACTURES`:
--

-- --------------------------------------------------------

--
-- Table structure for table `NOTICIES`
--

CREATE TABLE `NOTICIES` (
  `IDNot` int(11) NOT NULL,
  `Data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Text1` text COLLATE utf8_spanish_ci NOT NULL,
  `Text2` text COLLATE utf8_spanish_ci NOT NULL,
  `Categoria` enum('Actualizaciones','Novedades','Eventos','Comunidad','Tienda','Otros') COLLATE utf8_spanish_ci NOT NULL DEFAULT 'Otros',
  `Titol` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `Resum` tinytext COLLATE utf8_spanish_ci NOT NULL,
  `ImatgePortada` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `ImatgeMitg` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `NOTICIES`:
--

--
-- Dumping data for table `NOTICIES`
--

INSERT INTO `NOTICIES` (`IDNot`, `Data`, `Text1`, `Text2`, `Categoria`, `Titol`, `Resum`, `ImatgePortada`, `ImatgeMitg`) VALUES
(1, '2018-04-24 00:00:00', 'En el més profund del subcontinent de Zandalar, enmig d\'un enclavament selvático salvatge, es troba Zuldazar, vestigi del gran poder que posseís antany l\'Imperi Zandalar. Acompanyeu-nos en una visita guiada per la ciutat més antiga de món i les majestuoses terres que l\'envolten, i coneixeu la flora i la fauna que habiten en aquest ancestral lloc.\nMolt per sobre del dosel arbori de la selva, el Tron Daurat fa les vegades de centre de la ciutat de Zuldazar, on es pot gaudir d\'unes de les vistes més colpidores de la regió. Des d\'allí governa Rastakhan, rei dels Zandalari. Als seus peus s\'estén un immens i antic laberint de patis interconnectats, amb temples dedicats als lloa, del manteniment de la qual s\'ocupen els seus lleials serfs.\n\nBenvinguts a Zuldazar.', 'Però les coses en aquest gran imperi no són com haurien de. L\'ambient està carregat de foscos secrets i corren rumors sobre una possible rebel·lió. Com a representants de l\'Horda, haureu de guanyar-vos la confiança del rei Rastakhan i del consell Zanchuli per accedir als recursos de Zuldazar i la seva potent flota. L\'esforç bèl·lic de l\'Horda depèn d\'això. Els visitants trobaran tot allò que necessitin per a la seva llarga estada en el cor de Dazar\'alor al centre de la ciutat. Els serveis inclouen, entre uns altres, una posada, portals tant a les grans ciutats de l\'Horda com a Dalaran, instructors de professions, un banc, ninots d\'entrenament i comerciants. És fàcil perdre\'s en aquesta antiga ciutat de múltiples nivells, la qual cosa posa de manifest la seva grandesa i majestuositad.', 'Novedades', 'Avance de Battle for Azeroth: Guía del visitante de Zuldazar', 'En el més profund del subcontinent de Zandalar, enmig d\'un enclavament selvático salvatge, es troba Zuldazar, vestigi del gran poder que posseís antany l\'Imperi Zandalar.', 'portada1.jpg', 'mitg1.jpg'),
(2, '2018-04-26 00:00:00', 'A continuació trobareu una llista de correccions en viu per a alguns problemes detectats en World of Warcraft: Legion. Algunes de les quals podeu veure més a baix s\'apliquen al mateix moment en què s\'implementen, mentre que unes altres poden requerir reinicios programats dels regnes. Tingueu en compte que hi ha coses que no es poden arreglar sense una actualització del pegat en el client. Aquesta llista s\'anirà completant a mesura que s\'apliquin més correccions en viu.', 'S\'ha corregit un error que podia provocar que les festivitats del joc comencessin o acabessin fins a amb una hora d\'antelació o retard en els regnes australians. <br>Amb això es corregeix també un error que provocava que no es pogués accedir al torneig de pesca de la Vega de Tuercespina a Austràlia.  Comentaris dels desenvolupadors: Pot ser que això provoqui alguns lleugers canvis de calendari en els esdeveniments per als jugadors australians. Comproveu el calendari del joc per veure els horaris locals actualitzats.', 'Actualizaciones', 'Correccions en viu: 4 de maig 2018', 'A continuació trobareu una llista de correccions en viu per a alguns problemes detectats en World of Warcraft: Legion.', 'portada2.jpg', 'mitg2.jpg'),
(3, '2018-04-23 00:00:00', 'Entreu en la Sorra de Cim del Tigre i prepareu-vos per a l\'Enfrontament del *Shadopan. Correreu fins a un punt de control central per activar a un dels dos caps. El primer que mat al cap de l\'altre equip guanya!', 'Sou capaços de fer mats? Si voleu guanyar aquesta *camorra, aneu a haver de polir les vostres habilitats, perquè la pilota de mats ha arribat a *Pandaria. Haureu de córrer per apoderar-vos de les pilotes que hi ha al centre del mapa o en les mines del nord i del sud, portar-los fins a la base de l\'enemic i fer un tir magnífic a llarga distància o jugar-vos-la i anar a per el mat.', 'Eventos', 'Enfrontament del Shadopan\n(Del 10 al 17 de gener)\nPunt de control', 'Cada dues setmanes estarà disponible una nova camorra JcJ per als jugadors que busquin alguna cosa una mica diferent.', 'portada3.jpg', 'mitg4.jpg'),
(4, '2018-04-19 00:00:00', 'La tercera setmana de la fase de grups europea del *MDI va començar amb sorpresa quan el vuitè cap de sèrie, *Games *Revolted, va desbancar al primer, *Method, en el primer enfrontament. *Method es trobava llavors davant un ardu camí per la part baixa del quadre per arribar a la final del regional i aconseguir una plaça en l\'esdeveniment en directe del 22 de juny. Una missió molt complicada per a qualsevol equip, inclòs un amb tant talent com *Method.', 'La competició a Europa va ser aferrissada. Diversos enfrontaments es van decidir per escassos segons de diferència i, en alguns casos, pel dèficit de morts. En la primera ronda, el sisè cap de sèrie, *Kjell\'s *Angels, les hi va enginyar per acabar amb el tercer, *Raider.*iox; va ser el primer per qüestió de segons en *Fauce d\'Ànimes i també en Càmera de les *Celadoras, on es va portar la sèrie. Més tard, els *Angels van eliminar a *Infinite, que era el segon, en una remuntada total amb un marge de 2 segons en *Karazhan inferior, malgrat el dèficit de morts de 15 segons que tenia *Infinite. Finalment, *Kjell\'s *Angels va acabar amb precisió quirúrgica amb l\'última oportunitat de *Method d\'arribar a la final europea en Càmera de les *Celadoras, mapa on derrotarien a *Team *PogChamp per proclamar-se campions del torneig.', 'Comunidad', 'Els Angels pugen pel cap alt en el regional europeu del MDI', 'La tercera setmana de la fase de grups europea del *MDI va començar amb sorpresa quan el vuitè cap de sèrie, *Games *Revolted, va desbancar al primer, *Method, en el primer enfrontament.', 'portada4.jpg', 'mitg4.jpg'),
(5, '2018-04-17 00:00:00', 'Totes les grans històries de guerra tenen dues cares. Aquesta edició limitada de tapa dura reuneix dues noves novel·les de World of Warcraft, que expliquen la destrucció de Teldrassil des del punt de vista de l\'Aliança (Triava, de Christie Golden) i de l\'Horda (Una guerra justa, de Robert Brooks). Cada història inclou il·lustracions originals exclusives d\'aquesta edició*.', 'Si heu comprat una còpia digital de Battle for Azeroth en la tenda de Blizzard o en la tenda del joc, però voleu millorar-la per tenir la Collector\'s Edition, us reemborsarem automàticament el cost de la còpia digital en el vostre saldo de Blizzard. Per a això, introduïu la clau de la Collector\'s Edition abans de la mitjanit del 31 de desembre de 2018. En introduir la clau de la vostra Collector\'s Edition, podrem veure la transacció original en el vostre compte i el reemborsament es farà efectiu. Recordeu que heu d\'introduir la clau de la Collector\'s Edition abans que acabi l\'any, ja que els reemborsaments automàtics del saldo de Blizzard es deshabilitaran en la mitjanit del 31 de desembre de 2018.', 'Tienda', 'Battle for Azeroth™: Collector’s Edition', 'Mentre Azeroth es dessagna, els exèrcits de l\'Horda i l\'Aliança s\'enfronten una vegada més en els camps de batalla. ', 'portada5.jpg', 'mitg5.jpg'),
(6, '2018-04-10 00:00:00', 'La casa de subhastes remota de WoW es desactivarà el 18 d\'abril de 2018, i ja no es podran veure els anuncis ni fer transaccions des del lloc web de WoW o l\'aplicació Armeria de WoW. Podreu seguir usant aquesta aplicació per a la resta de funcions, ja que solament es retirarà la casa de subhastes. Fins al 18 d\'abril podreu seguir usant els serveis de la casa de subhastes en el lloc web i en l\'aplicació Armeria de WoW, però després d\'aquesta data es desactivarà la funció i s\'eliminaran tots els enllaços del nostre lloc web.', 'Alguns dels llocs de la comunitat de World of Warcraft utilitzen la API de Blizzard per accedir a dades relacionades amb la casa de subhastes. Si useu un lloc que accedeix a les dades de la casa de subhastes per estar al tant dels preus, podeu seguir fent-ho. Sempre hem permès que la comunitat obtingui i usi aquestes dades, i això no ha canviat. Podeu seguir vigilant els preus si us ve de gust.<br> Els subastadores de Azerot', 'Otros', 'La casa de subhastes remota es retira', 'La casa de subhastes remota de WoW es desactivarà el 18 d\'abril de 2018', 'portada6.jpg', 'mitg6.jpg'),
(8, '2018-05-18 18:04:21', 'Text principal de la nova noticia', 'Text secundari de la nova noticia', 'Eventos', 'Prova nova noticia', 'Resum de la nova noticia', 'prueba.jpg', 'prueba.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `PRODUCTES_DIGITALS`
--

CREATE TABLE `PRODUCTES_DIGITALS` (
  `IDProd_Digital` int(11) NOT NULL,
  `Producte` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcio` text COLLATE utf8_spanish_ci NOT NULL,
  `DescripcioExtensa` text COLLATE utf8_spanish_ci NOT NULL,
  `Imatge` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `ImatgeGaleria` varchar(60) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Preu` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `PRODUCTES_DIGITALS`:
--

--
-- Dumping data for table `PRODUCTES_DIGITALS`
--

INSERT INTO `PRODUCTES_DIGITALS` (`IDProd_Digital`, `Producte`, `Descripcio`, `DescripcioExtensa`, `Imatge`, `ImatgeGaleria`, `Preu`) VALUES
(1, 'Moto de guerra de la horda', 'La moto de guerra de la horda, una de les muntures mes novedoses de tot el joc.\r\nVes amb compte no et punxis!', 'La moto de guerra de la horda, una de les muntures mes novedoses de tot el joc.\r\nVes amb compte no et punxis!\r\n\r\nConstruït pels estridents enginyers de l\'Horda, a vegades anomenat tallagespa goblin, aquesta monstruositat rugent tracta als seus enemics com si estiguessin fets d\'herba... llestos per podar.', 'moto-guerra-horda.png', 'moto-guerra-horda.png', 24.99),
(2, 'L\'Invencible', 'L\'invencible el caball que ha sobreviscut mes de mil batalles ara pot ser teu.', 'L\'invencible el caball que ha sobreviscut mes de mil batalles ara pot ser teu.\r\n\r\nEl famós cavall d\'Arthas Menethil, que serveix el seu mestre en la vida i en la mort. El muntar a ell és realment una prova de força.\r\n\r\nÚs: T\'ensenya com convocar aquesta muntura. Aquesta muntura canvia de terrestre a voladora depenent de la vostra habilitat d\'equitació i ubicació.\r\n', 'invencible.jpg', 'invencible.jpg', 34.99),
(3, 'Pantera Negra', 'La pantera negra, incrustada en les millors joies de Gadgetzan.', 'La pantera negra, la muntura més ràpida.\r\n\r\nEl príncep del comerç Gallywix va ordenar recentment desenes d\'aquestes brillants muntanyes incrustades amb joies per recórrer els motius del seu palau de plaer.\r\n\r\nÚs: T\'ensenya com convocar aquesta muntura. Aquesta muntura canvia de terrestre a voladora depenent de la vostra habilitat d\'equitació i ubicació.', 'pantera-negra.png', 'pantera-negra.png', 24.99),
(4, 'Serp de Núvol de Pandaria', 'Un dels dracs més exòtics del món, recentment arribat desde la misteriosa illa de Pandaria.', 'Un dels dracs més exòtics del món, recentment arribat desde la misteriosa illa de Pandaria.\r\n\r\nEls Pandaren creuen que les serps de núvol són Blaves són portadores de la bona fortuna.\r\n\r\nÚs: T\'ensenya com convocar aquesta muntura. Aquesta muntura canvia de terrestre a voladora depenent de la vostra habilitat d\'equitació i ubicació.\r\n', 'serp-nuvol.png', 'serp-nuvol.png', 24.99),
(5, 'Alci de Muntanya', 'Alcí guardià del bosc i la natura.', 'Alcí guardià del bosc i la natura.\r\n\r\nAquests companys màgics són els guàrdies dels boscos pacífics i primordials del Somni Esmeralda.\r\n\r\nÚs: T\'ensenya com convocar aquesta muntura. Aquesta muntura canvia de terrestre a voladora depenent de la vostra habilitat d\'equitació i ubicació.', 'alci.jpg', 'alci.jpg', 19.99),
(6, 'Petit Alamort', 'El drac de destrucció més adorable.', 'El drac de destrucció més adorable.\r\n\r\nDoneu a aquest petitó un habitatge i un llit còmode per dormir. En realitat... a jutjar per la mida de la barbeta, podria necessitar dos llits.\r\n\r\nÚs: T\'ensenya a convocar el Petit Alamort. Mascota de vanitat i combat de mascotes.', 'alamort.jpg', 'alamort.jpg', 14.99),
(7, 'Llop Fantasmal', 'Un llop fantasmal tornat a la vida per surcar els cels.', 'Un llop fantasmal tornat a la vida per surcar els cels.\r\n\r\nUn poderós llop de Draenor, tocat per les energies vils desencadenades per Gul\'dan en la selva de Tanaan. No s\'ha tornat completament boig... encara.\r\n\r\nÚs: T\'ensenya com convocar aquesta muntura. Aquesta muntura canvia de velocitat terrestre depenent de la vostra habilitat d\'equitació i ubicació.', 'llop-fantasmal.png', 'llop-fantasmal.png', 24.99),
(8, 'Gosset de Safari', 'El gosset mes preparat de tota la savannah.', 'El gosset mes preparat de tota la savannah.\r\n\r\nUn Gos preparat per safaris, qui serà la seva primera presa?\r\n\r\nÚs: T\'ensenya a convocar el Gosset de Safari. Mascota de vanitat i combat de mascotes.', 'gos-safari.png', 'gos-safari.png', 9.99),
(9, 'Gos amb Ulleres', 'El gos més a la moda de tot Azeroth.', 'El gos més a la moda de tot Azeroth.\n\nUn Gosset equipat amb unes ulleres, que eviten que l\'enlluerni la teva glòria.\n\nÚs: T\'ensenya a convocar el Gosset amb Ulleres. Mascota de vanitat i combat de mascotes.', 'gos-ulleres.png', 'gos-ulleres.png', 9.99),
(10, 'Winston', 'Winston el Goril·la. Tot i ser un cadell ja es un dels científics més importants de l\'actualitat.\r\n\r\nI sap parlar!', 'Winston el Goril·la. Tot i ser un cadell ja es un dels científics més importants de l\'actualitat.\r\n\r\nI sap parlar!\r\n\r\n"No sóc un simi, sóc científic". - Winston\r\n\r\nÚs: T\'ensenya a convocar el Petit Winston. Mascota de vanitat i combat de mascotes.', 'winston.jpg', 'winston.jpg', 14.99),
(11, 'Edició Coleccionista BFA', 'Edició Coleccionista Digital de la Expansió Battle for Azeroth.', 'Edició Coleccionista de la Expansió Battle for Azeroth.\r\n\r\n\r\nRecompenses que inclou:\r\n\r\nWorld of Warcraft\r\n\r\n     Ravasauri daurat de la Horda (Muntura).\r\n     Cavall de batalla de l\'Aliança (Muntura).\r\n     Tottle, el nadó Tortuga (mascota)\r\n     Augment del personatge al nivell 110\r\n\r\nHearthstone\r\n\r\n     Dors de carta temática de BfA\r\n\r\nHeroes of the Storm\r\n\r\n     Muntura del Flamejador Primal\r\n\r\nOverwatch\r\n\r\n     Tracer Alliance Banner & Horde Banner Emotes\r\n     Torbjorn per a l\'aliança i per a la horda\r\n     Icones Zandalar i Kul\'Tiras\r\n     Sprays de Anduin, Jaina, Sylvanas i Varok.\r\n\r\nStarCraft II\r\n\r\n     Sprays de l\'Aliança i la Horda', 'edicioColeccionistaBFA.jpg', 'edicioColeccionistaBFA.jpg', 59.99);

-- --------------------------------------------------------

--
-- Table structure for table `PRODUCTES_FISICS`
--

CREATE TABLE `PRODUCTES_FISICS` (
  `IDProd_Fisic` int(11) NOT NULL,
  `Producte` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcio` text COLLATE utf8_spanish_ci NOT NULL,
  `DescripcioExtensa` text COLLATE utf8_spanish_ci NOT NULL,
  `Imatge` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `ImatgeGaleria` varchar(60) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Preu` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `PRODUCTES_FISICS`:
--

--
-- Dumping data for table `PRODUCTES_FISICS`
--

INSERT INTO `PRODUCTES_FISICS` (`IDProd_Fisic`, `Producte`, `Descripcio`, `DescripcioExtensa`, `Imatge`, `ImatgeGaleria`, `Preu`) VALUES
(1, 'Peluix Pepe', 'El simpàtic Pepe, ara en forma de peluix.\r\n\r\nL\'ocell favorit de tots els senyors de la Guerra!', 'El simpàtic Pepe, ara en forma de peluix.\n\nL\'ocell favorit de tots els senyors de la Guerra!\n\nEl nostre nou felpa de World of Warcraft. De 6" d\'alçada, capçal articulat fins a la punta dels dits dels peus, amb els seus petits clips de peu, pot agafar el barret, el cap, el monitor o qualsevol altre lloc que vulgueu.', 'peluix-pepe.png', 'peluix-pepe.png', 24.99),
(2, 'Penjoll Faccions', 'Penjolls de les dues faccions, la horda i la aliança.\r\n\r\n(es venen per separat, preu unitat)', 'Penjolls de les dues faccions, la horda i la aliança.\r\n\r\nEls penjolls són fet de plata real. Un de la Horda i l\'altre de l\'Aliança.\r\n\r\nInclouen cadena.\r\n\r\n(es venen per separat, preu unitat)', 'penjolls-horda-aliança.jpg', 'penjolls-horda-aliança.jpg', 29.99),
(3, 'Bufanda de l\'Aliança', 'Sent l\'escalfor de l\'Aliança.', 'Sent l\'escalfor de l\'Aliança.\r\n\r\nL\'Horda i l\'Aliança s\'han unit en temps de greu perill per derrotar una amenaça comuna tot i generacions d\'odi. Representa la teva facció independentment del clima amb aquests bufandes oficials!\r\n', 'bufanda-aliança.png', 'bufanda-aliança.png', 19.99),
(4, 'Bufanda de la Horda', 'Sent l\'escalfor de la Horda.', 'Sent l\'escalfor de la Horda.\r\n\r\nL\'Horda i l\'Aliança s\'han unit en temps de greu perill per derrotar una amenaça comuna tot i generacions d\'odi. Representa la teva facció independentment del clima amb aquests bufandes oficials!', 'bufanda-horda.png', 'bufanda-horda.png', 19.99),
(5, 'Estatua d\'Illidan Stormrage', 'Amb aquesta estatua d\'Illidan tindrás 60 Centímetres de pura ira demoníaca.', 'Amb aquesta estatua d\'Illidan tindrás 60 Centímetres de pura ira demoníaca.\r\n\r\nBlizzard Collectibles: del talent de Blizzard per als fanàtics de Blizzard!\r\n\r\nNo estàs preparat per l\'admiració d\'aquesta estàtua de Illidan. De peu, de 24 polzades d\'alçada i de poliresina, aquesta escultura colorida serà l\'addició perfecta a la vostra col·lecció. Es subministra amb 2 conjunts de mans intercanviables (amb i sense il·lustracions emblemàtiques de Illidan).', 'estatua-illidan.png', 'estatua-illidan.png', 390),
(6, 'Estatua de Sylvanas Windrunner', 'La estatua de la líder de la Horda Sylvanas.\r\n\r\n45 cm.', 'La estatua de la líder de la Horda Sylvanas.\r\n\r\n"He caminat als regnes dels morts. He vist la foscor infinita. Res que diguis o facis em pot espantar". Sylvanas Windrunner ha tingut molts títols en la seva vida i els que s\'oposen a ella segurament no arribaran gaire lluny. Celebra avui aquest personatge icònic de Warcraft amb la seva estàtua oficial.\r\n\r\n45 cm.', 'estatua-sylvanas.png', 'estatua-sylvanas.png', 350),
(7, 'Jersei nadalenc del Greench.', 'Jersei nadalenc de llana del Greench.\r\nPerfecte per celebrar el Festival d\'Ivern amb la família i amics.', 'Jersei nadalenc de llana del Greench.\r\nPerfecte per celebrar el Festival d\'Ivern amb la família i amics.\r\n\r\nAra, amb Greench, aquest nou i millorat suèter lleig de World of Warcraft segurament serà la xerrada de la taverna... bé, hi ha algun tipus de xerrada de totes maneres.', 'jersei-greench-nadal.png', 'jersei-greench-nadal.png', 44.99),
(8, 'Beanie amb logo.', 'Gorro estil Beanie amb el logo de World of Warcraft.', 'Gorro estil Beanie amb el logo de World of Warcraft.\r\n\r\nAugmenta la teva resistència al gel amb aquest nou beanie de World of Warcraft!', 'wow-beanie.png', 'wow-beanie.png', 19.99),
(9, 'Cartera de pell.', 'Cartera de pell real amb el logo de World of Warcraft.', 'Cartera de pell real amb el logo de World of Warcraft.\r\n\r\nMantingui segur el seu or amb aquesta cartera de cuir de World of Warcraft. Ni tan sols els bàrbars et podràn robar!', 'wow-cartera-pell.png', 'wow-cartera-pell.png', 29.99),
(10, 'Gorra de Wow Legion', 'Gorra de la Legió de World of Warcraft.', 'Gorra de la Legió de World of Warcraft.\r\n\r\nTemi la Legió. Utilitza la Legió.', 'wow-legion-gorra.png', 'wow-legion-gorra.png', 27.99);

-- --------------------------------------------------------

--
-- Table structure for table `TAGS`
--

CREATE TABLE `TAGS` (
  `IDTag` int(11) NOT NULL,
  `Tag` varchar(15) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `TAGS`:
--

--
-- Dumping data for table `TAGS`
--

INSERT INTO `TAGS` (`IDTag`, `Tag`) VALUES
(6, 'Aliança'),
(12, 'Complements'),
(13, 'Figura'),
(5, 'Horda'),
(10, 'Joc'),
(9, 'Mascota'),
(1, 'Muntura'),
(2, 'Peluix'),
(4, 'Penjoll'),
(11, 'Roba');

-- --------------------------------------------------------

--
-- Table structure for table `TAGS_PRODUCTES_DIGITALS`
--

CREATE TABLE `TAGS_PRODUCTES_DIGITALS` (
  `ID` int(11) NOT NULL,
  `IDTag` int(11) NOT NULL,
  `IDProd` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `TAGS_PRODUCTES_DIGITALS`:
--   `IDProd`
--       `PRODUCTES_DIGITALS` -> `IDProd_Digital`
--   `IDTag`
--       `TAGS` -> `IDTag`
--

--
-- Dumping data for table `TAGS_PRODUCTES_DIGITALS`
--

INSERT INTO `TAGS_PRODUCTES_DIGITALS` (`ID`, `IDTag`, `IDProd`) VALUES
(1, 1, 1),
(9, 1, 2),
(10, 1, 3),
(11, 1, 4),
(12, 1, 5),
(13, 1, 7),
(14, 9, 6),
(15, 9, 8),
(16, 9, 9),
(17, 9, 10),
(18, 10, 11),
(19, 1, 11),
(20, 9, 11);

-- --------------------------------------------------------

--
-- Table structure for table `TAGS_PRODUCTES_FISICS`
--

CREATE TABLE `TAGS_PRODUCTES_FISICS` (
  `ID` int(11) NOT NULL,
  `IDTag` int(11) NOT NULL,
  `IDProd` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `TAGS_PRODUCTES_FISICS`:
--   `IDProd`
--       `PRODUCTES_FISICS` -> `IDProd_Fisic`
--   `IDTag`
--       `TAGS` -> `IDTag`
--

--
-- Dumping data for table `TAGS_PRODUCTES_FISICS`
--

INSERT INTO `TAGS_PRODUCTES_FISICS` (`ID`, `IDTag`, `IDProd`) VALUES
(16, 2, 1),
(17, 4, 2),
(18, 5, 2),
(19, 6, 2),
(20, 6, 3),
(21, 12, 3),
(22, 5, 4),
(23, 12, 4),
(24, 13, 5),
(25, 13, 6),
(26, 11, 7),
(27, 12, 8),
(28, 12, 9),
(29, 12, 10);

-- --------------------------------------------------------

--
-- Table structure for table `USUARIS`
--

CREATE TABLE `USUARIS` (
  `IDUsr` int(11) NOT NULL,
  `Usuari` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Contrasenya` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `Avatar` text COLLATE utf8_spanish_ci,
  `Email` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Nom` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Edat` date DEFAULT NULL,
  `Pais` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Nif` varchar(15) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- RELATIONS FOR TABLE `USUARIS`:
--

--
-- Dumping data for table `USUARIS`
--

INSERT INTO `USUARIS` (`IDUsr`, `Usuari`, `Contrasenya`, `Avatar`, `Email`, `Nom`, `Edat`, `Pais`, `Nif`, `Admin`) VALUES
(1, 'Admin', '1234', 'Admin.png', 'admin@prova.com', 'usuari', '1995-02-24', NULL, NULL, 1),
(2, 'Usuari2', '1234', 'User1.png', 'usuari2@prova.com', NULL, NULL, NULL, '123456789', 0),
(6, 'Usuari1', '1234', 'User2.png', 'usuari1@prova.com', 'Joan User', NULL, 'Espanya', '1234567890', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `COMENTARIS`
--
ALTER TABLE `COMENTARIS`
  ADD PRIMARY KEY (`IDCom`);

--
-- Indexes for table `COMPRES`
--
ALTER TABLE `COMPRES`
  ADD PRIMARY KEY (`IDCom`);

--
-- Indexes for table `FACTURES`
--
ALTER TABLE `FACTURES`
  ADD PRIMARY KEY (`IDFac`);

--
-- Indexes for table `NOTICIES`
--
ALTER TABLE `NOTICIES`
  ADD PRIMARY KEY (`IDNot`);

--
-- Indexes for table `PRODUCTES_DIGITALS`
--
ALTER TABLE `PRODUCTES_DIGITALS`
  ADD PRIMARY KEY (`IDProd_Digital`);

--
-- Indexes for table `PRODUCTES_FISICS`
--
ALTER TABLE `PRODUCTES_FISICS`
  ADD PRIMARY KEY (`IDProd_Fisic`);

--
-- Indexes for table `TAGS`
--
ALTER TABLE `TAGS`
  ADD PRIMARY KEY (`IDTag`),
  ADD UNIQUE KEY `Tag` (`Tag`);

--
-- Indexes for table `TAGS_PRODUCTES_DIGITALS`
--
ALTER TABLE `TAGS_PRODUCTES_DIGITALS`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `TAGS_PRODUCTES_FISICS`
--
ALTER TABLE `TAGS_PRODUCTES_FISICS`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `USUARIS`
--
ALTER TABLE `USUARIS`
  ADD PRIMARY KEY (`IDUsr`),
  ADD UNIQUE KEY `Usuari` (`Usuari`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `COMENTARIS`
--
ALTER TABLE `COMENTARIS`
  MODIFY `IDCom` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `COMPRES`
--
ALTER TABLE `COMPRES`
  MODIFY `IDCom` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `FACTURES`
--
ALTER TABLE `FACTURES`
  MODIFY `IDFac` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `NOTICIES`
--
ALTER TABLE `NOTICIES`
  MODIFY `IDNot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `PRODUCTES_DIGITALS`
--
ALTER TABLE `PRODUCTES_DIGITALS`
  MODIFY `IDProd_Digital` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `PRODUCTES_FISICS`
--
ALTER TABLE `PRODUCTES_FISICS`
  MODIFY `IDProd_Fisic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `TAGS`
--
ALTER TABLE `TAGS`
  MODIFY `IDTag` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `TAGS_PRODUCTES_DIGITALS`
--
ALTER TABLE `TAGS_PRODUCTES_DIGITALS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `TAGS_PRODUCTES_FISICS`
--
ALTER TABLE `TAGS_PRODUCTES_FISICS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `USUARIS`
--
ALTER TABLE `USUARIS`
  MODIFY `IDUsr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
