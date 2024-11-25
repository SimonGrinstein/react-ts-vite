import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

import "./loginForm.css";
import { useAuth } from "../../context/authContext";

function LoginForm() {

  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: 'emilys',
      password: 'emilyspass'
    },
    onSubmit: (values) => {
      console.log(values)
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: values.username,
          password: values.password
        })
      })
        .then(res => res.json())
        .then(data => setUser(data));
    }
  });
  

  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <MyInput onChange={formik.handleChange} value= {formik.values.username} name={"username"}  type={"text"} label={"Type your username"} placeholder={"login"} />
      {/* <MyInput type={"email"} label={"Type your email:"} placeholder={"email"} /> */}
      <MyInput onChange={formik.handleChange} value= {formik.values.password}  name={"password"} type={"password"} label={"Type your password:"} placeholder={"password"} />
      <MyButton myType={"submit"} text={"submit"} isDanger={false} />
    </form>
  );
}

export default LoginForm;
