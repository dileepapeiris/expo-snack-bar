# Expo Snack Bar

A lightweight and customizable snackbar component for Expo and React Native applications.

## Features

- 🎨 Customizable appearance and behavior
- ⚡ Lightweight and performant
- 📱 Works with Expo and React Native
- 🎯 TypeScript support
- 🎪 Multiple snackbar types (success, error, warning, info)
- ⏱️ Configurable duration and animations

## Installation

```bash
npm install expo-snack-bar
# or
yarn add expo-snack-bar
```

## Quick Start

### Basic Usage

```tsx
import { SnackBar } from 'expo-snack-bar';
import { View, Button } from 'react-native';
import { useRef } from 'react';

export default function App() {
  const snackBarRef = useRef(null);

  const handleShowSnackBar = () => {
    snackBarRef.current?.show({
      message: 'Hello! This is a snackbar.',
      type: 'success',
      duration: 3000,
    });
  };

  return (
    <View>
      <Button title="Show Snackbar" onPress={handleShowSnackBar} />
      <SnackBar ref={snackBarRef} />
    </View>
  );
}
```

## API

### SnackBar Component

#### Props

- `position?: 'top' | 'bottom'` - Position of the snackbar (default: `'bottom'`)
- `duration?: number` - Duration in milliseconds (default: `3000`)
- `backgroundColor?: string` - Background color (default: `'#333'`)
- `textColor?: string` - Text color (default: `'#fff'`)
- `borderRadius?: number` - Border radius (default: `8`)

#### Methods

- `show(options: SnackBarOptions)` - Display the snackbar

```tsx
interface SnackBarOptions {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: {
    label: string;
    onPress: () => void;
  };
}
```

## Examples

### Success Snackbar

```tsx
snackBarRef.current?.show({
  message: 'Saved successfully!',
  type: 'success',
  duration: 2000,
});
```

### Error Snackbar

```tsx
snackBarRef.current?.show({
  message: 'An error occurred.',
  type: 'error',
  duration: 3000,
});
```

### With Action

```tsx
snackBarRef.current?.show({
  message: 'Item deleted',
  type: 'warning',
  duration: 5000,
  action: {
    label: 'Undo',
    onPress: () => {
      // Handle undo action
    },
  },
});
```

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Testing

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For issues and questions, please visit [GitHub Issues](https://github.com/dileepapeiris/expo-snack-bar/issues).
