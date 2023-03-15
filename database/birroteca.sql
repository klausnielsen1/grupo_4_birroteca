-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.27-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para birroteca
CREATE DATABASE IF NOT EXISTS `birroteca` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `birroteca`;

-- Volcando estructura para tabla birroteca.carrito
CREATE TABLE IF NOT EXISTS `carrito` (
  `id` int(100) NOT NULL,
  `id_producto` int(100) DEFAULT NULL,
  `cantidad` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_carrito_productos` (`id_producto`),
  CONSTRAINT `FK_carrito_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla birroteca.carrito: ~0 rows (aproximadamente)
DELETE FROM `carrito`;

-- Volcando estructura para tabla birroteca.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Si es cerveza o merchandasing';

-- Volcando datos para la tabla birroteca.categorias: ~0 rows (aproximadamente)
DELETE FROM `categorias`;

-- Volcando estructura para tabla birroteca.clases
CREATE TABLE IF NOT EXISTS `clases` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Si es distribuidor o cliente';

-- Volcando datos para la tabla birroteca.clases: ~0 rows (aproximadamente)
DELETE FROM `clases`;

-- Volcando estructura para tabla birroteca.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL,
  `id_clase` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `avatar` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_clientes_clases` (`id_clase`),
  CONSTRAINT `FK_clientes_clases` FOREIGN KEY (`id_clase`) REFERENCES `clases` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla birroteca.clientes: ~0 rows (aproximadamente)
DELETE FROM `clientes`;

-- Volcando estructura para tabla birroteca.distribuidores
CREATE TABLE IF NOT EXISTS `distribuidores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla birroteca.distribuidores: ~0 rows (aproximadamente)
DELETE FROM `distribuidores`;

-- Volcando estructura para tabla birroteca.estilos
CREATE TABLE IF NOT EXISTS `estilos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla birroteca.estilos: ~0 rows (aproximadamente)
DELETE FROM `estilos`;

-- Volcando estructura para tabla birroteca.marcas
CREATE TABLE IF NOT EXISTS `marcas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla birroteca.marcas: ~0 rows (aproximadamente)
DELETE FROM `marcas`;

-- Volcando estructura para tabla birroteca.pedidos
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int(11) NOT NULL,
  `id_cliente` int(255) DEFAULT NULL,
  `id_carrito` int(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `importe` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_pedidos_clientes` (`id_cliente`),
  KEY `FK_pedidos_carrito` (`id_carrito`),
  CONSTRAINT `FK_pedidos_carrito` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id`),
  CONSTRAINT `FK_pedidos_clientes` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla birroteca.pedidos: ~0 rows (aproximadamente)
DELETE FROM `pedidos`;

-- Volcando estructura para tabla birroteca.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `imagen` int(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_marca` int(255) DEFAULT NULL,
  `id_estilo` int(255) DEFAULT NULL,
  `id_distribuidor` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_productos_categorias` (`id_categoria`),
  KEY `FK_productos_marcas` (`id_marca`),
  KEY `FK_productos_estilos` (`id_estilo`),
  KEY `FK_productos_distribuidores` (`id_distribuidor`),
  CONSTRAINT `FK_productos_categorias` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`),
  CONSTRAINT `FK_productos_distribuidores` FOREIGN KEY (`id_distribuidor`) REFERENCES `distribuidores` (`id`),
  CONSTRAINT `FK_productos_estilos` FOREIGN KEY (`id_estilo`) REFERENCES `estilos` (`id`),
  CONSTRAINT `FK_productos_marcas` FOREIGN KEY (`id_marca`) REFERENCES `marcas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla birroteca.productos: ~0 rows (aproximadamente)
DELETE FROM `productos`;

-- Volcando estructura para tabla birroteca.stock
CREATE TABLE IF NOT EXISTS `stock` (
  `id` int(255) NOT NULL,
  `id_producto` int(255) DEFAULT NULL,
  `cantidad` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_stock_productos` (`id_producto`),
  CONSTRAINT `FK_stock_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla birroteca.stock: ~0 rows (aproximadamente)
DELETE FROM `stock`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
