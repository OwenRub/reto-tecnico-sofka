create database if not exists db_naves;

use db_naves;

create table tb_naves(
	nombre varchar(50) not null primary key,
    peso int,
    empuje int,
    tipo varchar(50),
    combustible varchar(100),
    velocidadMax int
);

create table tb_detalleLanzadera(
	nombre varchar(50) not null primary key,
	capacidadDeCarga int,
    cargaUtil varchar(50),
    cargaSujeta tinyint,
    cantidadPropulsores int
);

create table tb_detalleSonda(
	nombre varchar(50) not null primary key,
	ubicacionObjetivo varchar (50),
    enOperacion tinyint,
    distanciaDeTierra int,
    puedeAterrizar tinyint,
    sistemaDeAterrizaje varchar(50)
);

create table tb_detalleSatelite(
	nombre varchar(50) not null primary key,
	ubicacionObjetivo varchar (50),
    enOperacion tinyint,
    altitud int,
    nivelDeOrbita varchar(50)
);

create table tb_detalleTripulada(
	nombre varchar(50) not null primary key,
	capacidadPasajeros int,
    proposito varchar(50),
    altitud int
);