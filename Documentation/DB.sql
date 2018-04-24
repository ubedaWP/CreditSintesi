-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 23, 2018 at 04:34 PM
-- Server version: 5.7.21-0ubuntu0.16.04.1
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
  `IDNew` int(11) NOT NULL,
  `Comentaris` text COLLATE utf8_spanish_ci NOT NULL,
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

-- --------------------------------------------------------

--
-- Table structure for table `TAGS`
--

CREATE TABLE `TAGS` (
  `IDTag` int(11) NOT NULL,
  `Tag` varchar(20) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `IDUsr` int(11) NOT NULL,
  `User` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `Pass` int(30) NOT NULL,
  `Avatar` text COLLATE utf8_spanish_ci,
  `Email` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Age` date DEFAULT NULL,
  `Country` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Nif` varchar(15) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `COMENTARIS`
--
ALTER TABLE `COMENTARIS`
  ADD PRIMARY KEY (`IDCom`);

--
-- Indexes for table `NOTICIES`
--
ALTER TABLE `NOTICIES`
  ADD PRIMARY KEY (`IDNot`);

--
-- Indexes for table `TAGS`
--
ALTER TABLE `TAGS`
  ADD PRIMARY KEY (`IDTag`),
  ADD UNIQUE KEY `Tag` (`Tag`);

--
-- Indexes for table `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`IDUsr`),
  ADD UNIQUE KEY `Users` (`User`),
  ADD UNIQUE KEY `e-mail` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `COMENTARIS`
--
ALTER TABLE `COMENTARIS`
  MODIFY `IDCom` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `NOTICIES`
--
ALTER TABLE `NOTICIES`
  MODIFY `IDNot` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `TAGS`
--
ALTER TABLE `TAGS`
  MODIFY `IDTag` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `USERS`
--
ALTER TABLE `USERS`
  MODIFY `IDUsr` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
