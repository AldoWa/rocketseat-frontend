import type { Meta, StoryObj } from '@storybook/react';

import { CartCard } from '@/components/CartCard';

const meta = {
  title: 'CartCard',
  component: CartCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Identificador do produto',
      defaultValue: 1,
    },
    imageUrl: {
      defaultValue: '/cup.png',
    }
  }
} satisfies Meta<typeof CartCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {
  args: {
    imageUrl: '/cup.png',
    id: 1,
    description: 'TESTE',
    qtd: 1,
    name: 'Caneca de cerâmica rústica',
    price: 'R$ 49,90',
  }
};

