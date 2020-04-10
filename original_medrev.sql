-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: medrev2
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `did` int(11) NOT NULL,
  `comment_desc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `did` (`did`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`did`) REFERENCES `drugs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,2,3,'This is the first ever comment description'),(2,3,5,'This is the second ever comment description'),(3,4,3,'Third comment'),(4,2,1,'this is 2\'s comment on 1'),(5,3,1,'this is 3\'s comment on 1'),(6,3,5,'Hello');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disease_authors`
--

DROP TABLE IF EXISTS `disease_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `disease_authors` (
  `disid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  KEY `disid` (`disid`),
  KEY `uid` (`uid`),
  CONSTRAINT `disease_authors_ibfk_1` FOREIGN KEY (`disid`) REFERENCES `diseases` (`diseaseid`) ON DELETE CASCADE,
  CONSTRAINT `disease_authors_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disease_authors`
--

LOCK TABLES `disease_authors` WRITE;
/*!40000 ALTER TABLE `disease_authors` DISABLE KEYS */;
INSERT INTO `disease_authors` VALUES (2,3);
/*!40000 ALTER TABLE `disease_authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diseases`
--

DROP TABLE IF EXISTS `diseases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diseases` (
  `name` varchar(255) NOT NULL,
  `diseaseid` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`diseaseid`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diseases`
--

LOCK TABLES `diseases` WRITE;
/*!40000 ALTER TABLE `diseases` DISABLE KEYS */;
INSERT INTO `diseases` VALUES ('disease1',1,'symptom1'),('crocin',2,'fever'),('cro',3,'test'),('123',4,'test');
/*!40000 ALTER TABLE `diseases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drug_authors`
--

DROP TABLE IF EXISTS `drug_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drug_authors` (
  `did` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  KEY `did` (`did`),
  KEY `uid` (`uid`),
  CONSTRAINT `drug_authors_ibfk_1` FOREIGN KEY (`did`) REFERENCES `drugs` (`id`) ON DELETE CASCADE,
  CONSTRAINT `drug_authors_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drug_authors`
--

LOCK TABLES `drug_authors` WRITE;
/*!40000 ALTER TABLE `drug_authors` DISABLE KEYS */;
INSERT INTO `drug_authors` VALUES (6,4),(7,4),(8,4),(9,4),(10,4);
/*!40000 ALTER TABLE `drug_authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drugs`
--

DROP TABLE IF EXISTS `drugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drugs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `dosage` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avg_rating` float DEFAULT '0',
  `num_of_ratings` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drugs`
--

LOCK TABLES `drugs` WRITE;
/*!40000 ALTER TABLE `drugs` DISABLE KEYS */;
INSERT INTO `drugs` VALUES (1,'1','ok','3','2020-03-07 21:14:37','2020-03-07 21:16:13',NULL,0),(3,'secondentry','2ok','4','2020-03-07 21:14:37','2020-03-07 21:16:13',NULL,0),(4,'d1','desc','ertyui','2020-03-11 18:37:13','2020-03-11 18:37:13',NULL,0),(5,'secth','is this','4','2020-03-11 21:17:13','2020-03-11 21:17:13',4.5,0),(6,'cal','ointment','always','2020-04-10 17:26:40','2020-04-10 17:26:40',0,0),(7,'lac','ointment','never','2020-04-10 17:28:47','2020-04-10 17:47:32',3.5,2),(8,'cal','ointment','always','2020-04-10 17:57:53','2020-04-10 17:57:53',0,0),(9,'cal','ointment','always','2020-04-10 17:57:55','2020-04-10 17:57:55',0,0),(10,'cal','ointment','always','2020-04-10 17:57:56','2020-04-10 17:57:56',0,0);
/*!40000 ALTER TABLE `drugs` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger update_rating before update on drugs for each row begin set @old_avg=(select avg_rating from drugs where id=NEW.id); set @old_num=(select num_of_ratings from drugs where id=NEW.id); set NEW.avg_rating=(@old_avg*@old_num+NEW.avg_rating)/(@old_num+1); set NEW.num_of_ratings=@old_num+1; end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `family`
--

DROP TABLE IF EXISTS `family`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `family` (
  `member_id` int(11) NOT NULL,
  `head_id` int(11) NOT NULL,
  KEY `member_id` (`member_id`),
  KEY `head_id` (`head_id`),
  CONSTRAINT `family_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `family_ibfk_2` FOREIGN KEY (`head_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family`
--

LOCK TABLES `family` WRITE;
/*!40000 ALTER TABLE `family` DISABLE KEYS */;
/*!40000 ALTER TABLE `family` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medication`
--

DROP TABLE IF EXISTS `medication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medication` (
  `uid` int(11) DEFAULT NULL,
  `drugid` int(11) DEFAULT NULL,
  KEY `uid` (`uid`),
  KEY `drugid` (`drugid`),
  CONSTRAINT `medication_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `medication_ibfk_2` FOREIGN KEY (`drugid`) REFERENCES `drugs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medication`
--

LOCK TABLES `medication` WRITE;
/*!40000 ALTER TABLE `medication` DISABLE KEYS */;
INSERT INTO `medication` VALUES (3,3),(3,10),(3,6),(2,7),(2,4);
/*!40000 ALTER TABLE `medication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient` (
  `uid` int(11) DEFAULT NULL,
  `disid` int(11) DEFAULT NULL,
  KEY `uid` (`uid`),
  KEY `disid` (`disid`),
  CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`id`),
  CONSTRAINT `patient_ibfk_2` FOREIGN KEY (`disid`) REFERENCES `diseases` (`diseaseid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `similar_drugs`
--

DROP TABLE IF EXISTS `similar_drugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `similar_drugs` (
  `did` int(11) NOT NULL,
  `similar_to_id` int(11) NOT NULL,
  KEY `did` (`did`),
  KEY `similar_to_id` (`similar_to_id`),
  CONSTRAINT `similar_drugs_ibfk_3` FOREIGN KEY (`did`) REFERENCES `drugs` (`id`) ON DELETE CASCADE,
  CONSTRAINT `similar_drugs_ibfk_4` FOREIGN KEY (`similar_to_id`) REFERENCES `drugs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `similar_drugs`
--

LOCK TABLES `similar_drugs` WRITE;
/*!40000 ALTER TABLE `similar_drugs` DISABLE KEYS */;
INSERT INTO `similar_drugs` VALUES (8,1),(8,5),(9,1),(9,5),(10,1),(10,5);
/*!40000 ALTER TABLE `similar_drugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `treatment`
--

DROP TABLE IF EXISTS `treatment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `treatment` (
  `disid` int(11) DEFAULT NULL,
  `drugid` int(11) DEFAULT NULL,
  KEY `disid` (`disid`),
  KEY `drugid` (`drugid`),
  CONSTRAINT `treatment_ibfk_1` FOREIGN KEY (`disid`) REFERENCES `diseases` (`diseaseid`),
  CONSTRAINT `treatment_ibfk_2` FOREIGN KEY (`drugid`) REFERENCES `drugs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `treatment`
--

LOCK TABLES `treatment` WRITE;
/*!40000 ALTER TABLE `treatment` DISABLE KEYS */;
INSERT INTO `treatment` VALUES (1,6),(2,6),(1,7),(1,8),(2,8),(1,9),(2,9),(1,10),(2,10);
/*!40000 ALTER TABLE `treatment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `username` varchar(32) NOT NULL,
  `ph_number` varchar(32) NOT NULL,
  `blood_grp` varchar(10) NOT NULL,
  `dob` date NOT NULL,
  `height` float NOT NULL,
  `weight` float NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `gender` varchar(3) DEFAULT NULL,
  `user_role` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Harsh','harsh1@gmail.com','123456789','harsh2338','1234567890','B+','2000-07-03',184.5,63.6,'2020-03-06 20:43:57','2020-03-06 21:54:13',NULL,'admin'),(3,'Akshith Bellare','another','okpass','akhs','9876543210','O+','2000-08-15',178.5,70.2,'2020-03-07 19:15:35','2020-03-07 19:15:35','M','pharmacist'),(4,'reallife','harsh.aayush.r1@gmail.com','root','root','undefined','B+','2020-03-27',185.2,63.9,'2020-03-07 19:29:50','2020-03-07 19:29:50','F','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-10 21:43:06
