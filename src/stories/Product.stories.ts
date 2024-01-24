import type { Meta, StoryObj } from '@storybook/react';

import Products from '@/pages/[id]/index';

const meta = {
  title: 'Products',
  component: Products,
  parameters: {
    backgrounds: {
      default: 'rgba(149, 149, 149, 0.1)',
    },
  },
} satisfies Meta<typeof Products>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {};

