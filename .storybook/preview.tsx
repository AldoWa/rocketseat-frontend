import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes';

import 'tailwindcss/tailwind.css';
import { initialize, mswDecorator } from "msw-storybook-addon";
import { TrpcProvider } from "../src/utils/trcpProvider";

initialize();

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <TrpcProvider>
          <Story />
        </TrpcProvider>
      );
    }
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  mswDecorator,
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export default preview;