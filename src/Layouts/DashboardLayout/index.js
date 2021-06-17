import React from 'react'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import NavigationBar from './NavigationBar'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    ustifyContent: 'center',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}))
/// After getting successfully Login internal Pages structure
const DashboardLayout = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <NavigationBar className={classes.nav} />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
