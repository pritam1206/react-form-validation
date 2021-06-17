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

import Button from '../../components/CustomButton'
import Input from '../../components/CustomInput'
import User from '../../utils/UserRegister'
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
  const { register } = useLocalStorage([])
  // NavGation to Login if success
  const navigate = useNavigate()
  // submit Form

  const submitHandler = (values) => {
    // Custom class for Registration
    const user = new User(values.name, values.email, values.password)
    register(user)
    alert('User registration successfully Done !')
    navigate('/login', { replace: true })
  }

  return (
    <Container maxWidth="xs" className={classes.root}>
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
                .required('Your name is required'),
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
              conpassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Passwords must match'),
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
                    Register
                  </Typography>
                </Box>
                <Input
                  touched={touched}
                  label="Use Name"
                  name="name"
                  type="text"
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
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
                <Input
                  touched={touched}
                  label="Confirm Password"
                  name="conpassword"
                  type="password"
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Box my={2}>
                  <Button size="large" label="Register" type="submit" />
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
                    Sign in
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
