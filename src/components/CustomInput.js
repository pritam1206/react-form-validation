import React from 'react'
import { TextField } from '@material-ui/core'
/**
 * Custom User Input Component
 *
 * @export
 * @param {*} props
 * @return {*} value
 * @param callback function handleBlur
 * @param callback function handle
 */

export default function CustomInput(props) {
  // destructuring Props
  const { label, name, type, touched, errors, handleBlur, handleChange } = props

  return (
    <TextField
      error={Boolean(touched[name] && errors[name])}
      fullWidth
      helperText={touched[name] && errors[name]}
      label={label}
      onBlur={handleBlur}
      onChange={handleChange}
      margin="normal"
      name={name}
      type={type}
      variant="outlined"
    />
  )
}
