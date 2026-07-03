import React from 'react'
import { Section, Text, Button, Spacer } from '@mjml/design-system'

export const LightSection = () => (
  <Section background="light" padding="lg">
    <Text variant="overline" color="blue">Features</Text>
    <Spacer size="sm" />
    <Text variant="h2">Everything you need to send beautiful email</Text>
    <Spacer size="md" />
    <Text variant="body" color="muted">MJML's component system ensures your emails look great across all clients, from Apple Mail to Outlook 2007.</Text>
    <Spacer size="lg" />
    <Button variant="primary">Explore Components</Button>
  </Section>
)

export const BlueSection = () => (
  <Section background="blue" padding="md" centered>
    <Text variant="h3" color="white">Ready to get started?</Text>
    <Spacer size="md" />
    <Button variant="ghost" style={{ color: '#fff', borderColor: '#fff' }}>Sign up for free</Button>
  </Section>
)

export const DarkSection = () => (
  <Section background="dark" padding="md" maxWidth={800}>
    <Text variant="h3" color="white">Open source and free forever</Text>
    <Spacer size="sm" />
    <Text variant="body" color="white" style={{ opacity: 0.75 }}>Join 50,000+ developers who use MJML to power their email infrastructure.</Text>
  </Section>
)
