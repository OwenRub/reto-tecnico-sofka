const conexion = require('./config/conexion');
const router = require('express').Router();

router.get('/', (req, res) => {
  const sqls = [
    'select * from tb_detalleLanzadera D inner join tb_naves N on D.nombre = N.nombre',
    `select * from tb_detalleSonda D inner join tb_naves N on D.nombre = N.nombre`,
    `select * from tb_detalleSatelite D inner join tb_naves N on D.nombre = N.nombre`,
    `select * from tb_detalleTripulada D inner join tb_naves N on D.nombre = N.nombre`
  ];

  conexion.query(sqls[0], (err, rows0) => {
    if(err) throw err;
    conexion.query(sqls[1], (err, rows1)=>{
      if(err) throw err;
      conexion.query(sqls[2], (err, rows2) =>{
        if(err) throw err;
        conexion.query(sqls[3], (err, rows3) =>{
          if(err) throw err;
          const totalRows = [...rows0, ...rows1,...rows2,...rows3];
          console.log(totalRows)
          res.json(totalRows);
        })
      })
    })
  });
});

router.get('/lanzadera', (req, res) => {
  const sql = `select * from tb_detalleLanzadera D inner join tb_naves N on D.nombre = N.nombre`;
  conexion.query(sql, (err, rows) => {
    if(err) throw err;
    else res.json(rows);
  });
});

router.get('/sonda', (req, res) => {
  const sql = `select * from tb_detalleSonda D inner join tb_naves N on D.nombre = N.nombre`;
  conexion.query(sql, (err, rows) => {
    if(err) throw err;
    else res.json(rows);
  });
});

router.get('/satelite', (req, res) => {
  const sql = `select * from tb_detalleSatelite D inner join tb_naves N on D.nombre = N.nombre`;
  conexion.query(sql, (err, rows) => {
    if(err) throw err;
    else res.json(rows);
  });
});

router.get('/tripulada', (req, res) => {
  const sql = `select * from tb_detalleTripulada D inner join tb_naves N on D.nombre = N.nombre`;
  conexion.query(sql, (err, rows) => {
    if(err) throw err;
    else res.json(rows);
  });
});

router.post('/', (req, res) => {
  const objetoNave = {...req.body};

  const sqlNave = createInsertQuery(objetoNave, 'Nave');
  const sqlDetalle = createInsertQuery(objetoNave, objetoNave.tipo);

  try{
    conexion.query(sqlNave, (err) => {
      if(err) throw err;
    });
    conexion.query(sqlDetalle, (err) => {
      if(err) throw err;
    });

    res.json( { ok: true } )
  }
  catch(err){
    res.json( { ok: false, error: err } );
  }

});

router.delete('/:nombre&:tipo', (req, res) => {
  const nombre = decodeURIComponent(req.params.nombre);
  const tipo = decodeURIComponent(req.params.tipo);
  const sql = createDeleteQuery(nombre, 'Nave');
  const sqlDetalle = createDeleteQuery(nombre, tipo);

  try{
    conexion.query(sql, (err) => {
      if(err) throw err;
    });
    conexion.query(sqlDetalle, (err) => {
      if(err) throw err;
    });
    res.json( { ok: true } );
  }
  catch(err){
    res.json( { ok: false, error: err } );
  }
});


function createInsertQuery(obj, tablaObjetivo){
  switch(tablaObjetivo){
    case 'Vehiculo Lanzadera':
      return `insert into tb_detalleLanzadera (nombre,capacidadDeCarga,cargaUtil,cargaSujeta,cantidadPropulsores)
      values ('${obj.nombre}',${obj.capacidadDeCarga},'${obj.cargaUtil}',${obj.cargaSujeta?1:0},${obj.cantidadDePropulsores});`;
    case 'Sonda':
      return `insert into tb_detalleSonda (nombre,ubicacionObjetivo,enOperacion,distanciaDeTierra,puedeAterrizar,sistemaDeAterrizaje) 
      values ('${obj.nombre}','${obj.ubicacionObjetivo}', ${obj.enOperacion?1:0}, ${obj.distanciaDeTierra}, ${obj.puedeAterrizar?1:0}, '${obj.sistemaDeAterrizaje}');`;
    case 'Satelite Artificial':
      return `insert into tb_detalleSatelite (nombre,ubicacionObjetivo,enOperacion,altitud,nivelDeOrbita) 
      values ('${obj.nombre}', '${obj.ubicacionObjetivo}', ${obj.enOperacion?1:0}, ${obj.altitud}, '${obj.nivelDeOrbita}');`;
    case 'Nave Tripulada':
      return `insert into tb_detalleTripulada (nombre,capacidadPasajeros,proposito,altitud) 
      values ('${obj.nombre}', ${obj.capacidadPasajeros}, '${obj.proposito}', ${obj.altitud});`;
    default:
      return `insert into tb_naves (nombre,peso,empuje,tipo,combustible,velocidadMax) 
      values ('${obj.nombre}', ${obj.peso}, ${obj.empuje}, '${obj.tipo}', '${obj.combustible}', ${obj.velocidadMax});`
  }
}

function createDeleteQuery(nombre, tablaObjetivo){
  switch(tablaObjetivo){
    case 'Vehiculo Lanzadera':
      return `delete from tb_detalleLanzadera where nombre = '${nombre}';`;
    case 'Sonda':
      return `delete from tb_detalleSonda where nombre = '${nombre}';`;
    case 'Satelite Artificial':
      return `delete from tb_detalleSatelite where nombre = '${nombre}';`;
    case 'Nave Tripulada':
      return `delete from tb_detalleTripulada where nombre = '${nombre}';`;
    default:
      return `delete from tb_naves where nombre = '${nombre}';`;
  }
}

module.exports = router;