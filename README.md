
# REST API con Typescript y Express

## Descripción
Este proyecto consiste en el desarrollo de una API REST utilizando TypeScript y Express. Estas tecnologías permiten construir una aplicación web robusta y escalable, con un enfoque modular y un código más legible y mantenible.

### Características principales:

- Rutas de API: La API cuenta con un conjunto de rutas definidas para manejar las solicitudes de los clientes. Estas rutas se configuran utilizando Express y se implementan en TypeScript para aprovechar los beneficios de tipado estático.

- Configuración de MongoDB: La API se integra con una base de datos MongoDB utilizando un ORM (Object-Relational Mapping) compatible con TypeScript, lo que facilita la interacción con la base de datos y mejora la eficiencia en la manipulación de datos.

- Controladores: Los controladores son responsables de manejar las solicitudes HTTP y procesar la lógica de negocio correspondiente. En este proyecto, se han implementado controladores utilizando TypeScript y Express para garantizar un manejo eficiente de las solicitudes y respuestas.

- Modelos y Servicios: Se han definido modelos y servicios que representan la estructura de los datos y las operaciones relacionadas con ellos. Los modelos permiten mapear los documentos de la base de datos a objetos TypeScript, mientras que los servicios encapsulan la lógica de acceso a la base de datos y ofrecen una interfaz sencilla para interactuar con ellos.

- Middleware Node: Se han utilizado middlewares en Node.js para realizar tareas como validación de datos, gestión de errores, registro de solicitudes, entre otros. Estos middlewares proporcionan una capa adicional de funcionalidad a nivel de servidor y mejoran la modularidad del código.

- Autenticación y JSON Web Token (JWT): La API implementa un sistema de autenticación basado en JSON Web Tokens (JWT). Los usuarios pueden autenticarse utilizando credenciales válidas y recibir un token que deben incluir en las solicitudes posteriores para acceder a rutas protegidas.

- Protección de rutas con sesión: Se han implementado mecanismos para proteger rutas específicas y restringir el acceso solo a usuarios autenticados. Esto garantiza la seguridad y la privacidad de los datos sensibles


## Authors

- [@emimontanari](https://github.com/emimontanari)
