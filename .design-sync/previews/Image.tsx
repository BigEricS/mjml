import React from 'react'
import { Image } from '@mjml/design-system'

const src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'

export const Rounded = () => (
  <div style={{ padding: '24px', background: '#EAEDF0', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Image src={src} alt="Mountain landscape" width={160} height={120} rounded="none" />
    <Image src={src} alt="Mountain landscape" width={160} height={120} rounded="sm" />
    <Image src={src} alt="Mountain landscape" width={160} height={120} rounded="md" />
    <Image src={src} alt="Mountain landscape" width={160} height={120} rounded="lg" />
  </div>
)

export const WithCaption = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    <Image
      src={src}
      alt="Mountain landscape at golden hour"
      width={400}
      height={240}
      rounded="md"
      caption="The Swiss Alps at golden hour — a breathtaking vista used in MJML's welcome campaign."
    />
  </div>
)

export const Bordered = () => (
  <div style={{ padding: '24px', background: '#fff', display: 'flex', gap: '16px' }}>
    <Image src={src} alt="Landscape" width={180} height={120} rounded="md" bordered />
    <Image src={src} alt="Landscape" width={180} height={120} rounded="full" fit="cover" />
  </div>
)
