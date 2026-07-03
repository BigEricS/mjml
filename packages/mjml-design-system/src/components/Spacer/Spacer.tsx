import React from 'react'

export interface SpacerProps {
  /** Height of the spacer */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number
  /** Explicit px height (overrides size) */
  height?: number
}

const sizeMap: Record<string, number> = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  '2xl': 64,
}

export function Spacer({ size = 'md', height }: SpacerProps) {
  const px = height ?? (typeof size === 'number' ? size : sizeMap[size])
  return <div aria-hidden="true" style={{ height: `${px}px`, width: '100%', flexShrink: 0 }} />
}
