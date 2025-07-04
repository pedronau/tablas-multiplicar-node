import { describe, expect, test } from "@jest/globals";

const comando = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { argumentos } = await import("../../src/plugins/args.plugin");
  return argumentos;
};

describe("Test args.plugin.ts", () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("debe retornar los valores por defecto", async () => {
    const argumentos = await comando(["-n", "5"]);

    expect(argumentos).toEqual(
      expect.objectContaining({
        n: 5,
        l: 10,
        h: "tabla-multiplicar",
        d: "outputs",
      })
    );
  });

  test("debe retornar valores personalizados", async () => {
    const nombreArchivoTest = "tabla-test";
    const nombreCarpetaTest = "carpeta-test";

    const opcionesPersonalizadas = [
      "-n",
      "7",
      "-l",
      "25",
      "-h",
      nombreArchivoTest,
      "-d",
      nombreCarpetaTest,
    ];

    const argumentos = await comando(opcionesPersonalizadas);

    expect(argumentos).toEqual(
      expect.objectContaining({
        n: 7,
        l: 25,
        h: nombreArchivoTest,
        d: nombreCarpetaTest,
      })
    );
  });
});
