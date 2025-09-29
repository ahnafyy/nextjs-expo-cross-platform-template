import { renderHook } from '@testing-library/react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useColorScheme } from '@/hooks/useColorScheme';

// Mock the useColorScheme hook
jest.mock('@/hooks/useColorScheme');

// Mock the Colors constant
jest.mock('@/constants/Colors', () => ({
  Colors: {
    light: {
      text: '#11181C',
      background: '#fff',
      tint: '#0a7ea4',
      icon: '#687076',
      tabIconDefault: '#687076',
      tabIconSelected: '#0a7ea4',
    },
    dark: {
      text: '#ECEDEE',
      background: '#151718',
      tint: '#fff',
      icon: '#9BA1A6',
      tabIconDefault: '#9BA1A6',
      tabIconSelected: '#fff',
    },
  },
}));

describe('useThemeColor Hook', () => {
  const mockUseColorScheme = useColorScheme as jest.MockedFunction<typeof useColorScheme>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Light mode', () => {
    beforeEach(() => {
      mockUseColorScheme.mockReturnValue('light');
    });

    it('returns light theme colors when no props provided', () => {
      const { result } = renderHook(() => useThemeColor({}, 'text'));
      expect(result.current).toBe('#11181C');
    });

    it('returns props.light when provided in light mode', () => {
      const { result } = renderHook(() => 
        useThemeColor({ light: '#custom-light', dark: '#custom-dark' }, 'text')
      );
      expect(result.current).toBe('#custom-light');
    });

    it('returns default light color when props.light not provided', () => {
      const { result } = renderHook(() => 
        useThemeColor({ dark: '#custom-dark' }, 'background')
      );
      expect(result.current).toBe('#fff');
    });

    it('works with all color names in light mode', () => {
      const colorTests = [
        { colorName: 'text' as const, expected: '#11181C' },
        { colorName: 'background' as const, expected: '#fff' },
        { colorName: 'tint' as const, expected: '#0a7ea4' },
        { colorName: 'icon' as const, expected: '#687076' },
        { colorName: 'tabIconDefault' as const, expected: '#687076' },
        { colorName: 'tabIconSelected' as const, expected: '#0a7ea4' },
      ];

      colorTests.forEach(({ colorName, expected }) => {
        const { result } = renderHook(() => useThemeColor({}, colorName));
        expect(result.current).toBe(expected);
      });
    });
  });

  describe('Dark mode', () => {
    beforeEach(() => {
      mockUseColorScheme.mockReturnValue('dark');
    });

    it('returns dark theme colors when no props provided', () => {
      const { result } = renderHook(() => useThemeColor({}, 'text'));
      expect(result.current).toBe('#ECEDEE');
    });

    it('returns props.dark when provided in dark mode', () => {
      const { result } = renderHook(() => 
        useThemeColor({ light: '#custom-light', dark: '#custom-dark' }, 'text')
      );
      expect(result.current).toBe('#custom-dark');
    });

    it('returns default dark color when props.dark not provided', () => {
      const { result } = renderHook(() => 
        useThemeColor({ light: '#custom-light' }, 'background')
      );
      expect(result.current).toBe('#151718');
    });

    it('works with all color names in dark mode', () => {
      const colorTests = [
        { colorName: 'text' as const, expected: '#ECEDEE' },
        { colorName: 'background' as const, expected: '#151718' },
        { colorName: 'tint' as const, expected: '#fff' },
        { colorName: 'icon' as const, expected: '#9BA1A6' },
        { colorName: 'tabIconDefault' as const, expected: '#9BA1A6' },
        { colorName: 'tabIconSelected' as const, expected: '#fff' },
      ];

      colorTests.forEach(({ colorName, expected }) => {
        const { result } = renderHook(() => useThemeColor({}, colorName));
        expect(result.current).toBe(expected);
      });
    });
  });

  describe('Null/undefined color scheme handling', () => {
    it('defaults to light mode when color scheme is null', () => {
      mockUseColorScheme.mockReturnValue(null);

      const { result } = renderHook(() => useThemeColor({}, 'text'));
      expect(result.current).toBe('#11181C'); // light mode text color
    });

    it('defaults to light mode when color scheme is undefined', () => {
      mockUseColorScheme.mockReturnValue(undefined);

      const { result } = renderHook(() => useThemeColor({}, 'background'));
      expect(result.current).toBe('#fff'); // light mode background color
    });
  });

  describe('Dynamic theme changes', () => {
    it('updates color when theme changes from light to dark', () => {
      mockUseColorScheme.mockReturnValue('light');

      const { result, rerender } = renderHook(() => useThemeColor({}, 'text'));
      expect(result.current).toBe('#11181C'); // light mode

      mockUseColorScheme.mockReturnValue('dark');
      rerender();
      expect(result.current).toBe('#ECEDEE'); // dark mode
    });

    it('updates color when theme changes from dark to light', () => {
      mockUseColorScheme.mockReturnValue('dark');

      const { result, rerender } = renderHook(() => useThemeColor({}, 'tint'));
      expect(result.current).toBe('#fff'); // dark mode

      mockUseColorScheme.mockReturnValue('light');
      rerender();
      expect(result.current).toBe('#0a7ea4'); // light mode
    });

    it('respects prop overrides during theme changes', () => {
      mockUseColorScheme.mockReturnValue('light');

      const { result, rerender } = renderHook(() => 
        useThemeColor({ light: '#custom-light', dark: '#custom-dark' }, 'text')
      );
      expect(result.current).toBe('#custom-light');

      mockUseColorScheme.mockReturnValue('dark');
      rerender();
      expect(result.current).toBe('#custom-dark');
    });
  });

  describe('Props behavior', () => {
    beforeEach(() => {
      mockUseColorScheme.mockReturnValue('light');
    });

    it('prioritizes props over default colors', () => {
      const { result } = renderHook(() => 
        useThemeColor({ light: '#override' }, 'text')
      );
      expect(result.current).toBe('#override');
    });

    it('handles empty props object', () => {
      const { result } = renderHook(() => useThemeColor({}, 'background'));
      expect(result.current).toBe('#fff');
    });

    it('handles partial props (only light)', () => {
      const { result } = renderHook(() => 
        useThemeColor({ light: '#light-only' }, 'text')
      );
      expect(result.current).toBe('#light-only');
    });

    it('handles partial props (only dark)', () => {
      const { result } = renderHook(() => 
        useThemeColor({ dark: '#dark-only' }, 'text')
      );
      expect(result.current).toBe('#11181C'); // falls back to default light
    });
  });

  describe('Edge cases', () => {
    it('handles invalid color names gracefully', () => {
      mockUseColorScheme.mockReturnValue('light');

      // This would normally cause TypeScript errors, but testing runtime behavior
      const { result } = renderHook(() => 
        useThemeColor({}, 'invalidColor' as any)
      );
      
      // Should return undefined for invalid color names
      expect(result.current).toBeUndefined();
    });

    it('works with falsy prop values', () => {
      mockUseColorScheme.mockReturnValue('light');

      const { result } = renderHook(() => 
        useThemeColor({ light: '', dark: '#dark' }, 'text')
      );
      
      // Empty string is falsy, so it falls back to default color
      expect(result.current).toBe('#11181C');
    });

    it('works with null prop values', () => {
      mockUseColorScheme.mockReturnValue('light');

      const { result } = renderHook(() => 
        useThemeColor({ light: null as any, dark: '#dark' }, 'text')
      );
      
      // Should fall back to default when prop is null
      expect(result.current).toBe('#11181C');
    });
  });
});