import type { Meta, StoryObj } from '@storybook/react';
import AlertComponent from './Alert';

const meta: Meta<typeof AlertComponent> = {
  title: 'Components/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'The severity level of the alert'
    },
    message: {
      control: 'text',
      description: 'The message to display in the alert'
    }
  }
};

export default meta;
type Story = StoryObj<typeof AlertComponent>;

export const Error: Story = {
  args: {
    severity: 'error',
    message: 'This is an error message'
  }
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    message: 'This is a warning message'
  }
};

export const Info: Story = {
  args: {
    severity: 'info',
    message: 'This is an info message'
  }
};

export const Success: Story = {
  args: {
    severity: 'success',
    message: 'This is a success message'
  }
};
