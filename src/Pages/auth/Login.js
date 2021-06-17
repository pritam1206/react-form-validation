import React from 'react'
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
// Componets
import Button from '../../components/CustomButton'
import Input from '../../components/CustomInput'
import useLocalStorage from '../../Hooks/useLocalStorage'
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
      alert('Invalid login')
    }
  }
  return (
    <Container maxWidth="xs" className={classes.root}>
      <Card>
        <CardContent>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
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
                    Sign in
                  </Typography>
                </Box>
                <Input
                  touched={touched}
                  label="Email Address"
                  name="email"
                  type="email"
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Input
                  touched={touched}
                  label="Password"
                  name="password"
                  type="password"
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />

                <Box my={2}>
                  <Button size="large" label="Login" type="submit" />
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  style={{ textAlign: 'center' }}
                >
                  Don&apos;t have an account?{' '}
                  <RouterLink
                    to="/register"
                    variant="h6"
                    style={{ color: 'green' }}
                  >
                    Sign up
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

Login.prototype = {
  classes: PropTypes.object.isRequired,
}

export default Login
