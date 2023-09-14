# MICROSERVICIO

Esta es una API de ejemplo que utiliza Node.js y MongoDB para realizar diversas consultas. A continuación, se describen las rutas disponibles y sus funcionalidades.

## Profe las relacionales me salieron mal, fue un gusto conocerlo😰

## Endpoints

### 1. `/holi` (GET)

- **Descripción**: Retorna un mensaje simple.
- **Uso**: Esta ruta simplemente devuelve el mensaje "Somos CL" como respuesta.

### 2. `/ejercicio1` (GET)

- **Descripción**: Obtiene una lista de documentos de la colección "Usuario" y los ordena alfabéticamente por el atributo "nombre".
- **Uso**: Esta ruta se utiliza para obtener una lista de usuarios desde la base de datos y ordenarlos por nombre antes de responder con la lista ordenada.

### 3. `/citasPorFecha` (GET)

- **Descripción**: Realiza una consulta más compleja que combina datos de la colección "Citas" y "Usuario" para obtener citas específicas por fecha y ordenarlas por el nombre del paciente.
- **Uso**: Esta ruta se utiliza para obtener citas programadas para una fecha específica y organizarlas por el nombre del paciente antes de enviar la respuesta.

### 4. `/medicosPorEspecialidad/:especialidadId` (GET)

- **Descripción**: Encuentra y devuelve una lista de médicos que tienen una especialidad específica basada en el ID de especialidad proporcionado como parámetro.
- **Uso**: Esta ruta se utiliza para buscar médicos por especialidad utilizando el ID de especialidad proporcionado como parámetro en la URL.

### by Valentina Perez Fonseca 😭
