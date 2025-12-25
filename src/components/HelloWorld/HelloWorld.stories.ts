import type { Meta, StoryObj } from "@storybook/react-vite";

import { HelloWorld as Component } from "./HelloWorld";

const meta = {
  title: "Components/Hello World",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
