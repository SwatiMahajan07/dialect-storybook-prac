import type { Meta, StoryObj } from "@storybook/react";
import CheckboxComponent from "./Checkbox";

const meta: Meta<typeof CheckboxComponent> = {
  title: "Components/Checkbox",
  component: CheckboxComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    indeterminate: {
      control: "boolean",
    },
    onClickHandler: {
      action: "clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxComponent>;

export const Primary: Story = {
  args: {
    checked: true,
    disabled: false,
    indeterminate: false,
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
  },
};

export const UncheckedDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
    indeterminate: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    indeterminate: false,
  },
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    indeterminate: false,
  },
};

export const Indeterminate: Story = {
  args: {
    checked: false,
    disabled: false,
    indeterminate: true,
  },
};

export const IndeterminateDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
    indeterminate: true,
  },
};
