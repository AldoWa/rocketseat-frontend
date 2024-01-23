import type { Meta, StoryObj } from '@storybook/react';

import { DropDown } from '@/components/Dropdown';

const meta = {
  title: 'DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {

};

