import { useContext, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'

export const useTheme = (value?: string) => {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (value && theme !== value) {
      setTheme(value)
    }
  }, [value, theme, setTheme])

  return { theme, setTheme }
}
