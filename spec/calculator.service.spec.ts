import { CalculatorService } from "../calculator.service";

describe("CalculatorService", () => {
    let calculatorService: CalculatorService;

    beforeEach(() => {
        calculatorService = new CalculatorService();
    });

    it("should initialize successfully", () => {
        expect(calculatorService).toBeTruthy();
    });

    it("should add two numbers successfully", () => {
        expect(calculatorService.add(2, 2)).toBe(4);
    });

    it("should subtract two numbers successfully", () => {
        expect(calculatorService.subtract(2, 2)).toBe(0);
    });

    it("should multiply two numbers successfully", () => {
        expect(calculatorService.multiply(4, 2)).toBe(8);
    });
});
