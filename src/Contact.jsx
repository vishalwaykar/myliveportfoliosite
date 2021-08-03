import React, { useState } from "react";

const Contact = () => {
  const [data,setData] = useState({
    fname : "",
    phone : "",
    email : "",
    message  : ""
  });
  const formSubmit = (event)=>
  {
    event.preventDefault();
    alert(`Your Details : \n Name : ${data.fname} \n Phone : ${data.phone} \n Email : ${data.email} \n Message : ${data.message}`);
  }

  const inputEvent = (event)=>
  {
    const {name,value} = event.target;
    setData((prevVal)=>{
      return {
        ...prevVal,
        [name]:value,
      }
    })
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto mb-5">
            <form className="mb-3" onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Sundar Pichai"
                  onChange={inputEvent}
                  name="fname"
                  value={data.fname}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+919999999999"
                  onChange={inputEvent}
                  name="phone"
                  value={data.phone}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={inputEvent}
                  name="message"
                  value={data.message}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
