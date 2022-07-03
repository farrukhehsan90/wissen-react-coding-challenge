import { render, fireEvent } from "@testing-library/react";
import LoginPage from "../src/components/Login";
import { login } from "./redux/actions/auth";

// --------------- Test 1 --------------------

// test("Check Login API", () => {
//   const { container } = render(<LoginPage />);
//   expect(container.innerHTML).toMatchInlineSnapshot();
// });

// // ------------ Test 2 -----------

test("Table Values Assignment for Home Page", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// // -------------- Test 4 -----------------

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//  ----------- Test 8 -------------

// it("Renders Table Correctly: ", async () => {
//   const { getByTestId } = render(<loginPage />);
//   expect(getByTestId("email")).toHaveTextContent("Email");
// });
