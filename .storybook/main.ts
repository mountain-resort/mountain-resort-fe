import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // alias 객체가 없을 수도 있으니 체크
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }

    // '@/fonts/font' 라는 import 경로가 들어오면
    // '../src/fonts/font.storybook.ts' 로 매핑
    config.resolve.alias['@/fonts/font'] = path.resolve(
      __dirname,
      '../src/fonts/font.storybook.ts',
    );

    return config;
  },
};
export default config;
