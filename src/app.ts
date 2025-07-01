import { argumentos } from "./plugins/args.plugin";
import { crearArchivo } from "./plugins/crear-archivo.plugin";
import { crearTabla } from "./plugins/crear-tabla.plugin";

function main() {
  const { n: numero, l: limite, h: nombre, d: destino } = argumentos;
  const tabla = crearTabla({ numero, limite });
  const archivo = crearArchivo({ tabla, destino, nombre });

  if (archivo) {
    console.log(tabla);
    console.log("Archivo  " + nombre + " creado correctamente en la carpeta: " + destino);
  } else {
    console.error("Ha ocurrido un error inesperado al crear el archivo...");
  }
}

main();

//TODO: implementar el testing automatico
