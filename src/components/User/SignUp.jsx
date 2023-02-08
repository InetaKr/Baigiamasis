import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import UserContext from "../../context/UserContext";

const SignUp = () => {
  
    const initialValues = {
        userName: '',  
        email: '',
        password: '',
        confirmPassword: '',
        avatar: ''
    };
    const {users, addNewUser, setLoggedInUser } = useContext(UserContext);
    const [invalidUsername, setInvalidUsername] = useState(false);
    const navigate = useNavigate()
  
    const handleSubmit = (values,{ setSubmitting }) =>{
      if (values.password !== values.confirmPassword){
        setSubmitting(false);
        return;
      }if (users.find(user => user.userName === values.userName)) {
        setInvalidUsername(true);
        setSubmitting(false);
      } else {
      let newUser = {
          userName:values.userName,
          email:values.email,
          password:values.password,
          avatar:values.avatar,
          id: Date.now()
        };
        
        addNewUser(newUser);
        setLoggedInUser(newUser);
        navigate('/');
      
      }}
    
  
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  
    const validationSchema = yup.object().shape({
      userName: yup.string()
        .max (15, 'Must be 10 characters or less')
        .required ('Required'),  
      email: yup.string()
        .email ('Must be valid email')
        .test('email-exists', 'Email already exists', value => {
          return users.find(user => user.email === value) ? false : true;
        })
        .max(255)
        .required('Email is required'),
        password: yup.string()
        .min(5)
        .matches(passwordRules, {message: "Password must contain at least 5 characters, one uppercase, one number and one lowercase character"})
        .required('Required'),
     confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Password must match')
        .required('Required'),
        avatar: yup.string()
        .required('Required') 
    })
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values,errors, touched, setValues }) => (
          <div className="form-wrapper">
          <Form  className="form">
            <h1>Sign Up</h1>
            <div className="label-wrapper">
            <label>
          User name:
          <Field
           type="text" name="userName" value={values.userName}
          onChange={(e) => setValues({ ...values, userName: e.target.value })}
          
          />
           {invalidUsername && <span>Username already taken</span>}
           {
           errors.userName && touched.userName ?
            <span>{errors.userName}</span>
            : null
           }
        </label>
             <label>
              Email:
            <Field 
              type="email" name="email" value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />  
            {errors.email && touched.email ? 
              <div className="error-message">{errors.email}</div>
              :null
            }
            </label>
            <label>
              Password:
            <Field 
              type="password" name="password" value={values.password} 
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
            {errors.password && touched.password ? 
              <div className="error-message">{errors.password}</div>
              :null
            }
            </label>
            <label>
              Confirm Password:
            <Field 
              type="password" name="confirmPassword" value={values.confirmPassword}  
              onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
            />
            {errors.confirmPassword && touched.confirmPassword ?
              <div className="error-message">{errors.confirmPassword}</div>
              : null
            }
            </label>
            <label>
          User Avatar:
          <Field
          type="url" name="avatar" value={values.avatar}
            onChange={(e) => setValues({ ...values, avatar: e.target.value })}
          />
           {errors.avatar && touched.avatar ? (
            <span>{errors.avatar}</span>
          ) : null}
        </label>
            </div>
            <div>
          <input type="submit" value="Sign Up" />
          </div>
          </Form>
          </div>
        )}
      </Formik>
    );
  
    
  };
  
  export default SignUp;