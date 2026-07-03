import React from 'react'

export interface TableColumn<T = Record<string, unknown>> {
  /** Column key from row data */
  key: string
  /** Column header label */
  label: string
  /** Optional custom cell renderer */
  render?: (value: unknown, row: T) => React.ReactNode
  /** Text alignment */
  align?: 'left' | 'center' | 'right'
  /** Column width */
  width?: string | number
}

export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>> {
  /** Column definitions */
  columns: TableColumn<T>[]
  /** Row data */
  rows: T[]
  /** Zebra striping */
  striped?: boolean
  /** Hover row highlight */
  hoverable?: boolean
  /** Show borders */
  bordered?: boolean
  /** Compact row height */
  compact?: boolean
  /** Empty state message */
  emptyMessage?: string
  style?: React.CSSProperties
}

export function Table<T extends Record<string, unknown>>({
  columns,
  rows,
  striped = true,
  hoverable = true,
  bordered = false,
  compact = false,
  emptyMessage = 'No data available.',
  style,
}: TableProps<T>) {
  const cellPad = compact ? '8px 12px' : '12px 16px'

  return (
    <div style={{ overflowX: 'auto', ...style }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'var(--font-sans, Inter, sans-serif)',
        fontSize: '14px',
        color: 'var(--color-black-700, #28282B)',
        border: bordered ? '1px solid var(--color-white-100, #EAEDF0)' : 'none',
      }}>
        <thead>
          <tr style={{ background: 'var(--color-blue-900, #08428C)' }}>
            {columns.map((col, i) => (
              <th
                key={i}
                style={{
                  padding: cellPad,
                  textAlign: col.align ?? 'left',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  width: col.width !== undefined ? (typeof col.width === 'number' ? `${col.width}px` : col.width) : undefined,
                  borderBottom: '2px solid rgba(255,255,255,0.15)',
                  whiteSpace: 'nowrap',
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                style={{
                  padding: '32px',
                  textAlign: 'center',
                  color: 'var(--color-black-500, #6b6b70)',
                  fontStyle: 'italic',
                }}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                style={{
                  background: striped && rowIdx % 2 === 1 ? 'var(--color-white-200, #F4F4F4)' : '#fff',
                  transition: hoverable ? 'background 0.1s' : undefined,
                }}
                onMouseEnter={hoverable ? (e) => { (e.currentTarget as HTMLTableRowElement).style.background = 'var(--color-white-100, #EAEDF0)' } : undefined}
                onMouseLeave={hoverable ? (e) => {
                  const bg = striped && rowIdx % 2 === 1 ? 'var(--color-white-200, #F4F4F4)' : '#fff'
                  ;(e.currentTarget as HTMLTableRowElement).style.background = bg
                } : undefined}
              >
                {columns.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    style={{
                      padding: cellPad,
                      textAlign: col.align ?? 'left',
                      borderBottom: '1px solid var(--color-white-100, #EAEDF0)',
                      borderRight: bordered && colIdx < columns.length - 1 ? '1px solid var(--color-white-100, #EAEDF0)' : 'none',
                    }}
                  >
                    {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
