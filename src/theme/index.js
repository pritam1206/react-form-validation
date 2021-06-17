import { createMuiTheme, colors } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    background: {
      dark: colors.common.white, //'#F4F6F8',
      default: '#f5f5f5',
      paper: colors.common.white,
    },
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: colors.indigo[500],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
})

export default theme
