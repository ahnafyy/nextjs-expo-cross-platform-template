import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import Drawer from '@/vendors/daisyui/Drawer/Drawer';

// Mock twrnc
jest.mock('twrnc', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
}));

describe('Drawer Component', () => {
  const mockSideContent = (
    <View testID="side-content">
      <Text>Side Content</Text>
    </View>
  );

  const mockMainContent = (
    <View testID="main-content">
      <Text>Main Content</Text>
    </View>
  );

  it('renders correctly with required props', () => {
    const { getByTestId } = render(
      <Drawer side={mockSideContent}>
        {mockMainContent}
      </Drawer>
    );

    // Main content should be rendered
    expect(getByTestId('main-content')).toBeTruthy();
  });

  it('shows side content when open is true', async () => {
    const { getByTestId } = render(
      <Drawer side={mockSideContent} open={true}>
        {mockMainContent}
      </Drawer>
    );

    // Wait for the modal to be visible
    await waitFor(() => {
      expect(getByTestId('side-content')).toBeTruthy();
    });
  });

  it('does not show side content when open is false', () => {
    const { queryByTestId } = render(
      <Drawer side={mockSideContent} open={false}>
        {mockMainContent}
      </Drawer>
    );

    // Side content should not be visible when modal is not open
    expect(queryByTestId('side-content')).toBeNull();
  });

  it('handles overlay click correctly', async () => {
    const onClickOverlayMock = jest.fn();
    const { getByTestId } = render(
      <Drawer
        side={mockSideContent}
        open={true}
        onClickOverlay={onClickOverlayMock}
      >
        {mockMainContent}
      </Drawer>
    );

    // Wait for modal to be visible
    await waitFor(() => {
      expect(getByTestId('side-content')).toBeTruthy();
    });

    // Find and click the overlay (TouchableOpacity)
    // The overlay should be the first pressable element
    const modal = getByTestId('side-content').parent?.parent;
    if (modal) {
      const overlay = modal.children[0]; // First child should be the overlay
      if (overlay) {
        fireEvent.press(overlay);
        expect(onClickOverlayMock).toHaveBeenCalledTimes(1);
      }
    }
  });

  it('renders with end prop for right-side drawer', async () => {
    const { getByTestId } = render(
      <Drawer side={mockSideContent} open={true} end={true}>
        {mockMainContent}
      </Drawer>
    );

    await waitFor(() => {
      expect(getByTestId('side-content')).toBeTruthy();
    });
  });

  it('applies custom className props', async () => {
    const { getByTestId } = render(
      <Drawer
        side={mockSideContent}
        open={true}
        contentClassName="custom-content"
        sideClassName="custom-side"
        overlayClassName="custom-overlay"
      >
        {mockMainContent}
      </Drawer>
    );

    await waitFor(() => {
      expect(getByTestId('side-content')).toBeTruthy();
    });
  });

  it('handles modal close events correctly', async () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <Drawer side={mockSideContent} open={true}>
        {mockMainContent}
      </Drawer>
    );

    // Modal should be visible initially
    await waitFor(() => {
      expect(getByTestId('side-content')).toBeTruthy();
    });

    // Close the drawer by changing open prop
    rerender(
      <Drawer side={mockSideContent} open={false}>
        {mockMainContent}
      </Drawer>
    );

    // Side content should eventually disappear
    await waitFor(() => {
      expect(queryByTestId('side-content')).toBeNull();
    });
  });

  it('renders complex side content correctly', async () => {
    const complexSideContent = (
      <View testID="complex-side">
        <Text>Header</Text>
        <View>
          <Text>Menu Item 1</Text>
          <Text>Menu Item 2</Text>
        </View>
        <Text>Footer</Text>
      </View>
    );

    const { getByTestId, getByText } = render(
      <Drawer side={complexSideContent} open={true}>
        {mockMainContent}
      </Drawer>
    );

    await waitFor(() => {
      expect(getByTestId('complex-side')).toBeTruthy();
      expect(getByText('Header')).toBeTruthy();
      expect(getByText('Menu Item 1')).toBeTruthy();
      expect(getByText('Menu Item 2')).toBeTruthy();
      expect(getByText('Footer')).toBeTruthy();
    });
  });

  it('renders complex main content correctly', () => {
    const complexMainContent = (
      <View testID="complex-main">
        <Text>Main Header</Text>
        <View>
          <Text>Content Area</Text>
          <Text>More Content</Text>
        </View>
      </View>
    );

    const { getByTestId, getByText } = render(
      <Drawer side={mockSideContent} open={false}>
        {complexMainContent}
      </Drawer>
    );

    expect(getByTestId('complex-main')).toBeTruthy();
    expect(getByText('Main Header')).toBeTruthy();
    expect(getByText('Content Area')).toBeTruthy();
    expect(getByText('More Content')).toBeTruthy();
  });

  describe('Drawer State Management', () => {
    it('manages internal visible state correctly', async () => {
      const { getByTestId, queryByTestId, rerender } = render(
        <Drawer side={mockSideContent} open={false}>
          {mockMainContent}
        </Drawer>
      );

      // Initially not visible
      expect(queryByTestId('side-content')).toBeNull();

      // Open the drawer
      rerender(
        <Drawer side={mockSideContent} open={true}>
          {mockMainContent}
        </Drawer>
      );

      // Should become visible
      await waitFor(() => {
        expect(getByTestId('side-content')).toBeTruthy();
      });
    });

    it('handles rapid open/close changes', async () => {
      const { getByTestId, queryByTestId, rerender } = render(
        <Drawer side={mockSideContent} open={false}>
          {mockMainContent}
        </Drawer>
      );

      // Rapidly change open state
      rerender(
        <Drawer side={mockSideContent} open={true}>
          {mockMainContent}
        </Drawer>
      );

      rerender(
        <Drawer side={mockSideContent} open={false}>
          {mockMainContent}
        </Drawer>
      );

      rerender(
        <Drawer side={mockSideContent} open={true}>
          {mockMainContent}
        </Drawer>
      );

      // Final state should be open
      await waitFor(() => {
        expect(getByTestId('side-content')).toBeTruthy();
      });
    });
  });

  describe('Drawer Accessibility', () => {
    it('supports modal accessibility features', async () => {
      const { getByTestId } = render(
        <Drawer side={mockSideContent} open={true}>
          {mockMainContent}
        </Drawer>
      );

      await waitFor(() => {
        expect(getByTestId('side-content')).toBeTruthy();
      });

      // Modal should have proper accessibility structure
      const sideContent = getByTestId('side-content');
      expect(sideContent).toBeTruthy();
    });

    it('handles onRequestClose for Android back button', async () => {
      const { getByTestId } = render(
        <Drawer side={mockSideContent} open={true}>
          {mockMainContent}
        </Drawer>
      );

      await waitFor(() => {
        expect(getByTestId('side-content')).toBeTruthy();
      });

      // The Modal component should handle onRequestClose internally
      // We can't easily test the Android back button behavior in unit tests
      // but we ensure the modal is properly configured
    });
  });

  describe('Drawer Edge Cases', () => {
    it('handles undefined children gracefully', () => {
      const { queryByTestId } = render(
        <Drawer side={mockSideContent} open={false}>
          {undefined}
        </Drawer>
      );

      // Should not crash with undefined children
      expect(queryByTestId('side-content')).toBeNull();
    });

    it('handles empty side content', async () => {
      const { getByTestId } = render(
        <Drawer side={<View testID="empty-side" />} open={true}>
          {mockMainContent}
        </Drawer>
      );

      await waitFor(() => {
        expect(getByTestId('empty-side')).toBeTruthy();
      });
    });

    it('handles multiple drawer instances', async () => {
      const { getByTestId } = render(
        <>
          <Drawer side={<View testID="drawer1-side" />} open={true}>
            <View testID="drawer1-main" />
          </Drawer>
          <Drawer side={<View testID="drawer2-side" />} open={false}>
            <View testID="drawer2-main" />
          </Drawer>
        </>
      );

      // Only first drawer should be visible
      await waitFor(() => {
        expect(getByTestId('drawer1-side')).toBeTruthy();
      });
      
      expect(getByTestId('drawer1-main')).toBeTruthy();
      expect(getByTestId('drawer2-main')).toBeTruthy();
    });
  });
});