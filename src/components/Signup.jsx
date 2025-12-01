import React from 'react'
import {Formik, Field, Form}from 'formik'
import * as Yup from 'yup';
import {getThemeColors, inputStyle,getButtonStyle ,errorStyle, fieldWrapper} from '../utils.js'
import {AppSnackbar, useAppSnackbar} from '../utilsSnack.jsx'
function Signup({ switchToLogin, themeProvider }) {

  const validateSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("enter a valid email").required("Email is required"),
    phone: Yup.string().length(10, "Phone number must be 10 digits").required("Phone number is required"),
    createPassword: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    conformPassword: Yup.string().oneOf([Yup.ref('createPassword'), null], "Passwords must match").required("Confirm Password is required")
  });
  const {textColor, spanColor} = getThemeColors(themeProvider)
  const { setOpenSnackbar, showSnackbar, snackbarMessage, snackbarSeverity, openSnackbar} = useAppSnackbar();
  const buttonStyle = getButtonStyle(themeProvider);
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div style={{ width: "85%", marginTop: "10px", display:'flex',flexDirection:'column',gap:"28px"}}>
          <AppSnackbar
          open={openSnackbar}
          onClose={()=>setOpenSnackbar(false)}
          message={snackbarMessage}
          severity={snackbarSeverity}>

          </AppSnackbar>
      <Formik
        initialValues={{ name: "", email: "", phone: "", createPassword: "", conformPassword: "" }}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          console.log("Form submitted", values);
          localStorage.setItem('userSignup', JSON.stringify(values));
          showSnackbar("SignUp succesfully", "success");
        }}
      >
        {({ errors, touched }) => (
          <Form>
             <div style={fieldWrapper}>
            <Field name="name" type="text" placeholder="Name" style={inputStyle} />
            {errors.name && touched.name && <p style={errorStyle}>{errors.name}</p>}
             </div>
              <div style={fieldWrapper}>
            <Field name="email" type="email" placeholder="Email" style={inputStyle} />
            {errors.email && touched.email && <p style={errorStyle}>{errors.email}</p>}
             </div>
            <div style={fieldWrapper}>
            <Field name="phone" type="text" placeholder="Mobile No." style={inputStyle} />
            {errors.phone && touched.phone && <p style={errorStyle}>{errors.phone}</p>}
            </div>
              <div style={fieldWrapper}>
            <Field name="createPassword" type="password" placeholder="Create Password" style={inputStyle} />
            {errors.createPassword && touched.createPassword && <p style={errorStyle}>{errors.createPassword}</p>}
            </div>
              <div style={fieldWrapper}>
            <Field name="conformPassword" type="password" placeholder="Confirm Password" style={inputStyle} />
            {errors.conformPassword && touched.conformPassword && <p style={errorStyle}>{errors.conformPassword}</p>}
            </div>
            <button type="submit" style={buttonStyle}>Submit</button>

            <p style={{ padding: "20px", textAlign: "center", color : textColor }}>
              Already have an account ?
              <span
                style={{ color: spanColor, cursor: "pointer" ,margin:'5px'}}
                onClick={switchToLogin}
              >
                Login now
              </span>
            </p>
            
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
}

export default Signup;
