import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import ExampleCrossComponent from '../ExampleCrossComponent';

describe('ExampleCrossComponent', () => {
  // Basic rendering test
  it('renders correctly with default props', () => {
    const { getByText } = render(<ExampleCrossComponent />);
    expect(getByText('Button')).toBeTruthy();
  });

  // Custom title test
  it('renders with custom title', () => {
    const { getByText } = render(
      <ExampleCrossComponent title="Custom Title" />
    );
    expect(getByText('Custom Title')).toBeTruthy();
  });

  // Press event test
  it('handles press events', () => {
    const mockOnPress = jest.fn();
    const { getByRole } = render(
      <ExampleCrossComponent title="Press Me" onPress={mockOnPress} />
    );
    
    const button = getByRole('button');
    fireEvent.press(button);
    
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  // Disabled state test
  it('does not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    const { getByRole } = render(
      <ExampleCrossComponent 
        title="Disabled Button" 
        disabled 
        onPress={mockOnPress} 
      />
    );
    
    const button = getByRole('button');
    fireEvent.press(button);
    
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  // Loading state test
  it('shows loading text when loading', () => {
    const { getByText } = render(
      <ExampleCrossComponent title="Original" loading />
    );
    
    expect(getByText('Loading...')).toBeTruthy();
  });

  // Loading state does not call onPress
  it('does not call onPress when loading', () => {
    const mockOnPress = jest.fn();
    const { getByRole } = render(
      <ExampleCrossComponent 
        title="Loading Button" 
        loading 
        onPress={mockOnPress} 
      />
    );
    
    const button = getByRole('button');
    fireEvent.press(button);
    
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  // Accessibility test
  it('has correct accessibility properties', () => {
    const { getByRole } = render(
      <ExampleCrossComponent title="Accessible Button" disabled />
    );
    
    const button = getByRole('button');
    
    // Check accessibility role
    expect(button).toBeTruthy();
    
    // Check accessibility state for disabled
    expect(button.props.accessibilityState).toEqual({ disabled: true });
  });

  // Custom children test
  it('renders custom children when no title provided', () => {
    const { getByText } = render(
      <ExampleCrossComponent>
        <Text>Custom Child</Text>
      </ExampleCrossComponent>
    );
    
    expect(getByText('Custom Child')).toBeTruthy();
  });

  // Variant styling test (snapshot)
  it('applies correct variant styles', () => {
    const { toJSON: primaryJSON } = render(
      <ExampleCrossComponent variant="primary" title="Primary" />
    );
    const { toJSON: secondaryJSON } = render(
      <ExampleCrossComponent variant="secondary" title="Secondary" />
    );
    
    // Snapshots help ensure styling consistency
    expect(primaryJSON).toMatchSnapshot('primary-variant');
    expect(secondaryJSON).toMatchSnapshot('secondary-variant');
  });

  // Size styling test
  it('applies correct size styles', () => {
    const { toJSON: smallJSON } = render(
      <ExampleCrossComponent size="sm" title="Small" />
    );
    const { toJSON: largeJSON } = render(
      <ExampleCrossComponent size="lg" title="Large" />
    );
    
    expect(smallJSON).toMatchSnapshot('small-size');
    expect(largeJSON).toMatchSnapshot('large-size');
  });
});