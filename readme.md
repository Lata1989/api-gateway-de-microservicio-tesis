#API Gateway
El API Gateway centraliza y distribuye todas las solicitudes del cliente hacia los microservicios correspondientes en la aplicación ColApp. Su principal función es actuar como un punto único de entrada, manejando la autenticación y la redirección de solicitudes.

#Requisitos
Node.js: Asegúrate de tener Node.js instalado. Si no lo tienes, puedes descargarlo desde aquí.

#Instalación
Clona este repositorio en tu máquina local:

git clone <repositorio-url>
cd api-gateway

Instala las dependencias necesarias:

npm install
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

env

PORT=5000
AUTH_SERVICE_URL=http://localhost:5001
CLIENT_SERVICE_URL=http://localhost:5002
QUEUE_SERVICE_URL=http://localhost:5003
JWT_SECRET=<tu-secreto-jwt>

Estructura del proyecto

api-gateway/
├── controllers/
│   └── authController.js     # Redirecciona solicitudes de autenticación
├── middlewares/
│   └── validateToken.js      # Middleware para validar JWT
├── routes/
│   └── authRoutes.js         # Rutas para autenticación
├── services/
│   └── serviceProxy.js       # Lógica para conectar con los microservicios
├── utils/
│   └── generateToken.js      # Utilidad para generar JWT
├── index.js                  # Servidor principal del API Gateway
└── package.json              # Dependencias del API Gateway


Rutas disponibles

1. GET /
Verifica que el API Gateway esté corriendo correctamente.

Respuesta:

{
  "message": "¡API Gateway está funcionando!"
}

2. /auth (Redirige solicitudes de autenticación)
POST /auth/register: Redirige al servicio de autenticación para registrar un usuario.
POST /auth/login: Redirige al servicio de autenticación para iniciar sesión.
GET /auth/profile: Valida el token y redirige al servicio de autenticación para obtener el perfil del usuario.

3. Otras rutas protegidas
Puedes extender el API Gateway para proteger y redirigir rutas específicas hacia otros microservicios (clientes, colas, etc.).

Ejemplo:

/clients/*: Redirige solicitudes hacia el microservicio de gestión de clientes.
/queue/*: Redirige solicitudes hacia el microservicio de colas.

Iniciar el servidor

Asegúrate de haber configurado correctamente el archivo .env. Luego, ejecuta el siguiente comando:

npm start

El servidor se iniciará en el puerto configurado (por defecto, 5000).

Contribución
Si deseas contribuir a este proyecto:

1 - Haz un fork del repositorio.
2 - Crea una rama para tus cambios: git checkout -b feature/nueva-funcionalidad.
3 - Realiza tus cambios y haz commit: git commit -m 'Nueva funcionalidad añadida'.
4 - Sube tus cambios: git push origin feature/nueva-funcionalidad.
5 - Abre un pull request.

# Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.