import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {getThemeColors, inputStyle, getButtonStyle, errorStyle, fieldWrapper } from '../utils.js'
import {AppSnackbar, useAppSnackbar} from '../utilsSnack.jsx'

function Login({switchToSignup, themeProvider }) {

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });
  const {textColor, spanColor} =getThemeColors(themeProvider);
  const {
    openSnackbar,
    snackbarMessage,
    snackbarSeverity,
    setOpenSnackbar,
    showSnackbar
  } = useAppSnackbar()
  const buttonStyle = getButtonStyle(themeProvider);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "85%", marginTop: "10px" , display:'flex',flexDirection:'column',gap:"28px" }}>
          <AppSnackbar
          open={openSnackbar}
          onClose={()=>setOpenSnackbar(false)}
          message={snackbarMessage} 
          severity={snackbarSeverity} >
            
            </AppSnackbar>   
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const savedUser = JSON.parse(localStorage.getItem('userSignup'));
            if (savedUser) {
              if (values.email === savedUser.email && values.password === savedUser.createPassword) {
              showSnackbar("Login Succesfull", "success")
              return

              } else {
               showSnackbar("Email and Password are invalid", "error")
              }
            } else {
              showSnackbar("No user found","warning")
            }
            console.log("login form ", values);
          }}
        > {({ errors, touched }) => (
            <Form>
              <div style={fieldWrapper}>

              <Field name="email" type="email" placeholder="Email" style={inputStyle} />
              {errors.email && touched.email && (
                <p style={errorStyle}>{errors.email}</p>
              )}
              </div >
              <div style={fieldWrapper}>
              <Field name="password" type="password" placeholder="Password" style={inputStyle} />
              {errors.password && touched.password && (
                <p style={errorStyle}>{errors.password}</p>
              )}

              <p style={{
                textAlign: "right",
                margin: "5px 0 15px 0",
                fontSize:'14px',
                color: textColor,
                cursor: "pointer"
              }}>
                Forgot password ?
              </p>

              <button type="submit" style={buttonStyle}>Login</button>
              </div>
            </Form>
          )}
        </Formik>
        <p style={{padding:'20px' ,marginTop:'10px', textAlign:'center' , color:textColor}}> Not a member ? <span style={{color: spanColor ,cursor:'pointer'}} onClick={switchToSignup}>Signup now</span> </p>
      </div>
    </div>
  )
}

export default Login
