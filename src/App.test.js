import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const {asFragment} = render(<App />);
//   // const linkElement = screen.getByText(/Female/i);
//   const linkElement = screen.getByText(/main/i);

//   expect(linkElement).toBeInTheDocument();
//   expect(asFragment(<App/>)).toMatchSnapshot();
// });

describe("App", () => {
  it("render App component", async () => {
    const {asFragment} = render(<App/>);
    // expect(asFragment(<App/>)).toMatchSnapshot();
    // expect(screen.queryByText(/request111/i)).toBeNull();
    // expect(await screen.findByText(/request111/i)).toBeInTheDocument();
    // expect(await screen.findByText(/yyy/i)).toBeInTheDocument();
    // screen.getAllByAltText(/product/i).forEach(item => expect(item).toHaveClass("img"))
  });
});