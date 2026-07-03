import React from 'react'
import { Hero } from '@mjml/design-system'

export const Gradient = () => (
  <Hero
    background="gradient"
    overline="Open Source · MIT License"
    title="Build responsive emails in minutes"
    subtitle="MJML's design system brings consistent, accessible components to every screen. Write once, render everywhere."
    ctaLabel="Start Building"
    secondaryCtaLabel="View Docs"
    align="center"
  />
)

export const BlueSolid = () => (
  <Hero
    background="blue"
    title="Trusted by 50,000+ developers"
    subtitle="From startups to Fortune 500 companies, MJML powers email at scale."
    ctaLabel="See Customers"
    align="left"
    overline="Community"
  />
)

export const DarkMode = () => (
  <Hero
    background="dark"
    title="Design systems that scale"
    subtitle="One source of truth for your entire design language."
    ctaLabel="Get Started Free"
    secondaryCtaLabel="Watch Demo"
    align="center"
  />
)

export const LightHero = () => (
  <Hero
    background="light"
    title="Ship emails your customers love"
    subtitle="Beautiful, responsive, accessible — right out of the box."
    ctaLabel="Try MJML"
    align="center"
    overline="New in v5"
  />
)
