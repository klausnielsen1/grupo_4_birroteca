module.exports = {
  "development": { //base de datos de desarrollo 
    "username": "root",
    "password": null,
    "database": "birroteca",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": { //base de datos de prueba
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": { //base de datos para producción
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
