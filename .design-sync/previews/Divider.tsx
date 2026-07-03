import React from 'react'
import { Divider, Text } from '@mjml/design-system'

export const Styles = () => (
  <div style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column' }}>
    <Text variant="body-sm" color="muted">subtle</Text>
    <Divider color="subtle" />
    <Text variant="body-sm" color="muted">default</Text>
    <Divider color="default" />
    <Text variant="body-sm" color="muted">blue</Text>
    <Divider color="blue" thickness={2} />
    <Text variant="body-sm" color="muted">accent</Text>
    <Divider color="accent" thickness={2} />
  </div>
)

export const WithLabel = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    <Divider label="OR CONTINUE WITH" color="default" />
    <Divider label="Components" color="blue" spacing="lg" />
    <Divider label="Section Break" color="accent" thickness={2} />
  </div>
)

export const Thickness = () => (
  <div style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column' }}>
    <Text variant="caption" color="muted">1px</Text>
    <Divider thickness={1} color="blue" />
    <Text variant="caption" color="muted">2px</Text>
    <Divider thickness={2} color="blue" />
    <Text variant="caption" color="muted">4px</Text>
    <Divider thickness={4} color="blue" />
  </div>
)
