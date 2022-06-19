/* CREACION DE 3 VEHICULOS LANZADERA */
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Saturno V', 2900, 3500, 'Vehiculo Lanzadera', 'Oxigeno Liquido', 9800);
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Saturno IV', 1800, 2800, 'Vehiculo Lanzadera', 'Oxigeno Liquido', 8700);
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Dragon V2', 2950, 3700, 'Vehiculo Lanzadera', 'Oxigeno Liquido', 9990);

insert into tb_detalleLanzadera (nombre,capacidadDeCarga,cargaUtil,cargaSujeta,cantidadPropulsores) 
	values ('Saturno V', 118, 'Apolo', 1, 5);
insert into tb_detalleLanzadera (nombre,capacidadDeCarga,cargaUtil,cargaSujeta,cantidadPropulsores) 
	values ('Saturno IV', 100, 'Gemini', 0, 4);
insert into tb_detalleLanzadera (nombre,capacidadDeCarga,cargaUtil,cargaSujeta,cantidadPropulsores) 
	values ('Dragon V2', 150, 'AXD53', 1, 6);
    
/* CREACION DE 3 SONDAS */
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Sonda A3', 1, 1, 'Sonda', 'M55-A', 11200);
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Mariner X', 2, 3, 'Sonda', 'M55-A', 10500);
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Sky-54', 1, 2, 'Sonda', 'Oxigeno Liquido', 14000);
    
insert into tb_detalleSonda (nombre,ubicacionObjetivo,enOperacion,distanciaDeTierra,puedeAterrizar,sistemaDeAterrizaje) 
	values ('Sonda A3', 'Sol', 1, 150000, 0, '');
insert into tb_detalleSonda (nombre,ubicacionObjetivo,enOperacion,distanciaDeTierra,puedeAterrizar,sistemaDeAterrizaje) 
	values ('Mariner X', 'Marte', 1, 500000, 1, 'Amartizador');
insert into tb_detalleSonda (nombre,ubicacionObjetivo,enOperacion,distanciaDeTierra,puedeAterrizar,sistemaDeAterrizaje) 
	values ('Sky-54', 'Andromeda', 1, 900000, 0, '');
    
/* CREACION DE 3 Satelites Artificiales */
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Satelite VIVO', 1, 2, 'Satelite Artificial', 'M55-A', 8000);
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Satelite A30', 2, 3, 'Satelite Artificial', 'Petroleo Refinado', 7499);
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Satelite X34', 1, 2, 'Satelite Artificial', 'Oxigeno Liquido', 9000);
    
insert into tb_detalleSatelite (nombre,ubicacionObjetivo,enOperacion,altitud,nivelDeOrbita) 
	values ('Satelite VIVO', 'Tierra', 1, 500, 'Bajo');
insert into tb_detalleSatelite (nombre,ubicacionObjetivo,enOperacion,altitud,nivelDeOrbita) 
	values ('Satelite A30', 'Tierra', 1, 480, 'Bajo');
insert into tb_detalleSatelite (nombre,ubicacionObjetivo,enOperacion,altitud,nivelDeOrbita) 
	values ('Satelite X34', 'Marte', 0, 850, 'Medio');
    
/* CREACION DE 3 NAVES TRIPULADAS */
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Apolo', 1, 2, 'Nave Tripulada', 'Petroleo Refinado', 15000);
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Screw Dragon', 2, 3, 'Nave Tripulada', 'Oxigeno Liquido', 16000);
insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
	values ('Martian III', 1, 2, 'Nave Tripulada', 'M55-A', 18000);
    
insert into tb_detalleTripulada (nombre,capacidadPasajeros,proposito,altitud) 
	values ('Apolo', 3, 'Mision', 500);
insert into tb_detalleTripulada (nombre,capacidadPasajeros,proposito,altitud) 
	values ('Screw Dragon', 2, 'Mantenimiento', 509);
insert into tb_detalleTripulada (nombre,capacidadPasajeros,proposito,altitud) 
	values ('Martian III', 3, 'Mision', 493);