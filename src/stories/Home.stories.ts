import type { Meta, StoryObj } from '@storybook/react';

import Home from '@/pages';

const meta = {
  title: 'Home',
  component: Home,
  parameters: {
    backgrounds: {
      default: 'rgba(149, 149, 149, 0.1)',
    },
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {};

