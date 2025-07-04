import { describe, expect, test } from "@jest/globals";
import { crearTabla } from "../../src/plugins/crear-tabla.plugin";

describe("Test crear-tabla.plugin.ts", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("debe crear una tabla con el limite por defecto", () => {
    const numeroTest = 5;
    const tablaTest = crearTabla({ numero: numeroTest });

    expect(typeof tablaTest).toBe("string");
    expect(tablaTest).toContain(`Tabla del ${numeroTest}`);
    expect(tablaTest).toContain(`${numeroTest} x 1 = ${numeroTest}`);
    expect(tablaTest).toContain(`${numeroTest} x 10 = ${numeroTest * 10}`);
  });

  test("debe crear una tabla con los valores personalizados", () => {
    const numeroTest = 8;
    const limiteTest = 30;
    const tablaTest = crearTabla({ numero: numeroTest, limite: limiteTest });

    expect(typeof tablaTest).toBe("string");

    expect(tablaTest).toContain(`Tabla del ${numeroTest}`);
    expect(tablaTest).toContain(`${numeroTest} x 1 = ${numeroTest}`);
    expect(tablaTest).toContain(
      `${numeroTest} x ${limiteTest} = ${numeroTest * limiteTest}`
    );
  });

  test("debe tener tantos saltos de linea como al menos limiteTest", () => {
    const numeroTest = 14;
    const limiteTest = 21;
    const tablaTest = crearTabla({ numero: numeroTest, limite: limiteTest });
    const saltosLinea = tablaTest.match(/\n/g);

    expect(saltosLinea?.length).toBeGreaterThanOrEqual(limiteTest);
  });
});
