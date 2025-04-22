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

## 📖 Learn More
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [React Native Docs](https://reactnative.dev/docs/components-and-apis)
- [Expo Docs](https://docs.expo.dev/)

