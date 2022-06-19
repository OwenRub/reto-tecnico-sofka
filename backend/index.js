const express = require('express');
const router = require('./rutas');
const cors = require('cors');

const app = express();
const port = (process.env.PORT || 3000);

// SETUP
app.set('port', port);
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.listen(app.get('port'), (error) => {
  if(error) console.log('Error al iniciar el servidor ', error);
  else console.log('Servidor iniciado en puerto ', port);
});