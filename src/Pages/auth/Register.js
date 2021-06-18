import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
  Box,
  Container,
  Typography,
  makeStyles,
  CardContent,
  Card,
} from '@material-ui/core'

import Button from '../../components/CustomButton'
import Input from '../../components/CustomInput'
import User from '../../utils/UserRegister'
import ALERT from '../../components/Alert'
import * as ACTIONLABEL from '../../utils/constant'
import useLocalStorage from '../../Hooks/useLocalStorage'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(7),
  },
}))

/**
 *
 * Register User and stroe in Local storage !
 * @param {*} props classes
 * @return {*} void
 * @param {Name :string email :string password: string}
 */
const Register = () => {
  const classes = useStyles()
  const { register, isExist } = useLocalStorage()
  const [isReg, setReg] = useState(false)
  const [isAvailable, setAvailable] = useState(false)
  const [alertMessage, setMessage] = useState('')
  // NavGation to Login if success
  const navigate = useNavigate()
  // submit Form

  const submitHandler = (values) => {
    // Custom class for Registration
    const user = new User(values.name, values.email, values.password)
    isExist(user)
      .then((res) => {
        if (res === undefined) {
          register(user)
          setMessage(ACTIONLABEL.SUCCESS_RES)
          setReg(true)
          return
        }
        setAvailable(true)
        setMessage(ACTIONLABEL.USER_EXISTS)
        return
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleClose = () => {
    if (isAvailable) return setAvailable(false)
    navigate('/login', { replace: true })
  }

  return (
    <Container maxWidth="xs" className={classes.root}>
      {isReg && (
        <ALERT
          message={alertMessage}
          type="success"
          handleClose={handleClose}
        />
      )}
      {isAvailable && (
        <ALERT
          message={alertMessage}
          type="warning"
          handleClose={handleClose}
        />
      )}
      <Card>
        <CardContent>
          <Formik
            initialValues={{
              email: '',
              password: '',
              name: '',
              conpassword: '',
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .min(3, 'Mininum 2 characters')
                .max(30, 'Maximum 30 characters')
                .required(ACTIONLABEL.REQUIRED_NAME),
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required(ACTIONLABEL.REQUIRED_EMAIL),
              password: Yup.string()
                .max(255)
                .required(ACTIONLABEL.REQUIRED_PASSWORD),
              conpassword: Yup.string()
                .oneOf(
                  [Yup.ref('password'), null],
                  ACTIONLABEL.REQUIRED_PASSMATCH,
                )
                .required(ACTIONLABEL.REQUIRED_PASSMATCH),
            })}
            onSubmit={(values) => submitHandler(values)}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h5"
                    style={{ textAlign: 'center' }}
                  >
                    {ACTIONLABEL.REGISTER}
                  </Typography>
                </Box>
                <Input
                  touched={touched}
                  label={ACTIONLABEL.USERNAME}
                  name="name"
                  type="text"
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Input
                  touched={touched}
                  label={ACTIONLABEL.EMAIL}
                  name="email"
                  type="email"
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Input
                  touched={touched}
                  label={ACTIONLABEL.PASSWORD}
                  name="password"
                  type="password"
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Input
                  touched={touched}
                  label={ACTIONLABEL.CONFIRMPAWWORD}
                  name="conpassword"
                  type="password"
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Box my={2}>
                  <Button
                    size="large"
                    label={ACTIONLABEL.REGISTER}
                    type="submit"
                  />
                </Box>
                <Typography
                  color="textSecondary"
                  style={{ textAlign: 'center' }}
                >
                  Have an account?{' '}
                  <RouterLink
                    to="/login"
                    variant="h6"
                    style={{ color: '#2FC8D5' }}
                  >
                    {ACTIONLABEL.SIGNIN}
                  </RouterLink>
                </Typography>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}
Register.prototype = {
  classes: PropTypes.object.isRequired,
}
export default Register
