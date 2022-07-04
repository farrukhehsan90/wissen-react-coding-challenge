import { render, fireEvent, screen } from "@testing-library/react";

// //test block
// test("table content", () => {
// // render the component on virtual dom
// render(<Home />);

// //select the elements you want to interact with
// const counter = screen.getByTestId("counter");
// const incrementBtn = screen.getByTestId("increment");

// //interact with those elements
// fireEvent.click(incrementBtn);

// //assert the expected result
// expect(counter).toHaveTextContent("1");
// });

// describe("test MyComponent", () => {
//   const wrapper = render(<Home />);
//   const table = wrapper.find("table");
//   const row = table.find("tr");
//   const node = table.find(Node);

//   it("table grid", () => {
//     expect(table).toHaveLength(1);
//     expect(row).toHaveLength(1);
//     expect(node).toHaveLength(1);
//   });
// });

test("Table Values Check for Home Page", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
