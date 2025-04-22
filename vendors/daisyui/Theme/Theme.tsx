import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { ThemeContext } from './ThemeContext'

export type ThemeProps = {
  dataTheme?: string
  onChange?: (theme: string) => void
  children?: React.ReactNode
}

const Theme = React.forwardRef<View, ThemeProps>(
  ({ children, dataTheme, onChange }, ref): JSX.Element => {
    const themeRef = useRef<View>((ref as MutableRefObject<View>)?.current)
    const [theme, setTheme] = useState<string>(dataTheme || 'light')

    const handleThemeChange = (newTheme: string) => {
      onChange && onChange(newTheme)
      setTheme(newTheme)
    }

    useEffect(() => {
      if (dataTheme && dataTheme !== theme) {
        handleThemeChange(dataTheme)
      }
    }, [dataTheme])

    return (
      <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
        <View ref={themeRef}>{children}</View>
      </ThemeContext.Provider>
    )
  }
)

export default Theme
