import React from 'react'
import { Text } from '@mjml/design-system'

export const TypeScale = () => (
  <div style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Text variant="h1">The Future of Email Design</Text>
    <Text variant="h2">Build Faster, Ship Better</Text>
    <Text variant="h3">Component Architecture</Text>
    <Text variant="h4">Getting Started</Text>
    <Text variant="body">MJML makes responsive email design simple. Write your templates once and render them perfectly across all major email clients, from Gmail to Outlook.</Text>
    <Text variant="body-sm" color="muted">Last updated: December 2024 · 5 min read</Text>
    <Text variant="caption" color="muted">© 2024 MJML Design System</Text>
  </div>
)

export const Labels = () => (
  <div style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Text variant="overline" color="blue">Getting Started</Text>
    <Text variant="label">Email address</Text>
    <Text variant="body-sm" color="muted">Enter the email address associated with your account.</Text>
  </div>
)

export const Colors = () => (
  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <Text variant="h4" color="default">Default — #28282B</Text>
    <Text variant="h4" color="muted">Muted — subdued text</Text>
    <Text variant="h4" color="blue">Blue — brand primary</Text>
    <div style={{ background: '#28282B', padding: '16px', borderRadius: '8px' }}>
      <Text variant="h4" color="white">White — on dark</Text>
    </div>
  </div>
)
