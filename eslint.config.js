// ESLint v9 configuration for Expo + Next.js project
import expoConfig from 'eslint-config-expo';

export default [
  {
    ignores: [
      '/dist/*',
      '.expo/*',
      '.next/*',
      'node_modules/*',
      'coverage/*',
      '*.test.js',
      '*.test.ts',
      '*.test.tsx'
    ],
  },
  ...expoConfig,
  {
    rules: {
      // Add any custom rules here
    },
  },
];