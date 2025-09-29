import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import Menu from '@/vendors/daisyui/Menu/Menu';

// Mock twrnc
jest.mock('twrnc', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
}));

describe('Menu Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Menu testID="menu">
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
      </Menu>
    );
    
    expect(getByTestId('menu')).toBeTruthy();
  });

  it('renders with different sizes', () => {
    const { getByTestId, rerender } = render(
      <Menu size="lg" testID="menu">
        <Menu.Item>Large Menu</Menu.Item>
      </Menu>
    );
    expect(getByTestId('menu')).toBeTruthy();

    rerender(
      <Menu size="sm" testID="menu">
        <Menu.Item>Small Menu</Menu.Item>
      </Menu>
    );
    expect(getByTestId('menu')).toBeTruthy();

    rerender(
      <Menu size="xs" testID="menu">
        <Menu.Item>Extra Small Menu</Menu.Item>
      </Menu>
    );
    expect(getByTestId('menu')).toBeTruthy();
  });

  it('renders with vertical layout', () => {
    const { getByTestId } = render(
      <Menu vertical testID="vertical-menu">
        <Menu.Item>Vertical Item 1</Menu.Item>
        <Menu.Item>Vertical Item 2</Menu.Item>
      </Menu>
    );

    expect(getByTestId('vertical-menu')).toBeTruthy();
  });

  it('renders with horizontal layout', () => {
    const { getByTestId } = render(
      <Menu horizontal testID="horizontal-menu">
        <Menu.Item>Horizontal Item 1</Menu.Item>
        <Menu.Item>Horizontal Item 2</Menu.Item>
      </Menu>
    );

    expect(getByTestId('horizontal-menu')).toBeTruthy();
  });

  it('renders with responsive layout', () => {
    const { getByTestId } = render(
      <Menu responsive testID="responsive-menu">
        <Menu.Item>Responsive Item 1</Menu.Item>
        <Menu.Item>Responsive Item 2</Menu.Item>
      </Menu>
    );

    expect(getByTestId('responsive-menu')).toBeTruthy();
  });

  it('renders Menu.Item with text prop', () => {
    const { getByText } = render(
      <Menu>
        <Menu.Item text="Text Item" />
      </Menu>
    );

    expect(getByText('Text Item')).toBeTruthy();
  });

  it('renders Menu.Item with children', () => {
    const { getByText } = render(
      <Menu>
        <Menu.Item>
          <Text>Child Item</Text>
        </Menu.Item>
      </Menu>
    );

    expect(getByText('Child Item')).toBeTruthy();
  });

  it('handles Menu.Item press events', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Menu>
        <Menu.Item text="Pressable Item" onPress={onPressMock} />
      </Menu>
    );

    fireEvent.press(getByText('Pressable Item'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('handles disabled Menu.Item correctly', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Menu>
        <Menu.Item text="Disabled Item" disabled onPress={onPressMock} />
      </Menu>
    );

    fireEvent.press(getByText('Disabled Item'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders Menu.Title correctly', () => {
    const { getByText } = render(
      <Menu>
        <Menu.Title>Menu Title</Menu.Title>
        <Menu.Item>Item 1</Menu.Item>
      </Menu>
    );

    expect(getByText('Menu Title')).toBeTruthy();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef();
    const { getByTestId } = render(
      <Menu ref={ref} testID="ref-menu">
        <Menu.Item>Item</Menu.Item>
      </Menu>
    );

    expect(getByTestId('ref-menu')).toBeTruthy();
    expect(ref.current).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(
      <Menu style={customStyle} testID="styled-menu">
        <Menu.Item>Styled Item</Menu.Item>
      </Menu>
    );

    expect(getByTestId('styled-menu')).toBeTruthy();
  });

  it('renders with multiple layout props combined', () => {
    const { getByTestId } = render(
      <Menu vertical responsive size="lg" testID="complex-menu">
        <Menu.Title>Complex Menu</Menu.Title>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item disabled>Disabled Item</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu>
    );

    expect(getByTestId('complex-menu')).toBeTruthy();
  });

  describe('Menu Sub-components', () => {
    it('renders Menu.Title with custom props', () => {
      const { getByText } = render(
        <Menu>
          <Menu.Title>Custom Title</Menu.Title>
        </Menu>
      );

      expect(getByText('Custom Title')).toBeTruthy();
    });

    it('renders Menu.Item with all props', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <Menu>
          <Menu.Item text="Full Item" onPress={onPressMock} disabled={false} />
        </Menu>
      );

      expect(getByText('Full Item')).toBeTruthy();
      fireEvent.press(getByText('Full Item'));
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('renders Menu.Dropdown correctly', () => {
      const { getByTestId } = render(
        <Menu>
          <Menu.Dropdown testID="dropdown">
            <Menu.Item>Dropdown Item</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );

      expect(getByTestId('dropdown')).toBeTruthy();
    });

    it('renders Menu.Details correctly', () => {
      const { getByTestId } = render(
        <Menu>
          <Menu.Details testID="details">
            <Menu.Item>Details Item</Menu.Item>
          </Menu.Details>
        </Menu>
      );

      expect(getByTestId('details')).toBeTruthy();
    });
  });

  describe('Menu Accessibility', () => {
    it('supports accessibility props', () => {
      const { getByTestId } = render(
        <Menu testID="accessible-menu" accessibilityLabel="Main menu">
          <Menu.Item text="Accessible Item" />
        </Menu>
      );

      expect(getByTestId('accessible-menu')).toBeTruthy();
    });

    it('Menu.Item supports accessibility props', () => {
      const { getByLabelText } = render(
        <Menu>
          <Menu.Item
            text="Accessible Item"
            accessibilityLabel="Menu item button"
          />
        </Menu>
      );

      expect(getByLabelText('Menu item button')).toBeTruthy();
    });
  });
});