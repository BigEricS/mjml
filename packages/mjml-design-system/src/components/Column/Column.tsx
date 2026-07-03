import React from 'react'

export interface ColumnProps {
  /** Column span out of 12 */
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  /** Gap between columns when used inside a Container */
  gap?: 'none' | 'sm' | 'md' | 'lg'
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end' | 'stretch'
  /** Horizontal alignment of children */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  children: React.ReactNode
  style?: React.CSSProperties
}

const gapMap: Record<string, string> = {
  none: '0',
  sm: '8px',
  md: '16px',
  lg: '24px',
}

const alignMap: Record<string, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch',
}

const justifyMap: Record<string, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end', between: 'space-between', around: 'space-around',
}

export function Column({ span = 6, gap = 'md', align = 'start', justify = 'start', children, style }: ColumnProps) {
  const pct = `${(span / 12) * 100}%`
  return (
    <div style={{
      flexBasis: pct,
      maxWidth: pct,
      display: 'flex',
      flexDirection: 'column',
      gap: gapMap[gap],
      alignItems: alignMap[align],
      justifyContent: justifyMap[justify],
      ...style,
    }}>
      {children}
    </div>
  )
}
