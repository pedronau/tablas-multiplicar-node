interface CrearTablaOpciones {
  numero: number;
  limite?: number;
}

export function crearTabla({
  numero,
  limite = 10,
}: CrearTablaOpciones): string {
  const headerTabla = `
==================================
        Tabla del ${numero}
==================================\n
`;
  let cuerpoTabla = "";

  for (let i = 0; i <= limite; i++) {
    cuerpoTabla += `${numero} x ${i} = ${numero * i}\n`;
  }

  return headerTabla + cuerpoTabla;
}
