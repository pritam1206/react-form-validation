import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import bgImage from '../../Images/not_found.png'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,

    backgroundImage: `url(${bgImage})`,
    display: 'flex',
    justifyContent: 'center',
    background: 'aqua',
    width: '50%',
    height: '70%',
    marginTop: '10%',
  },
}))

const PageNotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} title="404">
      <Typography
        color="textPrimary"
        variant="h4"
        style={{ textAlign: 'center' }}
      >
        Page Not Found
      </Typography>
    </div>
  )
}

export default PageNotFound
