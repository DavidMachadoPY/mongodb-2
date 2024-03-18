db.createCollection("users");

db.users.insert(
    [
        {
          "nombre": "Juan",
          "apellido": "Perez",
          "correo": "juan@example.com",
          "edad": 25,
          "pais": "Mexico",
          "ciudad": "New York",
          "salario": 2500,
          "altura": 170,
          "peso": 160
        },
        {
          "nombre": "Maria",
          "apellido": "Garcia",
          "correo": "maria@example.com",
          "edad": 35,
          "pais": "Mexico",
          "ciudad": "Bogotá",
          "salario": 3000,
          "altura": 160,
          "peso": 140
        },
        {
          "nombre": "Pedro",
          "apellido": "Lopez",
          "correo": "pedro@example.com",
          "edad": 40,
          "pais": "Estados Unidos",
          "ciudad": "London",
          "salario": 4000,
          "altura": 180,
          "peso": 180
        },
        {
          "nombre": "Ana",
          "apellido": "Martinez",
          "correo": "ana@example.com",
          "edad": 20,
          "pais": "Australia",
          "ciudad": "New York",
          "salario": 6000,
          "altura": 175,
          "peso": 190
        },
        {
          "nombre": "John",
          "apellido": "Doe",
          "correo": "john@example.com",
          "edad": 55,
          "pais": "Canada",
          "ciudad": "Toronto",
          "salario": 3500,
          "altura": 185,
          "peso": 200
        },
        {
          "nombre": "Pedro",
          "apellido": "Doe",
          "correo": "ejemplo@riwi.es",
          "edad": 55,
          "pais": "Canada",
          "ciudad": "Toronto",
          "salario": 3500,
          "altura": 185,
          "peso": 200
        },
        {
          "nombre": "Pedro",
          "apellido": "Guevara",
          "correo": "otro@riwi.net",
          "edad": 55,
          "pais": "Canada",
          "ciudad": "Toronto",
          "salario": 3500,
          "altura": 185,
          "peso": 200
        }
    ]
)

db.users.find()

db.users.drop()

// Incrementar el salario de todos los usuarios en un 10%.

db.users.updateMany({}, { $mul : {salario : 1.10 }});

// Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".

db.users.update({ciudad : "New York"}, { $set : {cuidad : "Los Ángeles"}} );

// Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".

db.users.update({ $and : [{nombre: "Juan"}, {apellido : "Perez"}]}, { $set : {email : "nuevo@riwi.com"} });

// Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.

db.users.update({ correo : "ejemplo@riwi.es" },{ $set : {edad : 35 }});

// Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

db.users.update({ pais : "Mexico"}, { $set : {pais : "Canada"}} );

// Aumentar la altura de todos los usuarios en 5 centímetros.

db.users.update({}, { $inc : {altura : 5 }});

// Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".

db.users.update({ correo : "otro@riwi.net"}, { $set : {apellido : "González"}} );

// Actualizar el peso del usuario con nombre "Maria" a 140 libras.

db.users.update({ nombre : "Maria"}, { $set : { peso : "140"}} );

// Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.

db.users.update({ pais : "Estados Unidos"}, { $inc : {salario : 0.15 }});

// Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".

db.users.update({ nombre : "Pedro"}, { $set : { correo : "nuevo_correo@riwi.co"}} );

// Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

db.users.update({edad : {$lt : 30}}, { $set : {edad : 30}} );

// Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.

db.users.update({ salario : {$lt : 3000}} , {$inc : {salario : 0.20}})

// Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".

db.users.update({ ubicacion : "Bogotá"}, { $set : { ubicacion : "Medellín"}} );

// Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".

db.users.update({salario : {$gt : 5000}}, { $set : {pais : "Australia"}})

// Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.

db.users.updateMany({edad : {$gt : 49}}, { $inc : {edad : -5}} );

// Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.

db.users.updateMany({peso : {$gt : 200}}, { $set : {peso : 180}} );

// Incrementar el salario de los usuarios que viven en "London" en un 25%.

db.users.updateMany({ubicacion : "London"}, { $mul : {salario : 1.25}});

// Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".

db.users.updateMany({salario : {$gt : 4000}}, { $set : {apellido : "Smith"}});

// Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".

db.users.updateMany({nombre: {$regex: "^A"}}, {$set : { correo : "nuevo@riwi.es"}});

// Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".

db.users.updateMany({altura: {$lt : 160}}, {$set : { cuidad : "París"}});


db.users.find()

// Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.

db.users.delete({salario: {$lt : 2600}});

// Eliminar usuarios que tienen una edad menor que 25 años.

db.users.deleteMany({edad: {$lt : 25}});

// Borrar todos los usuarios que viven en "París".

db.users.deleteMany({ubicacion: "París"});

// Eliminar usuarios que tienen un peso superior a 180 libras.

db.users.deleteMany({peso: {$gt : 180}});

// Eliminar usuarios que tienen una altura inferior a 160 centímetros.

db.users.deleteMany({altura: {$lt : 160}});

// Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".

db.users.deleteMany({nombre: "John", apellido: "Doe"});

// Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".

db.users.deleteMany({correo: "borrar@riwi.com"});

// Eliminar usuarios que no tienen una dirección de correo electrónico registrada.

db.users.deleteMany({correo: {$exists: false}});

// Eliminar usuarios que viven en "Tokyo".

db.users.deleteMany({ubicacion: "Tokyo"});

// Borrar todos los usuarios que son menores de 18 años.

db.users.deleteMany({edad: {$lt : 18}});

// Eliminar usuarios que tienen un salario igual a 0.

db.users.deleteMany({salario: 0});

// Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

db.users.deleteMany({ubicacion: "New York", salario: {$gt : 5000}});

// Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".

db.users.deleteMany({correo: {$regex: /spam/i}});

// Borrar usuarios que viven en "Bello" y tienen más de 50 años.

db.users.deleteMany({ubicacion: "Bello", edad: {$gt : 50}});

// Eliminar todos los usuarios que tienen el apellido "González".

db.users.deleteMany({apellido: "González"});

// Borrar usuarios que tienen una edad superior a 70 años.

db.users.deleteMany({edad : {$gt : 70}})

// Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.

db.users.deleteMany({pais: "Canadá", salario: {$lt : 4000}});

// Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.

db.users.deleteMany({salario: {$gt : 1000, $lt : 2000}});

// Eliminar usuarios que tienen una edad igual a 30 años.

db.users.deleteMany({edad: 30});

// Borrar usuarios que tienen una altura superior a 190 centímetros.

db.users.deleteMany({altura: {$gt : 190}});

