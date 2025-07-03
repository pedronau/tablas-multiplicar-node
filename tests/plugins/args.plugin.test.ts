import { describe, expect, test } from "@jest/globals";

const comando = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { argumentos } = await import("../../src/plugins/args.plugin");
  return argumentos;
};

describe("args.plugin.ts", () => {
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
});
