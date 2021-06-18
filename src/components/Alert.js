import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '2rem 0rem',
  },
}))

export default function CustomizedSnackbars(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert onClose={() => props.handleClose()} severity={props.type}>
        {props.message}
      </Alert>
    </div>
  )
}
