# reto-tecnico-sofka

## Descripción

Hola amigos Sofkianos!

Soy Owen Rubio y esta es mi solución al reto técnico para ingresar a las training leagues de SofkaU. Si te interesa probar su funcionalidad, enhorabuena, porque ya lo he desplegado en la nube. El backend está desplegado en heroku, mientras que el frontend se encuentra desplegado en netlify.

En el siguiente link puedes visitar la aplicación:

[Estacion Espacial Sofka](https://estacion-sofka.netlify.app/)

El endpoint para las peticiones:

> https://gateway-estacion-sofka.herokuapp.com/
> 

## Tecnologías

Para resolver el desafío, decidí usar Angular para el frontend debido a que favorece la mantenibilidad y escalabilidad, esto gracias a su modularidad. Construí el backend con node.js y express. Mientras que para la base de datos usé sql.

## Carpetas y archivos

### Backend

Contiene los siguientes archivos:

- config/conexion.js: contiene la configuracion de la conexión a la base de datos. La configuración guardada en este repositorio contiene datos genéricos para evitar publicar algún dato sensible.
- index.js: declara la instancia de express y la configura, se hace uso del package cors para solventar los problemas por CORS policy al hacer peticiones desde el front en netlify y el back en heroku.
- rutas.js: archivo que contiene la configuración de cada endpoint.

### spacial-station

Carpeta que contiene el proyecto de angular. Se puede encontrar una estructura de carpetas dentro de src/app que sigue el patrón MVC.

- modelo/: contiene las clases creadas a partir de la abstracción realizada con la información del articulo sobre los tipos de naves. Además contiene las interfaces que serán de utilidad para manejar la información de naves ingresada por el usuario y obtenida desde el backend por medio de objetos planos.
- vista/: este módulo de angular contiene un componente que renderiza los registros de naves obtenidos, un componente para realizar búsquedas y uno para crear nuevos registros de naves (teniendo como componente hijo a un componente para pedir información específica de la nave). Todos estos encapsulados en un componente 'página-principal'.
- controlador/: el controlador está compuesto por una clase 'CrearNave' para la creación de instancias de cada tipo de nave y un servicio encargado de traer, enviar, almacenar, filtrar y eliminar registros del backend. El servicio hace uso de la clase 'CrearNave' para crear instancias con la información obtenida del backend o del usuario.

### scripts

Esta carpeta contiene dos scripts:

- setupNaveDatabase.sql: para la creación de la base de datos y tablas correspondientes al diagrama Entidad-Relacion.
- creacionRegistrosNaves.sql: crea 3 registros de nave para cada tipo especifico. Al haber 4 tipos de naves, crea en total 12 registros de naves.

## Ejecución

Para visualizar e interactuar con el proyecto, se puede visitar el enlace expuesto al inicio. Pero si se desea desplegar el proyecto para probarlo localmente, se pueden seguir las siguientes instrucciones:

1. Ejecutar los scripts para crear la base de datos con sus registros iniciales.
2. Con la información de la conexión creada, editar el archivo backend/config/conexion.js agregando el host, user, password, port y el nombre de la base de datos.
3. Editar el servicio _NaveService_ con la url correspondiente al endpoint local (http://localhost:3000/api).
4. Si se generan errores en las peticiones debido a CORS policy (aunque esté haciendo uso del package cors), se debe configurar el proxy de la siguiente manera:

    1. En la carpeta principal 'spacial-station' agregar un archivo 'proxy.conf.json' con el siguiente contenido: _{ "/api/*": { "target": "http://localhost:3000", "secure": false, "logLevel": "debug" } }_
    2. Editar el script 'start' del package.json de forma que quede "ng serve --proxi-conf proxy.conf.json"
    3. En el archivo angular.json dirigirse a projects -> spacial-station -> architect -> serve, en la propiedad 'options' (si no se encuentra, agregarla) agregar la propiedad 'proxyConfig' con el valor 'proxy.conf.json'.
    4. En el servicio _NaveService_, editar la url del endpoint, removiendo _http://localhost:3000_ y dejando solo _/api_.
    
Una vez seguidos estos pasos debería ser posible desplegar localmente el servidor y el cliente. Para desplegar el servidor debes dirigirte a la carpeta 'backend' y ejecutar desde la consola *node index.js*. Para desplegar el cliente, te puedes ubicar en la carpeta 'spacial-station' y ejecutar en consola el comando *ng serve -o*.
