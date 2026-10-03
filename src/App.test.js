import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div>{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}), { virtual: true });

jest.mock("swiper/modules", () => ({
  Navigation: {},
  Pagination: {},
  Autoplay: {},
  EffectFade: {},
  Thumbs: {},
}), { virtual: true });

jest.mock("swiper/css", () => ({}), { virtual: true });
jest.mock("swiper/css/navigation", () => ({}), { virtual: true });
jest.mock("swiper/css/pagination", () => ({}), { virtual: true });

test("renders the homepage hero", async () => {
  render(<App />);
  const headingElement = await screen.findByText(
    /Brisbane Demolition Services for Homes, Builders and Commercial Sites/i,
    {},
    { timeout: 2500 }
  );
  expect(headingElement).toBeInTheDocument();
});
