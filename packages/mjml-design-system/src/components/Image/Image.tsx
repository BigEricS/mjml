import React from 'react'

export interface ImageProps {
  /** Image source URL */
  src: string
  /** Alt text */
  alt: string
  /** Width in px or CSS string */
  width?: number | string
  /** Height in px or CSS string */
  height?: number | string
  /** Object-fit mode */
  fit?: 'cover' | 'contain' | 'fill' | 'none'
  /** Border radius variant */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  /** Optional caption below the image */
  caption?: string
  /** Adds a subtle border */
  bordered?: boolean
  style?: React.CSSProperties
}

const radiiMap: Record<string, string> = {
  none: '0',
  sm: 'var(--radius-sm, 4px)',
  md: 'var(--radius-md, 8px)',
  lg: 'var(--radius-lg, 12px)',
  full: 'var(--radius-full, 9999px)',
}

export function Image({
  src,
  alt,
  width = '100%',
  height,
  fit = 'cover',
  rounded = 'md',
  caption,
  bordered = false,
  style,
}: ImageProps) {
  const imgStyle: React.CSSProperties = {
    display: 'block',
    width: typeof width === 'number' ? `${width}px` : width,
    height: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
    objectFit: fit,
    borderRadius: radiiMap[rounded],
    border: bordered ? '1px solid var(--color-white-100, #EAEDF0)' : 'none',
    maxWidth: '100%',
    ...style,
  }

  if (caption) {
    return (
      <figure style={{ margin: 0, display: 'inline-block', maxWidth: '100%' }}>
        <img src={src} alt={alt} style={imgStyle} />
        <figcaption style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: '12px',
          color: 'var(--color-black-500, #6b6b70)',
          marginTop: '8px',
          textAlign: 'center',
        }}>
          {caption}
        </figcaption>
      </figure>
    )
  }

  return <img src={src} alt={alt} style={imgStyle} />
}
