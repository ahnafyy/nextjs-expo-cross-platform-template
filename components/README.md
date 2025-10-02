# 📂 Components Directory

This folder contains reusable UI components for the **Expo + Next.js + React Native** project.

## 📌 Structure
- **Common/** → Shared components used across multiple screens.
- **Native/** → Components specifically for React Native.
- **Web/** → Components specifically for Next.js.

## 📜 Naming Convention
- Use **PascalCase** for component names (e.g., `Button.tsx`, `Header.tsx`).
- Keep component-specific styles within the same folder.

## 🛠 Example Component Structure
```bash
components/
 ├── Common/
 │   ├── Button.tsx
 │   ├── Modal.tsx
 ├── Native/
 │   ├── MobileDrawer.tsx
 ├── Web/
 │   ├── Navbar.tsx
```

## 📝 Guidelines
- Keep components **small** and **modular**.
- Use **TypeScript** for type safety.
- Prefer **functional components** and **hooks**.
- Write **reusable and composable** components.

## 🤝 Contributing

For detailed guidelines on creating cross-platform components, see our **[Contributing Guide](../CONTRIBUTING.md)**. It covers:

- Cross-platform component architecture
- Styling patterns and best practices  
- Step-by-step component creation workflow
- Testing strategies
- Platform-specific considerations
- Real-world examples and patterns

## 💡 Example Components

Check out `Common/ExampleCrossComponent.tsx` and `Common/ExampleUsage.tsx` for practical examples of cross-platform component development.

## 📖 Learn More
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [React Native Docs](https://reactnative.dev/docs/components-and-apis)
- [Expo Docs](https://docs.expo.dev/)
- [NativeWind Docs](https://www.nativewind.dev/)
- [TWRNC Docs](https://github.com/jaredh159/tailwind-react-native-classnames)

