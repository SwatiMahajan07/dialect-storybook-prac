import type { Meta, StoryObj } from "@storybook/react";
import ButtonComponent from "./Button";
import AddIcon from "@mui/icons-material/Add";

const meta: Meta<typeof ButtonComponent> = {
  title: "Components/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    buttonContent: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "neutral"],
    },
    rounded: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: "contained",
    color: "primary",
    buttonContent: "Button",
    size: "medium",
    disabled: false,
    rounded: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "contained",
    color: "secondary",
    buttonContent: "Button",
    size: "medium",
    disabled: false,
    rounded: false,
  },
};

export const WithIcon: Story = {
  args: {
    variant: "contained",
    color: "primary",
    buttonContent: <AddIcon />,
    size: "medium",
    disabled: false,
    rounded: false,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "primary",
    buttonContent: "Button",
    size: "medium",
    disabled: false,
    rounded: false,
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    color: "primary",
    buttonContent: "Button",
    size: "medium",
    disabled: false,
    rounded: false,
  },
};

export const Rounded: Story = {
  args: {
    variant: "contained",
    color: "primary",
    buttonContent: "Button",
    size: "medium",
    disabled: false,
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: "contained",
    color: "primary",
    buttonContent: "Button",
    size: "medium",
    disabled: true,
    rounded: false,
  },
};
