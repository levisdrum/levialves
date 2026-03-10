import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

it("renders with accessible name", () => {
  render(<Button>Open profile</Button>);
  expect(screen.getByRole("button", { name: "Open profile" })).toBeInTheDocument();
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
