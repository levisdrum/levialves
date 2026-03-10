import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import { Button } from "../button";
import { Card } from "./card";

it("renders card title and description", () => {
  render(<Card title="Flora" description="DS initiative" eyebrow="Grupo Boticario" />);
  expect(screen.getByRole("article", { name: "Flora" })).toBeInTheDocument();
  expect(screen.getByText("DS initiative")).toBeInTheDocument();
});

it("exposes title and description through accessible relations", () => {
  render(<Card title="Flora" description="DS initiative" eyebrow="Grupo Boticario" />);
  const article = screen.getByRole("article", { name: "Flora" });
  const description = screen.getByText("DS initiative");

  expect(article).toHaveAttribute("aria-describedby", description.getAttribute("id"));
});

it("renders optional action content", () => {
  render(<Card title="Flora" description="DS initiative" action={<Button>Read case</Button>} />);
  expect(screen.getByRole("button", { name: "Read case" })).toBeInTheDocument();
});

it("has no critical accessibility violations", async () => {
  const { container } = render(<Card title="Flora" description="DS initiative" eyebrow="Grupo Boticario" />);
  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
});

it("has no critical accessibility violations with action slot", async () => {
  const { container } = render(
    <Card title="Flora" description="DS initiative" action={<Button>Read case</Button>} />
  );

  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
});
