const fallbackFonts =
  "Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI', Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol'"
const Fonts = {
  body: `'Montserrat', ${fallbackFonts}`,
  head: `'Fjalla One', ${fallbackFonts}`,
}

const Colors = {
  text: '#241C23',
  white: '#FFFFFF',
  light: '#FBFBFB',
  primary: 'blue',
  shade: '#D48C94',
  secondary: '#252525',
}

let Media = '750px'

Media = `@media screen and (max-width: ${Media})`

export { Fonts, Colors, Media }
