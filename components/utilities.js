const phoneUtil =
  require("google-libphonenumber").PhoneNumberUtil.getInstance();

export function getReadablePhoneNumber(phoneNumber) {
  try {
    const parsedNumber = phoneUtil.parseAndKeepRawInput(phoneNumber, "US");
    const countryCode = parsedNumber.getCountryCode();
    const nationalNumber = parsedNumber.getNationalNumber();

    const formattedNumber = `(+${countryCode}) ${nationalNumber
      .toString()
      .slice(0, 3)}-${nationalNumber.toString().slice(3, 6)}-${nationalNumber
      .toString()
      .slice(6)}`;

    return formattedNumber;
  } catch (error) {
    console.log("Error formatting phone number:", error.message);
    return phoneNumber; // returning the original number in case of an error
  }
}
