import { useFormik } from "formik";
import UserContext from "./UserContext";
import { useContext } from "react";

function Contact() {
  const userData = useContext(UserContext)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
      userData.setUserName(values.name)
    },
  });
  return (
    <div className="container">
      <h1>Contact</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea 
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
