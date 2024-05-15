# Usa una imagen de Node.js como base
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json e instala las dependencias
COPY . .
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Expone el puerto 3001
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["node", "src/app.js"]