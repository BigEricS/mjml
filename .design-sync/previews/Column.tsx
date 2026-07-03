import React from 'react'
import { Column, Text } from '@mjml/design-system'

const Swatch = ({ label, span }: { label: string; span: 1|2|3|4|5|6|7|8|9|10|11|12 }) => (
  <Column span={span}>
    <div style={{
      background: 'var(--color-blue-900, #08428C)',
      color: '#fff',
      padding: '12px 8px',
      borderRadius: '4px',
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      fontWeight: 600,
    }}>
      {label}
    </div>
  </Column>
)

export const Grid = () => (
  <div style={{ padding: '24px', background: '#EAEDF0' }}>
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
      <Swatch label="span 12" span={12} />
    </div>
    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
      <Swatch label="6" span={6} />
      <Swatch label="6" span={6} />
    </div>
    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
      <Swatch label="4" span={4} />
      <Swatch label="4" span={4} />
      <Swatch label="4" span={4} />
    </div>
    <div style={{ display: 'flex', gap: '8px' }}>
      <Swatch label="3" span={3} />
      <Swatch label="3" span={3} />
      <Swatch label="3" span={3} />
      <Swatch label="3" span={3} />
    </div>
  </div>
)

export const AsymmetricLayout = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Column span={8}>
        <div style={{ background: '#EAEDF0', padding: '20px', borderRadius: '8px' }}>
          <Text variant="h4">Main Content Area</Text>
          <Text variant="body-sm" color="muted">Span 8 of 12 — the primary reading column for articles, docs, and prose.</Text>
        </div>
      </Column>
      <Column span={4}>
        <div style={{ background: '#08428C', padding: '20px', borderRadius: '8px', color: '#fff' }}>
          <Text variant="label" color="white">Sidebar</Text>
          <Text variant="body-sm" color="white" style={{ opacity: 0.8 }}>Span 4 of 12 — quick links and metadata.</Text>
        </div>
      </Column>
    </div>
  </div>
)
