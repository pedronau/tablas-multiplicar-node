import { argumentos } from "./plugins/args.plugin";
import { crearTabla } from "./plugins/create-table.plugin";

function main() {
  const { n: numero, l: limite, name: nombre, d: destino } = argumentos;

  const tabla = crearTabla({ numero, limite });
  console.log(tabla);
}

main();
