import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/components/Card';

const meta = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      defaultValue: '/cup.png',
    }
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {
  args: {
    imageUrl: '/cup.png',
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 49,90',
  }
};

