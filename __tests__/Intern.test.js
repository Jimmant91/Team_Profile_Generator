const Intern = require("../lib/Intern");

// Intern should have a school parameter in constructor
test("Can set school via constructor", () => {
  const testValue = "UNC";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

// getRole should return "Intern"
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UNC");
  expect(e.getRole()).toBe(testValue);
});

// getSchool should return school
test("Can get school via getSchool()", () => {
  const testValue = "UNC";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});