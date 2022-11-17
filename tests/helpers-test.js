const { format_date } = require("../utils/helpers");
test("format_date() returns a date string", () => {
  const date = new Date("2022-11-17 09:35:04");
  expect(format_date(date)).toBe("11/17/2022");
});
