import { render, fireEvent } from "@testing-library/react";
import GetUsers from "./components/GetUsers";

test("Check if State is null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("Check table data legth zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

it("API Testing for Get Table Data", async function () {
  const component = new GetUsers();
  const apiResponse = await component.getApi();
  console.warn(await component.getApi());
  expect(apiResponse.statusText).toEqual("OK");
});

//  ----------- Test 8 -------------

// it("Renders Table Correctly: ", async () => {
//   const { getByTestId } = render(<loginPage />);
//   expect(getByTestId("email")).toHaveTextContent("Email");
// });
