const { getReadablePhoneNumber } = require("../components/utilities.js");
import "@testing-library/jest-dom";
describe("getReadablePhoneNumber", () => {
  it("should format the phone number correctly", () => {
    const testCases = [
      { input: "+19254527483", expectedOutput: "(+1) 925-452-7483" },
      { input: "+919254527483", expectedOutput: "(+91) 925-452-7483" }, //Indian number
      { input: "9254527483", expectedOutput: "(+1) 925-452-7483" }, //US number without country code
    ];

    testCases.forEach(({ input, expectedOutput }) => {
      const formattedNumber = getReadablePhoneNumber(input);
      expect(formattedNumber).toBe(expectedOutput);
      if (formattedNumber) {
        expect(formattedNumber).toMatchSnapshot();
      }

      console.log("Input Number ", input);
      console.log("Expected output ", expectedOutput);
      console.log("Formatted Number - ", formattedNumber);
    });
  });

  it("should return the original number for invalid input", () => {
    const invalidInput = "invalid";
    const result = getReadablePhoneNumber(invalidInput);
    expect(result).toBe(invalidInput);
  });
});

