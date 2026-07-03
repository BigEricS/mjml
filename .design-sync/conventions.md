# MJML Design System — Conventions

## No provider needed
Components are self-contained; no ThemeProvider or context wrapper is required. Use them directly.

## Styling idiom — inline style props only
This DS uses **no CSS utility classes**. All styling passes through React props:

| Concern | Prop | Example |
|---|---|---|
| Color scheme | `variant`, `background`, `color` | `variant="primary"`, `background="blue"` |
| Size | `size` | `size="sm" \| "md" \| "lg"` |
| Spacing | `padding`, `spacing` | `padding="lg"` |
| Shape | `rounded` | `rounded="md"` |
| Shadow | `shadow` | `shadow="sm" \| "md" \| "lg"` |

For one-off overrides, pass a `style` object. Do not write `className` — there are no utility classes to apply.

## CSS custom properties (tokens)
Global tokens are available once `styles.css` is imported:

```
--color-blue-900: #08428C   /* primary brand blue */
--color-blue-700: #0B4FD9   /* action blue */
--color-blue-300: #41C0F2   /* accent / light blue */
--color-black-700: #28282B  /* primary text */
--color-white-100: #EAEDF0  /* surface / subtle bg */
--color-white-200: #F4F4F4  /* elevated surface */
--font-sans: 'Inter', system-ui, sans-serif
--font-serif: 'DM Serif Display', Georgia, serif
```

Use `var(--color-blue-900)` etc. in any `style={}` prop or custom CSS you write.

## Typography pairing
- **Headings (h1–h3)**: DM Serif Display — use `<Text variant="h1|h2|h3">`
- **UI text**: Inter — use `<Text variant="h4|body|body-sm|label|caption|overline">`
- Never mix: headings go serif, all UI copy goes sans.

## Layout pattern
Wrap page sections in `<Section>`, use `<Container>` + `<Column span={N}>` for multi-column grids (12-col system), and `<Wrapper>` for card-level containers:

```jsx
import { Section, Container, Column, Wrapper, Text, Button } from '@mjml/design-system'

<Section background="light" padding="lg">
  <Container gap="lg">
    <Column span={8}>
      <Text variant="h2">Main heading</Text>
      <Text variant="body" color="muted">Description text.</Text>
    </Column>
    <Column span={4}>
      <Wrapper shadow="md" rounded="md" padding="md">
        <Button variant="primary" fullWidth>Get Started</Button>
      </Wrapper>
    </Column>
  </Container>
</Section>
```

## Where to look
- Token values: `tokens/` in the uploaded bundle
- Per-component API: `components/general/<Name>/<Name>.d.ts`
- Usage guide: `components/general/<Name>/<Name>.prompt.md`
- Global styles: `styles.css` (imports tokens + component CSS)
