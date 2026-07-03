import React from 'react'
import { Wrapper, Text, Button, Spacer } from '@mjml/design-system'

export const Cards = () => (
  <div style={{ padding: '24px', background: '#EAEDF0', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Wrapper shadow="sm" rounded="md" padding="md" style={{ width: 220 }}>
      <Text variant="h4">Starter</Text>
      <Spacer size="xs" />
      <Text variant="body-sm" color="muted">Perfect for individuals and small teams.</Text>
      <Spacer size="md" />
      <Button variant="secondary" size="sm" fullWidth>Choose Plan</Button>
    </Wrapper>
    <Wrapper shadow="md" rounded="md" padding="md" bordered style={{ width: 220 }}>
      <Text variant="overline" color="blue">Most Popular</Text>
      <Text variant="h4">Pro</Text>
      <Spacer size="xs" />
      <Text variant="body-sm" color="muted">For growing teams that need more power.</Text>
      <Spacer size="md" />
      <Button variant="primary" size="sm" fullWidth>Choose Plan</Button>
    </Wrapper>
    <Wrapper shadow="lg" rounded="md" padding="md" background="blue" style={{ width: 220 }}>
      <Text variant="h4" color="white">Enterprise</Text>
      <Spacer size="xs" />
      <Text variant="body-sm" color="white" style={{ opacity: 0.8 }}>Custom contracts and SLAs for large orgs.</Text>
      <Spacer size="md" />
      <Button variant="ghost" size="sm" fullWidth style={{ color: '#fff', borderColor: '#fff' }}>Contact Sales</Button>
    </Wrapper>
  </div>
)

export const Backgrounds = () => (
  <div style={{ padding: '24px', background: '#EAEDF0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Wrapper background="white" shadow="sm" rounded="md" padding="sm">
      <Text variant="body-sm">White background — default card</Text>
    </Wrapper>
    <Wrapper background="light" shadow="none" rounded="md" padding="sm" bordered>
      <Text variant="body-sm">Light surface — subtle container</Text>
    </Wrapper>
    <Wrapper background="dark" shadow="none" rounded="md" padding="sm">
      <Text variant="body-sm" color="white">Dark background — inverted content</Text>
    </Wrapper>
  </div>
)
