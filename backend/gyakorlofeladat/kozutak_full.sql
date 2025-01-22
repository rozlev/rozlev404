-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 24, 2023 at 11:42 AM
-- Server version: 5.7.39
-- PHP Version: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kozutak`
--
CREATE DATABASE IF NOT EXISTS `kozutak` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `kozutak`;

-- --------------------------------------------------------

--
-- Table structure for table `kozutak_hossza`
--

DROP TABLE IF EXISTS `kozutak_hossza`;
CREATE TABLE `kozutak_hossza` (
  `datum` year(4) NOT NULL,
  `hossz` int(11) NOT NULL,
  `Mid` int(11) DEFAULT NULL,
  `Rid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `kozutak_hossza`
--

INSERT INTO `kozutak_hossza` (`datum`, `hossz`, `Mid`, `Rid`) VALUES
(2017, 1515, 1, 4),
(2018, 1513, 1, 4),
(2019, 1515, 1, 4),
(2020, 1518, 1, 4),
(2021, 1518, 1, 4),
(2017, 895, 2, 4),
(2018, 896, 2, 4),
(2019, 895, 2, 4),
(2020, 907, 2, 4),
(2017, 1639, 3, 4),
(2018, 1645, 3, 4),
(2019, 1649, 3, 4),
(2020, 1645, 3, 4),
(2021, 1648, 3, 4),
(2017, 1844, 4, 5),
(2018, 1847, 4, 5),
(2019, 1847, 4, 5),
(2021, 1929, 4, 5),
(2017, 1581, 5, 5),
(2018, 1573, 5, 5),
(2019, 1574, 5, 5),
(2020, 1577, 5, 5),
(2021, 1620, 5, 5),
(2017, 1752, 6, 5),
(2018, 1752, 6, 5),
(2019, 1750, 6, 5),
(2020, 1750, 6, 5),
(2021, 1747, 6, 5),
(2017, 1724, 7, 6),
(2018, 1724, 7, 6),
(2019, 1723, 7, 6),
(2020, 1723, 7, 6),
(2021, 1723, 7, 6),
(2017, 1759, 8, 6),
(2018, 1759, 8, 6),
(2019, 1826, 8, 6),
(2020, 1821, 8, 6),
(2021, 1821, 8, 6),
(2017, 1209, 9, 6),
(2018, 1209, 9, 6),
(2019, 1209, 9, 6),
(2020, 1209, 9, 6),
(2021, 1209, 9, 6),
(2017, 2588, 10, 7),
(2018, 2588, 10, 7),
(2019, 2584, 10, 7),
(2020, 2585, 10, 7),
(2021, 2648, 10, 7),
(2017, 1269, 11, 7),
(2018, 1277, 11, 7),
(2019, 1277, 11, 7),
(2020, 1297, 11, 7),
(2021, 1295, 11, 7),
(2017, 948, 12, 7),
(2018, 951, 12, 7),
(2019, 954, 12, 7),
(2020, 954, 12, 7),
(2021, 957, 12, 7),
(2017, 1676, 13, 8),
(2018, 1717, 13, 8),
(2019, 1718, 13, 8),
(2020, 1754, 13, 8),
(2021, 1755, 13, 8),
(2017, 1331, 14, 8),
(2018, 1331, 14, 8),
(2019, 1359, 14, 8),
(2020, 1358, 14, 8),
(2021, 1366, 14, 8),
(2017, 2239, 15, 8),
(2018, 2242, 15, 8),
(2019, 2247, 15, 8),
(2020, 2247, 15, 8),
(2021, 2236, 15, 8),
(2017, 2265, 16, 9),
(2018, 2270, 16, 9),
(2019, 2269, 16, 9),
(2020, 2271, 16, 9),
(2021, 2278, 16, 9),
(2017, 1470, 17, 9),
(2018, 1469, 17, 9),
(2019, 1516, 17, 9),
(2020, 1537, 17, 9),
(2021, 1543, 17, 9),
(2017, 1484, 18, 9),
(2018, 1485, 18, 9),
(2019, 1490, 18, 9),
(2020, 1490, 18, 9),
(2021, 1490, 18, 9),
(2017, 95, 19, 2),
(2018, 96, 19, 2),
(2019, 96, 19, 2),
(2020, 96, 19, 2),
(2021, 96, 19, 2),
(2021, 909, 2, 4),
(2020, 1924, 4, 5);

-- --------------------------------------------------------

--
-- Table structure for table `megyek`
--

DROP TABLE IF EXISTS `megyek`;
CREATE TABLE `megyek` (
  `Mid` int(11) NOT NULL,
  `megyenev` varchar(100) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Rid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `megyek`
--

INSERT INTO `megyek` (`Mid`, `megyenev`, `Rid`) VALUES
(1, 'Fejér', 4),
(2, 'Komárom-Esztergom', 4),
(3, 'Veszprém', 4),
(4, 'Győr-Moson-Sopron', 5),
(5, 'Vas', 5),
(6, 'Zala', 5),
(7, 'Baranya', 6),
(8, 'Somogy', 6),
(9, 'Tolna', 6),
(10, 'Borsod-Abaúj-Zemplén', 7),
(11, 'Heves', 7),
(12, 'Nógrád', 7),
(13, 'Hajdú-Bihar', 8),
(14, 'Jász-Nagykun-Szolnok', 8),
(15, 'Szabolcs-Szatmár-Bereg', 8),
(16, 'Bács-Kiskun', 9),
(17, 'Békés', 9),
(18, 'Csongrád-Csanád', 9),
(19, 'Budapest', 2),
(20, 'Pest', 1);

-- --------------------------------------------------------

--
-- Table structure for table `regiok`
--

DROP TABLE IF EXISTS `regiok`;
CREATE TABLE `regiok` (
  `Rid` int(11) NOT NULL,
  `regionev` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `regio_tipusa` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `regiok`
--

INSERT INTO `regiok` (`Rid`, `regionev`, `regio_tipusa`) VALUES
(1, 'Pest', 'vármegye'),
(2, 'Budapest', 'főváros'),
(3, 'Közép-Magyarország', 'nagyrégió'),
(4, 'Közép-Dunántúl', 'régió'),
(5, 'Nyugat-Dunántúl', 'régió'),
(6, 'Dél-Dunántúl', 'régió'),
(7, 'Észak-Magyarország', 'régió'),
(8, 'Észak-Alfőld', 'régió'),
(9, 'Dél-Alföld', 'régió');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kozutak_hossza`
--
ALTER TABLE `kozutak_hossza`
  ADD KEY `kozutak_hossza_regiok_Rid_fk` (`Rid`),
  ADD KEY `kozutak_hossza_megyek_Mid_fk` (`Mid`);

--
-- Indexes for table `megyek`
--
ALTER TABLE `megyek`
  ADD PRIMARY KEY (`Mid`);

--
-- Indexes for table `regiok`
--
ALTER TABLE `regiok`
  ADD PRIMARY KEY (`Rid`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `kozutak_hossza`
--
ALTER TABLE `kozutak_hossza`
  ADD CONSTRAINT `kozutak_hossza_megyek_Mid_fk` FOREIGN KEY (`Mid`) REFERENCES `megyek` (`Mid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `kozutak_hossza_regiok_Rid_fk` FOREIGN KEY (`Rid`) REFERENCES `regiok` (`Rid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
