-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 09, 2018 at 08:23 PM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DB`
--

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

-- --------------------------------------------------------

--
-- Table structure for table `FACTURES`
--

CREATE TABLE `FACTURES` (
  `IDFac` int(11) NOT NULL,
  `PreuT` double NOT NULL,
  `Data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `NOTICIES`
--

CREATE TABLE `NOTICIES` (
  `IDNot` int(11) NOT NULL,
  `Data` date NOT NULL,
  `Noticia` mediumtext COLLATE utf8_spanish_ci NOT NULL,
  `Categoria` enum('Actualizaciones','Novedades','Eventos','Comunidad','Tienda','Otros') COLLATE utf8_spanish_ci NOT NULL DEFAULT 'Otros',
  `Titol` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `Link` varchar(200) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `NOTICIES`
--

INSERT INTO `NOTICIES` (`IDNot`, `Data`, `Noticia`, `Categoria`, `Titol`, `Link`) VALUES
(1, '2018-04-24', 'Lorem ipsum dolor sit amet, in eius dictas sit, in qui verear fabulas. Enim fastidii expetendis ea pro, mea hinc inani efficiendi ex, consul expetendis mea at. Eam lobortis facilisis disputationi ne, delenit electram pro eu. Gloriatur posidonium dissentiet ad vim, mel cu feugiat salutatus assueverit. Dicunt luptatum ullamcorper no mei.\r\n\r\nNec commodo vivendo ex, labore ullamcorper signiferumque est te. Quodsi dissentiunt sea ne. Per dico melius eu, ornatus qualisque ocurreret cum ut, quod detracto mea ne. Eos oratio fierent conclusionemque ut. Nec legimus fuisset volumus ea, meis utinam perfecto cu est.\r\n\r\nAt quo sumo iuvaret contentiones. Sea platonem inciderint ad. Ceteros maiestatis ex ius. No eam ludus nemore, at cum nostro laoreet invidunt, regione voluptaria mei ad.\r\n\r\nEx alii adolescens per, perpetua omittantur liberavisse has id. Ne apeirian intellegat assueverit sit. Vis ei fuisset efficiantur, ex ipsum discere vel. Nibh exerci mea ut, alia ponderum prodesset ad nam. Et qui labore copiosae. Nec atqui meliore electram an.\r\n\r\nFacer consul malorum id est. Inani persequeris no has, cum legere ornatus suscipiantur id, vix in ridens integre. Ad dolorum mnesarchum eum, nominavi delicatissimi interpretaris est an. Est suas modus ad, est ei unum munere. Civibus interpretaris ea per, id natum suavitate pro, mei at vero graece. Regione repudiandae vim ne. Vide definitiones mea ad, eam te nulla zril option.', 'Novedades', 'Novetats per a la següent expansió', 'novetats-per-a-la-seguent-expansio'),
(2, '2018-04-26', 'Lorem ipsum dolor sit amet, in eius dictas sit, in qui verear fabulas. Enim fastidii expetendis ea pro, mea hinc inani efficiendi ex, consul expetendis mea at. Eam lobortis facilisis disputationi ne, delenit electram pro eu. Gloriatur posidonium dissentiet ad vim, mel cu feugiat salutatus assueverit. Dicunt luptatum ullamcorper no mei.\r\n\r\nNec commodo vivendo ex, labore ullamcorper signiferumque est te. Quodsi dissentiunt sea ne. Per dico melius eu, ornatus qualisque ocurreret cum ut, quod detracto mea ne. Eos oratio fierent conclusionemque ut. Nec legimus fuisset volumus ea, meis utinam perfecto cu est.\r\n\r\nAt quo sumo iuvaret contentiones. Sea platonem inciderint ad. Ceteros maiestatis ex ius. No eam ludus nemore, at cum nostro laoreet invidunt, regione voluptaria mei ad.\r\n\r\nEx alii adolescens per, perpetua omittantur liberavisse has id. Ne apeirian intellegat assueverit sit. Vis ei fuisset efficiantur, ex ipsum discere vel. Nibh exerci mea ut, alia ponderum prodesset ad nam. Et qui labore copiosae. Nec atqui meliore electram an.\r\n\r\nFacer consul malorum id est. Inani persequeris no has, cum legere ornatus suscipiantur id, vix in ridens integre. Ad dolorum mnesarchum eum, nominavi delicatissimi interpretaris est an. Est suas modus ad, est ei unum munere. Civibus interpretaris ea per, id natum suavitate pro, mei at vero graece. Regione repudiandae vim ne. Vide definitiones mea ad, eam te nulla zril option.', 'Actualizaciones', 'Notícia actualització', 'actualitzacio-1'),
(3, '2018-04-23', 'Lorem ipsum dolor sit amet, in eius dictas sit, in qui verear fabulas. Enim fastidii expetendis ea pro, mea hinc inani efficiendi ex, consul expetendis mea at. Eam lobortis facilisis disputationi ne, delenit electram pro eu. Gloriatur posidonium dissentiet ad vim, mel cu feugiat salutatus assueverit. Dicunt luptatum ullamcorper no mei.\r\n\r\nNec commodo vivendo ex, labore ullamcorper signiferumque est te. Quodsi dissentiunt sea ne. Per dico melius eu, ornatus qualisque ocurreret cum ut, quod detracto mea ne. Eos oratio fierent conclusionemque ut. Nec legimus fuisset volumus ea, meis utinam perfecto cu est.\r\n\r\nAt quo sumo iuvaret contentiones. Sea platonem inciderint ad. Ceteros maiestatis ex ius. No eam ludus nemore, at cum nostro laoreet invidunt, regione voluptaria mei ad.\r\n\r\nEx alii adolescens per, perpetua omittantur liberavisse has id. Ne apeirian intellegat assueverit sit. Vis ei fuisset efficiantur, ex ipsum discere vel. Nibh exerci mea ut, alia ponderum prodesset ad nam. Et qui labore copiosae. Nec atqui meliore electram an.\r\n\r\nFacer consul malorum id est. Inani persequeris no has, cum legere ornatus suscipiantur id, vix in ridens integre. Ad dolorum mnesarchum eum, nominavi delicatissimi interpretaris est an. Est suas modus ad, est ei unum munere. Civibus interpretaris ea per, id natum suavitate pro, mei at vero graece. Regione repudiandae vim ne. Vide definitiones mea ad, eam te nulla zril option.', 'Eventos', 'Event de Sant Jordi', 'event-de-sant-jordi'),
(4, '2018-04-19', 'Lorem ipsum dolor sit amet, in eius dictas sit, in qui verear fabulas. Enim fastidii expetendis ea pro, mea hinc inani efficiendi ex, consul expetendis mea at. Eam lobortis facilisis disputationi ne, delenit electram pro eu. Gloriatur posidonium dissentiet ad vim, mel cu feugiat salutatus assueverit. Dicunt luptatum ullamcorper no mei.\r\n\r\nNec commodo vivendo ex, labore ullamcorper signiferumque est te. Quodsi dissentiunt sea ne. Per dico melius eu, ornatus qualisque ocurreret cum ut, quod detracto mea ne. Eos oratio fierent conclusionemque ut. Nec legimus fuisset volumus ea, meis utinam perfecto cu est.\r\n\r\nAt quo sumo iuvaret contentiones. Sea platonem inciderint ad. Ceteros maiestatis ex ius. No eam ludus nemore, at cum nostro laoreet invidunt, regione voluptaria mei ad.\r\n\r\nEx alii adolescens per, perpetua omittantur liberavisse has id. Ne apeirian intellegat assueverit sit. Vis ei fuisset efficiantur, ex ipsum discere vel. Nibh exerci mea ut, alia ponderum prodesset ad nam. Et qui labore copiosae. Nec atqui meliore electram an.\r\n\r\nFacer consul malorum id est. Inani persequeris no has, cum legere ornatus suscipiantur id, vix in ridens integre. Ad dolorum mnesarchum eum, nominavi delicatissimi interpretaris est an. Est suas modus ad, est ei unum munere. Civibus interpretaris ea per, id natum suavitate pro, mei at vero graece. Regione repudiandae vim ne. Vide definitiones mea ad, eam te nulla zril option.', 'Comunidad', 'Concurs de fanart', 'concurs-de-fanart'),
(5, '2018-04-17', 'Lorem ipsum dolor sit amet, in eius dictas sit, in qui verear fabulas. Enim fastidii expetendis ea pro, mea hinc inani efficiendi ex, consul expetendis mea at. Eam lobortis facilisis disputationi ne, delenit electram pro eu. Gloriatur posidonium dissentiet ad vim, mel cu feugiat salutatus assueverit. Dicunt luptatum ullamcorper no mei.\r\n\r\nNec commodo vivendo ex, labore ullamcorper signiferumque est te. Quodsi dissentiunt sea ne. Per dico melius eu, ornatus qualisque ocurreret cum ut, quod detracto mea ne. Eos oratio fierent conclusionemque ut. Nec legimus fuisset volumus ea, meis utinam perfecto cu est.\r\n\r\nAt quo sumo iuvaret contentiones. Sea platonem inciderint ad. Ceteros maiestatis ex ius. No eam ludus nemore, at cum nostro laoreet invidunt, regione voluptaria mei ad.\r\n\r\nEx alii adolescens per, perpetua omittantur liberavisse has id. Ne apeirian intellegat assueverit sit. Vis ei fuisset efficiantur, ex ipsum discere vel. Nibh exerci mea ut, alia ponderum prodesset ad nam. Et qui labore copiosae. Nec atqui meliore electram an.\r\n\r\nFacer consul malorum id est. Inani persequeris no has, cum legere ornatus suscipiantur id, vix in ridens integre. Ad dolorum mnesarchum eum, nominavi delicatissimi interpretaris est an. Est suas modus ad, est ei unum munere. Civibus interpretaris ea per, id natum suavitate pro, mei at vero graece. Regione repudiandae vim ne. Vide definitiones mea ad, eam te nulla zril option.', 'Tienda', 'Invencible disponible ja a la botiga!', 'invencible-disponible-ja-a-la-botiga'),
(6, '2018-04-10', 'Lorem ipsum dolor sit amet, in eius dictas sit, in qui verear fabulas. Enim fastidii expetendis ea pro, mea hinc inani efficiendi ex, consul expetendis mea at. Eam lobortis facilisis disputationi ne, delenit electram pro eu. Gloriatur posidonium dissentiet ad vim, mel cu feugiat salutatus assueverit. Dicunt luptatum ullamcorper no mei.\r\n\r\nNec commodo vivendo ex, labore ullamcorper signiferumque est te. Quodsi dissentiunt sea ne. Per dico melius eu, ornatus qualisque ocurreret cum ut, quod detracto mea ne. Eos oratio fierent conclusionemque ut. Nec legimus fuisset volumus ea, meis utinam perfecto cu est.\r\n\r\nAt quo sumo iuvaret contentiones. Sea platonem inciderint ad. Ceteros maiestatis ex ius. No eam ludus nemore, at cum nostro laoreet invidunt, regione voluptaria mei ad.\r\n\r\nEx alii adolescens per, perpetua omittantur liberavisse has id. Ne apeirian intellegat assueverit sit. Vis ei fuisset efficiantur, ex ipsum discere vel. Nibh exerci mea ut, alia ponderum prodesset ad nam. Et qui labore copiosae. Nec atqui meliore electram an.\r\n\r\nFacer consul malorum id est. Inani persequeris no has, cum legere ornatus suscipiantur id, vix in ridens integre. Ad dolorum mnesarchum eum, nominavi delicatissimi interpretaris est an. Est suas modus ad, est ei unum munere. Civibus interpretaris ea per, id natum suavitate pro, mei at vero graece. Regione repudiandae vim ne. Vide definitiones mea ad, eam te nulla zril option.', 'Otros', 'Inauguració pàgina web', 'inauguracio-pagina-web');

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
(9, 'Gos amb Ulleres', 'El gos més a la moda de tot Azeroth.', 'El gos més a la moda de tot Azeroth.\r\n\r\nUn Gosset equipat amb unes ulleres, que eviten que l\'enlluerni la teva glòria.\r\n\r\nÚs: T\'ensenya a convocar el Gosset amb Ulleres. Mascota de vanitat i combat de mascotes.', 'gos-ulleres.png', 'gos-ulleres.png', 9.99),
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
  `Preu` double NOT NULL,
  `Stock` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `PRODUCTES_FISICS`
--

INSERT INTO `PRODUCTES_FISICS` (`IDProd_Fisic`, `Producte`, `Descripcio`, `DescripcioExtensa`, `Imatge`, `ImatgeGaleria`, `Preu`, `Stock`) VALUES
(1, 'Peluix Pepe', 'El simpàtic Pepe, ara en forma de peluix.\r\n\r\nL\'ocell favorit de tots els senyors de la Guerra!', 'El simpàtic Pepe, ara en forma de peluix.\r\n\r\nL\'ocell favorit de tots els senyors de la Guerra!\r\n\r\nEl nostre nou felpa de World of Warcraft. De 6" d\'alçada, capçal articulat fins a la punta dels dits dels peus, amb els seus petits clips de peu, pot agafar el barret, el cap, el monitor o qualsevol altre lloc que vulgueu.', 'peluix-pepe.jpg', 'peluix-pepe.jpg', 24.99, 5),
(2, 'Penjoll Faccions', 'Penjolls de les dues faccions, la horda i la aliança.\r\n\r\n(es venen per separat, preu unitat)', 'Penjolls de les dues faccions, la horda i la aliança.\r\n\r\nEls penjolls són fet de plata real. Un de la Horda i l\'altre de l\'Aliança.\r\n\r\nInclouen cadena.\r\n\r\n(es venen per separat, preu unitat)', 'penjolls-horda-aliança.png', 'penjolls-horda-aliança.png', 29.99, 3),
(3, 'Bufanda de l\'Aliança', 'Sent l\'escalfor de l\'Aliança.', 'Sent l\'escalfor de l\'Aliança.\r\n\r\nL\'Horda i l\'Aliança s\'han unit en temps de greu perill per derrotar una amenaça comuna tot i generacions d\'odi. Representa la teva facció independentment del clima amb aquests bufandes oficials!\r\n', 'bufanda-aliança.png', 'bufanda-aliança.png', 19.99, 7),
(4, 'Bufanda de la Horda', 'Sent l\'escalfor de la Horda.', 'Sent l\'escalfor de la Horda.\r\n\r\nL\'Horda i l\'Aliança s\'han unit en temps de greu perill per derrotar una amenaça comuna tot i generacions d\'odi. Representa la teva facció independentment del clima amb aquests bufandes oficials!', 'bufanda-horda.png', 'bufanda-horda.png', 19.99, 5),
(5, 'Estatua d\'Illidan Stormrage', 'Amb aquesta estatua d\'Illidan tindrás 60 Centímetres de pura ira demoníaca.', 'Amb aquesta estatua d\'Illidan tindrás 60 Centímetres de pura ira demoníaca.\r\n\r\nBlizzard Collectibles: del talent de Blizzard per als fanàtics de Blizzard!\r\n\r\nNo estàs preparat per l\'admiració d\'aquesta estàtua de Illidan. De peu, de 24 polzades d\'alçada i de poliresina, aquesta escultura colorida serà l\'addició perfecta a la vostra col·lecció. Es subministra amb 2 conjunts de mans intercanviables (amb i sense il·lustracions emblemàtiques de Illidan).', 'estatua-illidan.png', 'estatua-illidan.png', 390, 9),
(6, 'Estatua de Sylvanas Windrunner', 'La estatua de la líder de la Horda Sylvanas.\r\n\r\n45 cm.', 'La estatua de la líder de la Horda Sylvanas.\r\n\r\n"He caminat als regnes dels morts. He vist la foscor infinita. Res que diguis o facis em pot espantar". Sylvanas Windrunner ha tingut molts títols en la seva vida i els que s\'oposen a ella segurament no arribaran gaire lluny. Celebra avui aquest personatge icònic de Warcraft amb la seva estàtua oficial.\r\n\r\n45 cm.', 'estatua-sylvanas.png', 'estatua-sylvanas.png', 350, 3),
(7, 'Jersei nadalenc del Greench.', 'Jersei nadalenc de llana del Greench.\r\nPerfecte per celebrar el Festival d\'Ivern amb la família i amics.', 'Jersei nadalenc de llana del Greench.\r\nPerfecte per celebrar el Festival d\'Ivern amb la família i amics.\r\n\r\nAra, amb Greench, aquest nou i millorat suèter lleig de World of Warcraft segurament serà la xerrada de la taverna... bé, hi ha algun tipus de xerrada de totes maneres.', 'jersei-greench-nadal.png', 'jersei-greench-nadal.png', 44.99, 12),
(8, 'Beanie amb logo.', 'Gorro estil Beanie amb el logo de World of Warcraft.', 'Gorro estil Beanie amb el logo de World of Warcraft.\r\n\r\nAugmenta la teva resistència al gel amb aquest nou beanie de World of Warcraft!', 'wow-beanie.png', 'wow-beanie.png', 19.99, 6),
(9, 'Cartera de pell.', 'Cartera de pell real amb el logo de World of Warcraft.', 'Cartera de pell real amb el logo de World of Warcraft.\r\n\r\nMantingui segur el seu or amb aquesta cartera de cuir de World of Warcraft. Ni tan sols els bàrbars et podràn robar!', 'wow-cartera-pell.png', 'wow-cartera-pell.png', 29.99, 0),
(10, 'Gorra de Wow Legion', 'Gorra de la Legió de World of Warcraft.', 'Gorra de la Legió de World of Warcraft.\r\n\r\nTemi la Legió. Utilitza la Legió.', 'wow-legion-gorra.png', 'wow-legion-gorra.png', 27.99, 8);

-- --------------------------------------------------------

--
-- Table structure for table `TAGS`
--

CREATE TABLE `TAGS` (
  `IDTag` int(11) NOT NULL,
  `Tag` varchar(15) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

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
-- Dumping data for table `USUARIS`
--

INSERT INTO `USUARIS` (`IDUsr`, `Usuari`, `Contrasenya`, `Avatar`, `Email`, `Nom`, `Edat`, `Pais`, `Nif`, `Admin`) VALUES
(1, 'Admin', '1234', 'data:image/png;base64,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', 'admin@prova.com', 'usuari', '1995-02-24', NULL, NULL, 1),
(2, 'Usuari2', '1234', 'data:image/png;base64,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', 'usuari2@prova.com', NULL, NULL, NULL, NULL, 0),
(6, 'Usuari1', '1234', 'data:image/png;base64,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', 'usuari1@prova.com', NULL, NULL, NULL, NULL, 0);

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
  MODIFY `IDNot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `PRODUCTES_DIGITALS`
--
ALTER TABLE `PRODUCTES_DIGITALS`
  MODIFY `IDProd_Digital` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `PRODUCTES_FISICS`
--
ALTER TABLE `PRODUCTES_FISICS`
  MODIFY `IDProd_Fisic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
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
  MODIFY `IDUsr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
