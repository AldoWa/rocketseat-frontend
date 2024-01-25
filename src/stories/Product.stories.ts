import type { Meta, StoryObj } from '@storybook/react';

import Products from '@/pages/[id]/index';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { appRouter } from '@/server/api/root';
import superJSON from 'superjson';
import { db } from "@/server/db";

const helpers = createServerSideHelpers({
  router: appRouter,
  ctx: {
    db,
  },
  transformer: superJSON,
});

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

export const Principal: Story = {
  args: {
    id: 1,
    trpcState: helpers.dehydrate()
  }
};

