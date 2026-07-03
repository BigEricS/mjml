import React from 'react'

export interface WrapperProps {
  /** Background color */
  background?: 'white' | 'light' | 'blue' | 'dark' | 'transparent'
  /** Padding */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg'
  /** Border */
  bordered?: boolean
  /** Box shadow */
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  children: React.ReactNode
  style?: React.CSSProperties
}

const bgMap: Record<string, string> = {
  white: '#fff',
  light: 'var(--color-white-100, #EAEDF0)',
  blue: 'var(--color-blue-900, #08428C)',
  dark: 'var(--color-black-700, #28282B)',
  transparent: 'transparent',
}

const paddingMap: Record<string, string> = {
  none: '0', sm: '12px', md: '24px', lg: '40px',
}

const radiiMap: Record<string, string> = {
  none: '0', sm: '4px', md: '8px', lg: '12px',
}

const shadowMap: Record<string, string> = {
  none: 'none',
  sm: '0 1px 4px rgba(8,66,140,0.08)',
  md: '0 4px 16px rgba(8,66,140,0.12)',
  lg: '0 8px 32px rgba(8,66,140,0.16)',
}

export function Wrapper({
  background = 'white',
  padding = 'md',
  rounded = 'md',
  bordered = false,
  shadow = 'sm',
  children,
  style,
}: WrapperProps) {
  return (
    <div style={{
      background: bgMap[background],
      padding: paddingMap[padding],
      borderRadius: radiiMap[rounded],
      border: bordered ? '1px solid var(--color-white-100, #EAEDF0)' : 'none',
      boxShadow: shadowMap[shadow],
      color: background === 'blue' || background === 'dark' ? '#fff' : undefined,
      ...style,
    }}>
      {children}
    </div>
  )
}
