import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import Button from '@/vendors/daisyui/Button/Button';
import Menu from '@/vendors/daisyui/Menu/Menu';
import Drawer from '@/vendors/daisyui/Drawer/Drawer';

// Mock twrnc
jest.mock('twrnc', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
}));

describe('Component Integration Tests', () => {
  describe('Button + Menu Integration', () => {
    it('Button can be used as Menu.Item content', () => {
      const buttonPress = jest.fn();
      
      const { getByText } = render(
        <Menu>
          <Menu.Item>
            <Button onPress={buttonPress}>Menu Button</Button>
          </Menu.Item>
        </Menu>
      );

      fireEvent.press(getByText('Menu Button'));
      expect(buttonPress).toHaveBeenCalledTimes(1);
    });

    it('Menu can contain multiple Buttons with different colors', () => {
      const primaryPress = jest.fn();
      const secondaryPress = jest.fn();

      const { getByText } = render(
        <Menu>
          <Menu.Item>
            <Button color="primary" onPress={primaryPress}>
              Primary Action
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button color="secondary" onPress={secondaryPress}>
              Secondary Action
            </Button>
          </Menu.Item>
        </Menu>
      );

      fireEvent.press(getByText('Primary Action'));
      fireEvent.press(getByText('Secondary Action'));
      
      expect(primaryPress).toHaveBeenCalledTimes(1);
      expect(secondaryPress).toHaveBeenCalledTimes(1);
    });

    it('Button states work correctly inside Menu', () => {
      const mockPress = jest.fn();

      const { getByText, rerender } = render(
        <Menu>
          <Menu.Item>
            <Button disabled onPress={mockPress}>
              Disabled Button
            </Button>
          </Menu.Item>
        </Menu>
      );

      fireEvent.press(getByText('Disabled Button'));
      expect(mockPress).not.toHaveBeenCalled();

      // Test with enabled button
      rerender(
        <Menu>
          <Menu.Item>
            <Button onPress={mockPress}>
              Enabled Button
            </Button>
          </Menu.Item>
        </Menu>
      );

      fireEvent.press(getByText('Enabled Button'));
      expect(mockPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('Drawer + Menu Integration', () => {
    it('Drawer can contain Menu as side content', async () => {
      const menuItemPress = jest.fn();

      const sideContent = (
        <Menu testID="drawer-menu">
          <Menu.Title testID="menu-title">Navigation</Menu.Title>
          <Menu.Item text="Home" onPress={menuItemPress} />
          <Menu.Item text="About" />
        </Menu>
      );

      const { getByTestId, getByText } = render(
        <Drawer side={sideContent} open={true}>
          <Text>Main Content</Text>
        </Drawer>
      );

      // Menu should be visible in the drawer
      expect(getByTestId('drawer-menu')).toBeTruthy();
      expect(getByTestId('menu-title')).toBeTruthy();

      // Menu item should be interactive
      fireEvent.press(getByText('Home'));
      expect(menuItemPress).toHaveBeenCalledTimes(1);
    });

    it('Complex menu structure works in Drawer', async () => {
      const sideContent = (
        <Menu vertical testID="complex-menu">
          <Menu.Title testID="title">Main Menu</Menu.Title>
          <Menu.Item>
            <View>
              <Text>Custom Item Content</Text>
              <Button size="sm">Nested Button</Button>
            </View>
          </Menu.Item>
          <Menu.Dropdown testID="dropdown" label="Submenu">
            <Menu.Item text="Sub Item 1" />
            <Menu.Item text="Sub Item 2" />
          </Menu.Dropdown>
        </Menu>
      );

      const { getByTestId, getByText } = render(
        <Drawer side={sideContent} open={true}>
          <Text>Main Content</Text>
        </Drawer>
      );

      expect(getByTestId('complex-menu')).toBeTruthy();
      expect(getByTestId('title')).toBeTruthy();
      expect(getByTestId('dropdown')).toBeTruthy();
      expect(getByText('Custom Item Content')).toBeTruthy();
      expect(getByText('Nested Button')).toBeTruthy();
    });
  });

  describe('Full Component Composition', () => {
    it('renders complex UI composition correctly', async () => {
      const mainAction = jest.fn();
      const menuAction = jest.fn();

      const sideMenu = (
        <Menu testID="side-menu" className="navigation">
          <Menu.Title testID="nav-title">App Navigation</Menu.Title>
          <Menu.Item>
            <Button 
              color="primary" 
              size="sm" 
              onPress={menuAction}
              testID="nav-button"
            >
              Navigate
            </Button>
          </Menu.Item>
          <Menu.Item text="Settings" />
          <Menu.Item text="Help" />
        </Menu>
      );

      const mainContent = (
        <View testID="main-content">
          <Text>Welcome to the App</Text>
          <Button 
            color="success" 
            size="lg" 
            onPress={mainAction}
            testID="main-action"
          >
            Get Started
          </Button>
        </View>
      );

      const { getByTestId, getByText } = render(
        <Drawer side={sideMenu} open={true}>
          {mainContent}
        </Drawer>
      );

      // Verify all components render (Modal doesn't pass testID down)
      expect(getByTestId('side-menu')).toBeTruthy();
      expect(getByTestId('nav-title')).toBeTruthy();
      expect(getByTestId('main-content')).toBeTruthy();
      expect(getByText('Welcome to the App')).toBeTruthy();

      // Test interactions
      fireEvent.press(getByTestId('nav-button'));
      expect(menuAction).toHaveBeenCalledTimes(1);

      fireEvent.press(getByTestId('main-action'));
      expect(mainAction).toHaveBeenCalledTimes(1);
    });
  });

  describe('Cross-platform Compatibility', () => {
    it('components work together across platforms', () => {
      // Test that would work identically on native and web
      const { getByTestId, getByText } = render(
        <View testID="cross-platform-layout">
          <Menu horizontal testID="header-menu">
            <Menu.Item>
              <Button color="primary" testID="header-button">
                Home
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button color="secondary">
                About
              </Button>
            </Menu.Item>
          </Menu>
          
          <View testID="content-area">
            <Text>Cross-platform content</Text>
            <Button wide color="success">
              Universal Button
            </Button>
          </View>
        </View>
      );

      expect(getByTestId('cross-platform-layout')).toBeTruthy();
      expect(getByTestId('header-menu')).toBeTruthy();
      expect(getByTestId('content-area')).toBeTruthy();
      expect(getByText('Cross-platform content')).toBeTruthy();
      expect(getByText('Universal Button')).toBeTruthy();
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('handles missing props gracefully in integrated components', () => {
      expect(() => {
        render(
          <Drawer side={<Menu><Menu.Item /></Menu>} open={true}>
            <Button>Test</Button>
          </Drawer>
        );
      }).not.toThrow();
    });

    it('handles empty content gracefully', () => {
      expect(() => {
        render(
          <Drawer side={<Menu />} open={true}>
            <View />
          </Drawer>
        );
      }).not.toThrow();
    });

    it('handles deeply nested component structures', () => {
      const { getByTestId } = render(
        <Drawer side={
          <Menu testID="level-1">
            <Menu.Item>
              <Menu testID="level-2">
                <Menu.Item>
                  <Button testID="nested-button">
                    Deep Button
                  </Button>
                </Menu.Item>
              </Menu>
            </Menu.Item>
          </Menu>
        } open={true}>
          <Text>Content</Text>
        </Drawer>
      );

      expect(getByTestId('level-1')).toBeTruthy();
      expect(getByTestId('level-2')).toBeTruthy();
      expect(getByTestId('nested-button')).toBeTruthy();
    });
  });
});