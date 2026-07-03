import React from 'react'
import { Navbar } from '@mjml/design-system'

const navItems = [
  { label: 'Documentation', href: '#', active: true },
  { label: 'Components', href: '#' },
  { label: 'Templates', href: '#' },
  { label: 'Community', href: '#' },
]

export const Light = () => (
  <Navbar
    brand="MJML"
    items={navItems}
    variant="light"
    ctaLabel="Get Started"
  />
)

export const Blue = () => (
  <Navbar
    brand="MJML"
    items={navItems}
    variant="blue"
    ctaLabel="Get Started"
  />
)

export const Dark = () => (
  <Navbar
    brand="MJML"
    items={navItems}
    variant="dark"
    ctaLabel="Sign In"
  />
)

export const NoCtaNav = () => (
  <Navbar
    brand="MJML"
    items={navItems}
    variant="light"
  />
)
