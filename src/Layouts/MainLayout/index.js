import React from 'react'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
// import bgImage from '../../Images/bgImage.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #00AAFF, #00FF6C)',
    backgroundColor: theme.palette.background.default,
    //backgroundImage: `url(${bgImage})`,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
}))
// Page Layout for out side dashboard page Like Login ,register or 404
const MainLayout = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
