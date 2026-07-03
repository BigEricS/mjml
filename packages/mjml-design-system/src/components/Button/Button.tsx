import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  /** Size */
  size?: 'sm' | 'md' | 'lg'
  /** Full-width block button */
  fullWidth?: boolean
  /** Loading state */
  loading?: boolean
  /** Icon before label */
  iconLeft?: React.ReactNode
  /** Icon after label */
  iconRight?: React.ReactNode
  children: React.ReactNode
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans, Inter, system-ui, sans-serif)',
    fontWeight: 600,
    borderRadius: 'var(--radius-md, 8px)',
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s, opacity 0.15s',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    outline: 'none',
  },
  primary: {
    background: 'var(--color-blue-900, #08428C)',
    color: '#fff',
    borderColor: 'var(--color-blue-900, #08428C)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-blue-900, #08428C)',
    borderColor: 'var(--color-blue-900, #08428C)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-black-700, #28282B)',
    borderColor: 'transparent',
  },
  danger: {
    background: '#C0392B',
    color: '#fff',
    borderColor: '#C0392B',
  },
  sm: { fontSize: '13px', padding: '6px 14px', height: '32px' },
  md: { fontSize: '15px', padding: '9px 20px', height: '40px' },
  lg: { fontSize: '17px', padding: '12px 28px', height: '50px' },
  fullWidth: { width: '100%' },
  disabled: { opacity: 0.45, cursor: 'not-allowed' },
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  iconLeft,
  iconRight,
  children,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      {...rest}
      disabled={isDisabled}
      style={{
        ...styles.base,
        ...styles[variant],
        ...styles[size],
        ...(fullWidth ? styles.fullWidth : {}),
        ...(isDisabled ? styles.disabled : {}),
        ...style,
      }}
    >
      {loading ? <span style={{ opacity: 0.7 }}>⟳</span> : iconLeft}
      {children}
      {!loading && iconRight}
    </button>
  )
}
