import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const argumentos = yargs(hideBin(process.argv))
  .option("n", {
    alias: "numero",
    type: "number",
    demandOption: true,
    describe: "numero del que vamos a sacar su tabla de multiplicar",
  })
  .option("l", {
    alias: "limite",
    type: "number",
    default: 10,
    describe: "rango de la tabla de multiplicar",
  })
  .option("h", {
    alias: "nombre",
    type: "string",
    default: "tabla-multiplicar",
    describe: "nombre del archivo que vamos a guardar",
  })
  .option("d", {
    alias: "destino",
    type: "string",
    default: "outputs",
    describe: "destino del archivo que vamos a crear",
  })
  .check((argv) => {
    if (argv.n < 1) {
      throw new Error("Error: el numero debe ser mayor que 0") ;
    } else {
      return true;
    }
  })
  .parseSync();
