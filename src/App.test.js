import { fireEvent, render, screen } from '@testing-library/react';
import Reservations from './Reservations';



test('Renders label texts and input field attributes in the Reservations component', () => {
  render(<Reservations />);
  const headingElement = screen.getByText(/Book your table/)
  expect(headingElement).toBeInTheDocument();

  const labelElement1 = screen.getByText(/Choose date/)
  expect(labelElement1).toBeInTheDocument();

  const labelElement2 = screen.getByText(/Choose time/)
  expect(labelElement2).toBeInTheDocument();

  const labelElement4 = screen.getByText(/Number of guest/)
  expect(labelElement4).toBeInTheDocument();

  const input1 = screen.getByPlaceholderText("mm/dd/yyyy")
  expect(input1).toHaveAttribute("type", "date");

  const input2 = screen.getByTestId("res-time")
  expect(input2).toBeRequired();
  expect(input2).toHaveAttribute("name", "choose time");

  const input3 = screen.getByTestId("occasion")
  expect(input3).toHaveAttribute("aria-invalid", "true");
  expect(input3).toBeRequired();

  const input4 = screen.getByPlaceholderText("0")
  expect(input4).toHaveAttribute("min", "0");
  expect(input4).toHaveAttribute("aria-required", "true");
  expect(input4).toBeRequired();
});

test("User is able to submit the form with valid data", () => {
  var date = "2024-07-29";
  var availabletimes = "20:00";
  var guests = "3";
  var occasion = "Anniversary";
  const handleSubmit = jest.fn();
  render(<Reservations onSubmit={handleSubmit} />);

  /* both methods are true */

  /*const firstInput = screen.getByPlaceholderText("mm/dd/yyyy"); */
  const firstInput = screen.getByLabelText(/Choose date/);
  fireEvent.change(firstInput, { target: { value: date }});

  /*const secondInput = screen.getByTestId("res-time");*/
  const secondInput = screen.getByLabelText(/Choose time/);
  fireEvent.change(secondInput, { target: { value: availabletimes }});

  /*const thirdInput = screen.getByPlaceholderText("0"); */
  const thirdInput = screen.getByLabelText(/Number of guests/);
  fireEvent.change(thirdInput, { target: { value: guests }});

  /*const fourthInput = screen.getByTestId("occasion");*/
  const fourthInput = screen.getByLabelText(/Occasion/);
  fireEvent.change(fourthInput, { target: { value: occasion }});
  
  const submitButton = screen.getByRole("button");

  expect(submitButton).toBeEnabled();
 /* expect(handleSubmit).toHaveBeenCalled(); */
});

test("User is unable to submit the form with invalid data", () => {
  var date = {
    value3: "2024-05-15",
    istouched3: true
}
  var availabletimes = {
    value6: "00:00",
    istouched6: true
}
  var guests = {
    value4: 0,
    istouched4: true
  }
  var occasion = {
    value5: "Occasion",
    istouched5: true
}
  const handleSubmit = jest.fn();
  render(<Reservations onSubmit={handleSubmit} />);

  const firstInput = screen.getByLabelText(/Choose date/);
  fireEvent.change(firstInput, { target: { value: date.value3 }});

  const secondInput = screen.getByLabelText(/Choose time/);
  fireEvent.change(secondInput, { target: { value: availabletimes.value6 }});

  const thirdInput = screen.getByLabelText(/Number of guests/);
  fireEvent.change(thirdInput, { target: { value: guests.value4 }});

  const fourthInput = screen.getByLabelText(/Occasion/);
  fireEvent.change(fourthInput, { target: { value: occasion.value5 }});

  const submitButton = screen.getByRole("button");

  expect(submitButton).toBeDisabled();
  /*expect(handleSubmit).not.toHaveBeenCalled(); */
});
