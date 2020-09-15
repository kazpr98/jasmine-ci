describe("calculator.js", () => {
  describe("Calculator", () => {
    let calculator;
    let calculator2;
    beforeEach(() => {
      calculator = new Calculator();
      calculator2 = new Calculator();
    });
    afterEach(() => {});
    it("can be instatiated", () => {
      jasmine.addMatchers(customMatchers);

      expect(calculator).toBeCalculator();
      expect(calculator).toBeTruthy();
      expect(calculator2).toBeTruthy();
      expect(calculator).toEqual(calculator2);
      expect(calculator.constructor.name).toContain("Calc");
    });

    it("instantiates unique object", () => {
      expect(calculator).not.toBe(calculator2);
    });

    it("has common operations", () => {
      expect(calculator.add).toBeDefined();
      expect(calculator.substract).toBeDefined();
      expect(calculator.multiply).toBeDefined();
      expect(calculator.divide).toBeDefined();
    });

    it("can overwrite total", () => {
      calculator.total = null;
      expect(calculator.total).toBeNull();
    });
    describe("add()", () => {
      it("should add a number to total", () => {
        calculator.add(5);
        expect(calculator.total).toBe(5);
      });
      it("returns total", () => {
        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch("number");
        expect(calculator.total).toEqual(jasmine.anything());
      });
    });
    describe("subtract()", () => {
      it("should subtract a number to total", () => {
        calculator.total = 30;
        calculator.substract(5);
        expect(calculator.total).toBe(25);
      });
    });

    describe("multiply()", () => {
      it("should multiply total by number", () => {
        calculator.total = 2;
        calculator.multiply(2);
        expect(calculator.total).toBe(4);
      });
      it("does not handle NaN", () => {
        calculator.total = 20;
        calculator.multiply("a");

        expect(calculator.total).toBeNaN();
      });
    });

    describe("divide()", () => {
      it("should divide total by number", () => {
        calculator.total = 30;
        calculator.divide(2);
        expect(calculator.total).toBe(15);
      });
      it("handles divide by zero", () => {
        expect(function () {
          calculator.divide(0);
        }).toThrow();
        expect(function () {
          calculator.divide(0);
        }).toThrowError(Error);
        expect(function () {
          calculator.divide(0);
        }).toThrowError(Error, "Cannot divide by zero");
      });
    });
    describe("get version", () => {
      it("fetches version from extenal source", (done) => {
        spyOn(window, "fetch").and.returnValue(
          Promise.resolve(new Response('{"version" : "0.1"}'))
        );
        calculator.version.then((version) => {
          expect(version).toBe("0.1");
          done();
        });
      });
    });
  });
});
