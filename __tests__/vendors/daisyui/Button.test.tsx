import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '@/vendors/daisyui/Button/Button';

// Mock twrnc
jest.mock('twrnc', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
}));

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('renders with different sizes', () => {
    const { getByText, rerender } = render(
      <Button size="lg">Large Button</Button>
    );
    expect(getByText('Large Button')).toBeTruthy();

    rerender(<Button size="sm">Small Button</Button>);
    expect(getByText('Small Button')).toBeTruthy();

    rerender(<Button size="xs">Extra Small Button</Button>);
    expect(getByText('Extra Small Button')).toBeTruthy();
  });

  it('renders with different colors', () => {
    const { getByText, rerender } = render(
      <Button color="primary">Primary Button</Button>
    );
    expect(getByText('Primary Button')).toBeTruthy();

    rerender(<Button color="secondary">Secondary Button</Button>);
    expect(getByText('Secondary Button')).toBeTruthy();

    rerender(<Button color="success">Success Button</Button>);
    expect(getByText('Success Button')).toBeTruthy();

    rerender(<Button color="warning">Warning Button</Button>);
    expect(getByText('Warning Button')).toBeTruthy();

    rerender(<Button color="error">Error Button</Button>);
    expect(getByText('Error Button')).toBeTruthy();
  });

  it('renders with different shapes', () => {
    const { getByText, rerender } = render(
      <Button shape="circle">Circle</Button>
    );
    expect(getByText('Circle')).toBeTruthy();

    rerender(<Button shape="square">Square</Button>);
    expect(getByText('Square')).toBeTruthy();

    rerender(<Button shape="rounded">Rounded</Button>);
    expect(getByText('Rounded')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock}>Press me</Button>
    );

    fireEvent.press(getByText('Press me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders with start and end icons', () => {
    const StartIcon = () => <React.Fragment>→</React.Fragment>;
    const EndIcon = () => <React.Fragment>←</React.Fragment>;

    const { getByText, getByTestId } = render(
      <Button
        startIcon={<StartIcon />}
        endIcon={<EndIcon />}
        testID="icon-button"
      >
        Icon Button
      </Button>
    );

    expect(getByText('Icon Button')).toBeTruthy();
    expect(getByTestId('icon-button')).toBeTruthy();
    // Icons are wrapped in Views, so we can't directly test their content
    // but we can verify the button structure exists
  });

  it('shows loading state correctly', () => {
    const { getByText, queryByText, getByTestId } = render(
      <Button loading testID="button">
        Loading Button
      </Button>
    );

    // Text should not be visible when loading
    expect(queryByText('Loading Button')).toBeNull();
    
    // ActivityIndicator should be present (though we can't directly test it without additional setup)
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('disables interaction when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button disabled onPress={onPressMock}>
        Disabled Button
      </Button>
    );

    fireEvent.press(getByText('Disabled Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('disables interaction when loading', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button loading onPress={onPressMock} testID="loading-button">
        Loading Button
      </Button>
    );

    fireEvent.press(getByTestId('loading-button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('applies custom styles correctly', () => {
    const customStyle = { backgroundColor: 'red' };
    const customTextStyle = { fontSize: 20 };

    const { getByText, getByTestId } = render(
      <Button
        style={customStyle}
        textStyle={customTextStyle}
        testID="styled-button"
      >
        Styled Button
      </Button>
    );

    const button = getByTestId('styled-button');
    const text = getByText('Styled Button');
    
    expect(button).toBeTruthy();
    expect(text).toBeTruthy();
  });

  it('handles fullWidth prop', () => {
    const { getByText } = render(
      <Button fullWidth>Full Width Button</Button>
    );

    expect(getByText('Full Width Button')).toBeTruthy();
  });

  it('handles wide prop', () => {
    const { getByText } = render(
      <Button wide>Wide Button</Button>
    );

    expect(getByText('Wide Button')).toBeTruthy();
  });

  it('handles active state', () => {
    const { getByText } = render(
      <Button active>Active Button</Button>
    );

    expect(getByText('Active Button')).toBeTruthy();
  });

  it('handles glass effect', () => {
    const { getByText } = render(
      <Button glass>Glass Button</Button>
    );

    expect(getByText('Glass Button')).toBeTruthy();
  });

  it('handles animation prop', () => {
    const { getByText, rerender } = render(
      <Button animation={false}>No Animation</Button>
    );

    expect(getByText('No Animation')).toBeTruthy();

    rerender(<Button animation={true}>With Animation</Button>);
    expect(getByText('With Animation')).toBeTruthy();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef();
    const { getByText } = render(
      <Button ref={ref}>Ref Button</Button>
    );

    expect(getByText('Ref Button')).toBeTruthy();
    expect(ref.current).toBeTruthy();
  });

  it('renders correctly with all props combined', () => {
    const onPressMock = jest.fn();
    const StartIcon = () => <React.Fragment>🚀</React.Fragment>;

    const { getByText, getByTestId } = render(
      <Button
        size="lg"
        color="primary"
        shape="rounded"
        startIcon={<StartIcon />}
        onPress={onPressMock}
        active
        wide
        testID="complex-button"
      >
        Complex Button
      </Button>
    );

    expect(getByText('Complex Button')).toBeTruthy();
    expect(getByTestId('complex-button')).toBeTruthy();

    fireEvent.press(getByText('Complex Button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});