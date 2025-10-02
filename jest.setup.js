import '@testing-library/jest-native/extend-expect';

// Mock react-native modules that don't work well in test environment
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock expo modules
jest.mock('expo-router', () => ({
  Stack: ({ children }) => children,
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    replace: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
}));

jest.mock('expo-constants', () => ({
  default: {
    expoConfig: {
      name: 'Test App',
    },
  },
}));

// Mock twrnc
jest.mock('twrnc', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
}));

// Global test timeout
jest.setTimeout(10000);

// Suppress console errors in tests unless they're expected
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is deprecated')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});