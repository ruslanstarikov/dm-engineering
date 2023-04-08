import { Validator } from "../src/Validator";
describe("Validator", () => {
    test("Validating object with name 'A' and valid description returns true", () => {
        const obj = {
            topic: "A",
            name: "a",
            description: "Valid description"
        };
        const validator = new Validator(obj);

        expect(validator.validate(obj)).toBe(true);
    });

    test("Validating object with name 'A' and description too short returns false", () => {
        const obj = {
            topic: "A",
            name: "a",
            description: "Invalid"
        };
        const validator = new Validator(obj);

        expect(validator.validate(obj)).toBe(false);
    });

    test("Validating object with name 'A' and description too long returns false", () => {
        const longDescription = 'x'.repeat(100); // it will be 101 characters
        const obj = {
            topic: "A",
            name: "a",
            description: longDescription
        };
        const validator = new Validator(obj);

        expect(validator.validate(obj)).toBe(false);
    });

    test("Validating object with name 'A' and wrong name returns false", () => {
        const obj = {
            topic: "A",
            name: "b",
            description: 'Valid description'
        };
        const validator = new Validator(obj);

        expect(validator.validate(obj)).toBe(false);
    });

    test("Validating object with name 'B' and valid description returns true", () => {
        const obj = {
            topic: "B",
            name: "x",
            description: "Valid description"
        };
        const validator = new Validator(obj);

        expect(validator.validate(obj)).toBe(true);
    });

    test("Validating object with name 'B' and description too long returns false", () => {
        const longDescription = 'x'.repeat(40);
        const obj = {
            topic: "B",
            name: "x",
            description: longDescription
        };
        const validator = new Validator(obj);

        expect(validator.validate(obj)).toBe(false);
    });

    test("Validating object with name 'B' and wrong name returns false", () => {
        const obj = {
            topic: "B",
            name: "b",
            description: 'Valid description'
        };
        const validator = new Validator(obj);

        expect(validator.validate(obj)).toBe(false);
    });

    test("Validating object with unknown topic must throw an unknown strategy error", () => {
        const obj = {
            topic: "C",
            name: "c",
            description: 'Valid description'
        };
        expect(() => {
            new Validator(obj)
        }).toThrow('Validation strategy is not available. Strategy: C');
    });

    test("Validating object with no topic must return malformed input error ", () => {
        const obj = {
            name: "c",
            description: 'Valid description'
        };
        expect(() => {
            new Validator(obj)
        }).toThrow('Malformed input');
    });
});