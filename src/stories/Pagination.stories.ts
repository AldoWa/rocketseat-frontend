import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '@/components/Pagination';

const meta = {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  }
};

