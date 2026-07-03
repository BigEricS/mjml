import React from 'react'
import { Social } from '@mjml/design-system'

const links = [
  { network: 'twitter' as const, href: '#', label: 'Twitter' },
  { network: 'github' as const, href: '#', label: 'GitHub' },
  { network: 'linkedin' as const, href: '#', label: 'LinkedIn' },
  { network: 'youtube' as const, href: '#', label: 'YouTube' },
]

export const Icons = () => (
  <div style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Social links={links} variant="icons" color="blue" />
    <Social links={links} variant="icons" color="dark" />
    <div style={{ background: '#08428C', padding: '16px', borderRadius: '8px' }}>
      <Social links={links} variant="icons" color="light" />
    </div>
  </div>
)

export const Pills = () => (
  <div style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Social links={links.slice(0, 3)} variant="pills" color="blue" />
    <Social links={links.slice(0, 3)} variant="pills" color="dark" />
  </div>
)

export const LinksVariant = () => (
  <div style={{ padding: '24px', background: '#fff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Social links={links} variant="links" color="blue" />
    <Social links={links} variant="links" direction="column" color="blue" size="sm" />
  </div>
)
