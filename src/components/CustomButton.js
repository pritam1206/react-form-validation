import React from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

function CustomButton(props) {
  return (
    <Button
      color="primary"
      fullWidth
      size={props.size}
      type={props.type}
      variant="contained"
    >
      {props.label}
    </Button>
  )
}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

export default CustomButton
