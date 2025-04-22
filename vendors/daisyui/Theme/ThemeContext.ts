import React from 'react'

export interface IThemeContext {
  theme: string
  setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {},
})
