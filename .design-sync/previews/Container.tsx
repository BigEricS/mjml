import React from 'react'
import { Container, Column, Wrapper, Text, Spacer } from '@mjml/design-system'

export const TwoColumn = () => (
  <div style={{ padding: '24px', background: '#EAEDF0' }}>
    <Container gap="lg">
      <Column span={6}>
        <Wrapper background="white" shadow="sm" rounded="md" padding="md">
          <Text variant="overline" color="blue">Components</Text>
          <Spacer size="xs" />
          <Text variant="h4">13 ready-to-use components</Text>
          <Spacer size="sm" />
          <Text variant="body-sm" color="muted">From Buttons to Hero sections, every component is styled with your exact palette.</Text>
        </Wrapper>
      </Column>
      <Column span={6}>
        <Wrapper background="white" shadow="sm" rounded="md" padding="md">
          <Text variant="overline" color="blue">Tokens</Text>
          <Spacer size="xs" />
          <Text variant="h4">Design tokens built-in</Text>
          <Spacer size="sm" />
          <Text variant="body-sm" color="muted">CSS custom properties for colors, spacing, typography, and radii — all yours to override.</Text>
        </Wrapper>
      </Column>
    </Container>
  </div>
)

export const ThreeColumn = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    <Container gap="md">
      {(['Speed', 'Reliability', 'Accessibility'] as const).map((title, i) => (
        <Column key={i} span={4}>
          <Wrapper background="light" shadow="none" rounded="md" padding="md" bordered>
            <Text variant="h4">{title}</Text>
            <Spacer size="xs" />
            <Text variant="body-sm" color="muted">Engineered from the ground up with {title.toLowerCase()} as a first-class concern.</Text>
          </Wrapper>
        </Column>
      ))}
    </Container>
  </div>
)
