import type { Meta, StoryObj } from "@storybook/react";
import AvatarComponent from "./Avatar";

const meta: Meta<typeof AvatarComponent> = {
  title: "Components/Avatar",
  component: AvatarComponent,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarComponent>;

export const Default: Story = {
  args: {
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const XLarge: Story = {
  args: {
    size: "xlarge",
  },
};
