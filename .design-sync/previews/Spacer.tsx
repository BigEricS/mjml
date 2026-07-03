import React from 'react'
import { Spacer, Text, Divider } from '@mjml/design-system'

export const SizeScale = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
      <div key={size}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Text variant="caption" color="muted" style={{ width: '32px', flexShrink: 0 }}>{size}</Text>
          <div style={{ flex: 1, height: '1px', background: '#EAEDF0' }} />
          <Spacer size={size} />
          <div style={{ flex: 1, height: '1px', background: '#EAEDF0' }} />
        </div>
        <div style={{ background: 'var(--color-blue-300, #41C0F2)', opacity: 0.25, height: size === 'xs' ? '4px' : size === 'sm' ? '8px' : size === 'md' ? '16px' : size === 'lg' ? '24px' : size === 'xl' ? '40px' : '64px', marginBottom: '4px' }} />
      </div>
    ))}
  </div>
)

export const InContext = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    <Text variant="h4">Section Title</Text>
    <Spacer size="sm" />
    <Text variant="body" color="muted">A spacer creates consistent vertical rhythm between elements without relying on margin hacks.</Text>
    <Spacer size="lg" />
    <Divider />
    <Spacer size="md" />
    <Text variant="body-sm" color="muted">Next section starts here with predictable spacing.</Text>
  </div>
)
