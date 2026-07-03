import React from 'react'
import { Button } from '@mjml/design-system'

export const Variants = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', padding: '24px', background: '#fff' }}>
    <Button variant="primary">Get Started</Button>
    <Button variant="secondary">Learn More</Button>
    <Button variant="ghost">Cancel</Button>
    <Button variant="danger">Delete Account</Button>
  </div>
)

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '24px', background: '#fff' }}>
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Medium</Button>
    <Button variant="primary" size="lg">Large</Button>
  </div>
)

export const States = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', padding: '24px', background: '#fff' }}>
    <Button variant="primary">Active</Button>
    <Button variant="primary" disabled>Disabled</Button>
    <Button variant="primary" loading>Loading</Button>
    <Button variant="secondary" fullWidth>Full Width Button</Button>
  </div>
)
