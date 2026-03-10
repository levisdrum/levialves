import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

it("renders badge content", () => {
  render(<Badge>Token</Badge>);
  expect(screen.getByText("Token")).toBeInTheDocument();
});

it("supports subtle variant", () => {
  render(<Badge variant="subtle">Metadata</Badge>);
  expect(screen.getByText("Metadata")).toHaveClass("DSLEVIS-ui-badge--subtle");
});

it("has no critical accessibility violations", async () => {
  const { container } = render(<Badge>Token</Badge>);
  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
});
