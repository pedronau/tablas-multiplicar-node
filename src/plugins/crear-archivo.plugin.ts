import fs from "fs";

interface CrearArchivoOpciones {
  tabla: string;
  destino?: string;
  nombre?: string;
}

export function crearArchivo({
  tabla,
  destino = "outputs",
  nombre = "tabla",
}: CrearArchivoOpciones): boolean {
  try {
    fs.mkdirSync(destino, { recursive: true });
    fs.writeFileSync(`${destino}/${nombre}.txt`, tabla);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
