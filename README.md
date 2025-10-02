##  🚀 Next.js + Expo + React Native + Tailwind Template 🚀

A streamlined setup guide to run Expo, Next.js, and React Native in a unified project.

### 🚀 Getting Started

**Installation**
This repository uses yarn 4 and node 22.

```bash
yarn install
```

**Start Development Servers**  
- **Expo:** `yarn expo:start`  
- **Next.js:** `yarn next:dev`


### 📁 Project Structure

| Folder        | Description                            |
|---------------|----------------------------------------|
| `app/`        | Core app logic                         |
| `(native)/`   | Expo-specific components               |
| `(next)/`     | Next.js-specific components            |
| `assets/`     | Static images, fonts, and media        |
| `components/` | Reusable UI components                 |
| `config/`     | Application configuration              |
| `constants/`  | Global constants                       |
| `hooks/`      | Custom React hooks                     |
| `store/`      | State management setup                 |
| `style/`      | Global styles                          |
| `vendors/`    | Third-party libraries                  |
| `__tests__/`  | Test files and test utilities          |
| `e2e/`        | End-to-end tests (Playwright)          |
| `docs/`       | Documentation files                    |

### 🛠 Available Scripts

| Script                    | Description                          |
|--|--|
| `yarn expo:start`     | Launch Expo in development           |
| `yarn expo:android`   | Run Expo on Android device/emulator  |
| `yarn expo:ios`       | Run Expo on iOS simulator            |
| `yarn expo:web`       | Run Expo in a web browser            |
| `yarn expo:reset-project` | Reset Expo cache and state       |
| `yarn next:dev`       | Start Next.js dev server             |
| `yarn next:build`     | Build Next.js app for production     |
| `yarn next:start`     | Serve built Next.js app              |
| `yarn test`           | Run tests with Jest                  |
| `yarn test:watch`     | Run tests in watch mode              |
| `yarn test:coverage`  | Run tests with coverage report       |
| `yarn test:e2e`       | Run E2E tests with Playwright        |
| `yarn lint`           | Run ESLint                           |



### ⚙️ Configuration Files

| File                 | Purpose                                |
|-|-|
| `app.json`           | Expo configuration                     |
| `babel.config.js`    | Babel setup                            |
| `metro.config.js`    | Metro bundler settings                 |
| `next.config.js`     | Next.js configuration                  |
| `tailwind.config.js` | TailwindCSS settings                   |
| `tsconfig.json`      | TypeScript configuration               |
| `postcss.config.mjs` | PostCSS configuration                  |



### 🔍 SEO Best Practices (Next.js)

- Use `<Head>` from `next/head` for meta tags
- Optimize media with `next/image`
- Generate an XML sitemap
- Use clean, semantic URLs via `expo-router`
- Enable SSR for SEO-sensitive pages



### 🚢 Deployment

**Expo:**  
```bash
expo build:android  # Build APK  
expo build:ios      # Build iOS app
```

**Next.js:**  
```bash
yarn next:build  
yarn next:start
```


### 🧪 Testing

This project includes comprehensive testing with Jest, React Testing Library, and Playwright.

```bash
# Run all tests
yarn test

# Run tests in watch mode (for development)
yarn test:watch

# Run tests with coverage report
yarn test:coverage

# Run end-to-end tests (web)
yarn test:e2e
```

**Test Structure:**
- **Unit Tests**: Individual component and hook testing
- **Integration Tests**: Component interaction testing  
- **E2E Tests**: Full user journey testing (web)

For detailed testing guidelines, see [`docs/TESTING.md`](docs/TESTING.md).


### 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev)  
- [Next.js Documentation](https://nextjs.org/docs)  
- [React Native Documentation](https://reactnative.dev)

