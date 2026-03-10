import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

it("renders with accessible name", () => {
  render(<Button>Open profile</Button>);
  expect(screen.getByRole("button", { name: "Open profile" })).toBeInTheDocument();
});

it("defaults to button type for non-form actions", () => {
  render(<Button>Open profile</Button>);
  expect(screen.getByRole("button", { name: "Open profile" })).toHaveAttribute("type", "button");
});

it("renders as link when using asChild", () => {
  render(
    <Button asChild>
      <a href="/portfolio">Open profile</a>
    </Button>
  );

  expect(screen.getByRole("link", { name: "Open profile" })).toHaveAttribute("href", "/portfolio");
});

it("has no critical accessibility violations", async () => {
  const { container } = render(<Button>Open profile</Button>);
  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
});

it("keeps semantic link output when used asChild", async () => {
  const { container } = render(
    <Button asChild variant="secondary">
      <a href="/portfolio">Open profile</a>
    </Button>
  );

  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
});
