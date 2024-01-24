import type { Meta, StoryObj } from '@storybook/react';

import Home from '@/pages';
import { trpcMsw } from '@/mocks/mock';

const meta = {
  title: 'Home',
  component: Home,
  parameters: {
    backgrounds: {
      default: 'rgba(149, 149, 149, 0.1)',
    },
    msw: {
      handlers: [
        trpcMsw.products.getAll.query((req, res, ctx) => { 
          return res(ctx.status(200), ctx.data({pages: 1, products: [{
            category: "category",
            createdAt: new Date("2021-08-15T21:00:00.000Z"),
            description: "description",
            id: 1,
            name: "name",
            updatedAt: new Date("2021-08-15T21:00:00.000Z"),
            imageUrl: '/cup.png'
          }] }))
        })
      ],
    },
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Principal: Story = {};

