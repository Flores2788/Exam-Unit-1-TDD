import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {

    if (typeof name !== 'string') return null;
    name = name.trim();
    if (!name) return '';
    if (/[^a-zA-Z\s]/.test(name)) return null;
    name = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  
    return name;
  }
  

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

test("test1").isEqual(formatName("john doe"), "John Doe", "john doe => John Doe");
test("test2").isEqual(formatName("john"), "John", "john => John");
test("test3").isEqual(formatName("john1   doe2"), "John Doe", "john   doe => John Doe");


//#endregion