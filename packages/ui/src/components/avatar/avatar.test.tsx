import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

it("renders avatar image", () => {
  const { container } = render(
    <Avatar>
      <AvatarImage src="https://example.com/avatar.jpg" alt="Levi Alves" />
      <AvatarFallback>LA</AvatarFallback>
    </Avatar>
  );

  expect(container.querySelector(".DSLEVIS-ui-avatar")).toBeInTheDocument();
});

it("renders fallback content", () => {
  render(
    <Avatar>
      <AvatarFallback>LA</AvatarFallback>
    </Avatar>
  );

  expect(screen.getByText("LA")).toBeInTheDocument();
});

it("has no critical accessibility violations", async () => {
  const { container } = render(
    <Avatar>
      <AvatarImage src="https://example.com/avatar.jpg" alt="Levi Alves" />
      <AvatarFallback>LA</AvatarFallback>
    </Avatar>
  );

  const results = await axe(container);
  expect(results.violations).toHaveLength(0);
});
