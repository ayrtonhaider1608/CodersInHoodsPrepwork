const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW

//coercedUserValue
const targetMatchesCoercedUserValue = target == userValue;

//strictEquality
const targetMatchesUserValue = target === userValue;

//BangOperator
const passwordMatchesConfirmation = password === passwordConfirmation;

//ifStatement
let passwordMessage = 'Oops, your password and confirmation do not match!';
if (password === passwordConfirmation){
    passwordMessage;
};

//ifStatement
const fruits = 'banana, cherry, watermelon';
fruits == sortOrder;

describe("coerced equality: ==", () => {
  test("targetMatchesCoercedUserValue is true", () => {
    expect(targetMatchesCoercedUserValue).toBeDefined();
    expect(targetMatchesCoercedUserValue).toBe(true);
  });
});

describe("strict equality: ===", () => {
  test("targetMatchesUserValue is false", () => {
    expect(targetMatchesUserValue).toBeDefined();
    expect(targetMatchesUserValue).toBe(false);
  });
  test("passwordMatchesConfirmation is false", () => {
    expect(passwordMatchesConfirmation).toBeDefined();
    expect(passwordMatchesConfirmation).toBe(false);
  });
});

describe("if statements", () => {
  test('passwordMessage is "Oops, your password and confirmation do not match!"', () => {
    expect(passwordMessage).toBeDefined();
    expect(passwordMessage).toBe(
      "Oops, your password and confirmation do not match!"
    );
  });
  test('fruits is "banana, cherry, watermelon" because sortOrder is "ALPHABETICAL"', () => {
    expect(fruits).toBeDefined();
    expect(fruits).toBe("banana, cherry, watermelon");
  });
});
