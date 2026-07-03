import React from 'react'
import { Table } from '@mjml/design-system'

const columns = [
  { key: 'name', label: 'Component' },
  { key: 'group', label: 'Group' },
  { key: 'version', label: 'Version', align: 'center' as const },
  { key: 'status', label: 'Status', render: (v: unknown) => (
    <span style={{
      display: 'inline-block',
      padding: '2px 10px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: 600,
      background: v === 'Stable' ? '#E8F5E9' : v === 'Beta' ? '#FFF3E0' : '#EDE7F6',
      color: v === 'Stable' ? '#2E7D32' : v === 'Beta' ? '#E65100' : '#6A1B9A',
    }}>{String(v)}</span>
  )},
]

const rows = [
  { name: 'Button', group: 'Actions', version: '1.0.0', status: 'Stable' },
  { name: 'Hero', group: 'Layout', version: '1.0.0', status: 'Stable' },
  { name: 'Navbar', group: 'Navigation', version: '1.0.0', status: 'Stable' },
  { name: 'Table', group: 'Data', version: '1.0.0', status: 'Stable' },
  { name: 'Social', group: 'Media', version: '1.0.0', status: 'Beta' },
]

export const Default = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    <Table columns={columns} rows={rows} striped hoverable />
  </div>
)

export const Compact = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    <Table columns={columns} rows={rows} compact striped={false} bordered />
  </div>
)

export const Empty = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    <Table columns={columns} rows={[]} emptyMessage="No components match your search." />
  </div>
)
