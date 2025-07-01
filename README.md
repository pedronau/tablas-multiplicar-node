# Generador de tablas de multiplicar en Node.js

Aprendiendo Node.js y mi primer acercamiento con el testing. 
Aplicación muy simple de consola en la que le introduces unos parámetros e imprime la tabla de multiplicar del número que le pidas y lo guarda en un archivo .txt

Escrita totalmente en TypeScript.

## Instrucciones

1. Clonar el repositorio

2. Instalar dependencias con el comando "npm install"

3. Iniciar el proyecto con el comando "npm run dev"

Esto nos mostrará una serie de comandos que podemos introducir para poder interactuar con el programa:

- n: Numero del que vamos a sacar su tabla de multiplicar.
- l: Rango de la tabla de multiplicar
- name: Nombre del archivo .txt que vamos a crear
- d: Destino del archivo .txt que vamos a crear

Comando de ejemplo a introducir: "npx ts-node src/app.ts -n 5"

## Aspectos aprendidos con este ejercicio

- Trabajar con parametros gracias a la librería "yargs".
- Poder instalar y trabajar con TypeScript en Node.
- Separación de prioridades usando "import" y "export". Para separar todo en distintos archivos.
- Trabajar con el paquete nativo "fs" de Node y así poder leer y escribir archivos.