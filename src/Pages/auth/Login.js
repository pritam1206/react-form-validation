import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
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
// Componets
import Button from '../../components/CustomButton'
import Input from '../../components/CustomInput'
import ALERT from '../../components/Alert'

import useLocalStorage from '../../Hooks/useLocalStorage'
import * as ACTIONLABEL from '../../utils/constant'
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(7),
  },
}))

const Login = (props) => {
  const classes = useStyles()
  const { user } = useLocalStorage([])
  const [isLogin, setLogin] = useState(false)
  const [alertMessage, setMessage] = useState('')
  // NavGation to  DashboardLayout if success
  const navigate = useNavigate()

  // Submit Login Form
  const submitForm = async (values) => {
    const isUser = await user.find(
      (items) =>
        items.email === values.email && items.password === values.password,
    )
    if (isUser) {
      navigate('/app/dashboard', { replace: true })
    } else {
      setLogin(true)
      setMessage(ACTIONLABEL.INVALID_CREDENTIAL)
    }
  }
  const handleClose = () => {
    setLogin(false)
  }
  return (
    <Container maxWidth="xs" className={classes.root}>
      {isLogin && (
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
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email(ACTIONLABEL.ERROR_EMAIL)
                .max(255)
                .required(ACTIONLABEL.REQUIRED_EMAIL),
              password: Yup.string()
                .max(255)
                .required(ACTIONLABEL.REQUIRED_PASSWORD),
            })}
            onSubmit={(values) => submitForm(values)}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h4"
                    style={{ textAlign: 'center' }}
                  >
                    {ACTIONLABEL.SIGNIN}
                  </Typography>
                </Box>
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

                <Box my={2}>
                  <Button
                    size="large"
                    label={ACTIONLABEL.LOGIN}
                    type="submit"
                  />
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  style={{ textAlign: 'center' }}
                >
                  Don&apos;t have an account?{' '}
                  <a href="/register">{ACTIONLABEL.SIGNUP}</a>
                </Typography>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}

Login.prototype = {
  classes: PropTypes.object.isRequired,
}

export default Login
