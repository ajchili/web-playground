import type { Meta, StoryObj } from "@storybook/react-vite";

import { LandoNorrisTextEffect as Component } from "./LandoNorrisTextEffect";

const meta = {
  title: "Effects/Lando Norris Link",
  component: Component,
  args: {
    text: "My Portfolio",
    href: "https://kirinpatel.com",
    target: "_blank",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Socials: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
        }}
      >
        <Component text="TIKTOK" href="#" />
        <Component text="INSTAGRAM" href="#" />
        <Component text="YOUTUBE" href="#" />
        <Component text="TWITCH" href="#" />
      </div>
    );
  },
};
