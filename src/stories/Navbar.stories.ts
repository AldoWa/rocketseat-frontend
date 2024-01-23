import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '@/components/Navbar';

const meta = {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    backgrounds: {
      default: 'rgba(149, 149, 149, 0.1)',
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {

};

