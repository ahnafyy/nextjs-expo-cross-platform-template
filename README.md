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
| `yarn lint`           | Run ESLint                           |
| `yarn expo:test`      | Run tests with Jest                  |



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


### 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev)  
- [Next.js Documentation](https://nextjs.org/docs)  
- [React Native Documentation](https://reactnative.dev)

