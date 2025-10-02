import { renderHook } from '@testing-library/react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

// Mock the react-native useColorScheme hook
jest.mock('react-native', () => ({
  useColorScheme: jest.fn(),
}));

describe('useColorScheme Hook', () => {
  const mockUseColorScheme = require('react-native').useColorScheme;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns light when system is in light mode', () => {
    mockUseColorScheme.mockReturnValue('light');

    const { result } = renderHook(() => useColorScheme());

    expect(result.current).toBe('light');
  });

  it('returns dark when system is in dark mode', () => {
    mockUseColorScheme.mockReturnValue('dark');

    const { result } = renderHook(() => useColorScheme());

    expect(result.current).toBe('dark');
  });

  it('returns null when system returns null', () => {
    mockUseColorScheme.mockReturnValue(null);

    const { result } = renderHook(() => useColorScheme());

    expect(result.current).toBeNull();
  });

  it('returns undefined when system returns undefined', () => {
    mockUseColorScheme.mockReturnValue(undefined);

    const { result } = renderHook(() => useColorScheme());

    expect(result.current).toBeUndefined();
  });

  it('updates when color scheme changes', () => {
    mockUseColorScheme.mockReturnValue('light');

    const { result, rerender } = renderHook(() => useColorScheme());

    expect(result.current).toBe('light');

    // Change the mock return value
    mockUseColorScheme.mockReturnValue('dark');
    rerender();

    expect(result.current).toBe('dark');
  });

  it('handles edge cases gracefully', () => {
    // Test with unexpected values
    mockUseColorScheme.mockReturnValue('invalid');

    const { result } = renderHook(() => useColorScheme());

    expect(result.current).toBe('invalid');
  });

  describe('Platform-specific behavior', () => {
    it('works consistently across renders', () => {
      mockUseColorScheme.mockReturnValue('light');

      const { result, rerender } = renderHook(() => useColorScheme());

      expect(result.current).toBe('light');

      // Multiple rerenders should maintain consistency
      rerender();
      expect(result.current).toBe('light');

      rerender();
      expect(result.current).toBe('light');
    });

    it('reflects system changes in real-time', () => {
      // Start with light mode
      mockUseColorScheme.mockReturnValue('light');
      const { result, rerender } = renderHook(() => useColorScheme());
      expect(result.current).toBe('light');

      // System changes to dark mode
      mockUseColorScheme.mockReturnValue('dark');
      rerender();
      expect(result.current).toBe('dark');

      // System changes back to light mode
      mockUseColorScheme.mockReturnValue('light');
      rerender();
      expect(result.current).toBe('light');
    });
  });
});