##  🚀 Next.js + Expo + React Native + Tailwind Template 🚀

A streamlined setup guide to run Expo, Next.js, and React Native in a unified project.

### 🚀 Getting Started

**Start Development Servers**  
- **Expo:** `npm run expo:start`  
- **Next.js:** `npm run next:dev`


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
| `npm run expo:start`     | Launch Expo in development           |
| `npm run expo:android`   | Run Expo on Android device/emulator  |
| `npm run expo:ios`       | Run Expo on iOS simulator            |
| `npm run expo:web`       | Run Expo in a web browser            |
| `npm run expo:reset-project` | Reset Expo cache and state       |
| `npm run next:dev`       | Start Next.js dev server             |
| `npm run next:build`     | Build Next.js app for production     |
| `npm run next:start`     | Serve built Next.js app              |
| `npm run lint`           | Run ESLint                           |
| `npm run expo:test`      | Run tests with Jest                  |



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
npm run next:build  
npm run next:start
```


### 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev)  
- [Next.js Documentation](https://nextjs.org/docs)  
- [React Native Documentation](https://reactnative.dev)

