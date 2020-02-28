import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'

kirkhamTheme.headerColor = "hsla(0,0%,0%,0.85)"
kirkhamTheme.bodyColor = "hsla(0,0%,0%,0.7)";
/* kirkhamTheme.overrideThemeStyles = () => ({
  h1: {
    color: "#333333"
  }
}); */

const typography = new Typography(kirkhamTheme)
export default typography
export const rhythm = typography.rhythm