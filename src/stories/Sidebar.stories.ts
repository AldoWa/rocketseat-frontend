import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '@/components/Sidebar';

const meta = {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {
  args: {
    subTotalItems: `R$ 100,00`,
    totalItems: `R$ 140,00`,
  }
};

