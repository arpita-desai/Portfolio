// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

// const Contact = () => {
//   return (
//     <MDBContainer>
//       <h2 className="h1-responsive font-weight-bold text-center my-5">
//         Get In Touch!
//       </h2>

//       <MDBRow>
//         <MDBCol md="9" className="md-0 mb-5">
//           <form>
//             <MDBRow>
//               <MDBCol md="6">
//                 <div className="md-form mb-0">
//                   <MDBInput type="text" id="contact-name" label="Your name" />
//                 </div>
//               </MDBCol>
//               <MDBCol md="6">
//                 <div className="md-form mb-0">
//                   <MDBInput type="text" id="contact-email" label="Your email" />
//                 </div>
//               </MDBCol>
//             </MDBRow>
//             <MDBRow>
//               <MDBCol md="12">
//                 <div className="md-form mb-0">
//                   <MDBInput type="text" id="contact-subject" label="Subject" />
//                 </div>
//               </MDBCol>
//             </MDBRow>
//             <MDBRow>
//               <MDBCol md="12">
//                 <div className="md-form mb-0">
//                   <MDBInput
//                     type="textarea"
//                     id="contact-message"
//                     label="Your message"
//                   />
//                 </div>
//               </MDBCol>
//             </MDBRow>
//           </form>
//           <div className="text-center text-md-left">
//             <MDBBtn color="primary" size="md">
//               Send
//             </MDBBtn>
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default Contact;

import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      disabled: false,
      emailSent: null
    };
  }

  handleChange = e => {
    console.log(e);

    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      disabled: true
    });
  };

  render() {
    return (
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Get In Touch!
        </h2>

        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5">
            <form onSubmit={this.state.handleSubmit}>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-name"
                      name="name"
                      label="Name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      name="email"
                      id="contact-email"
                      label="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      name="subject"
                      id="contact-subject"
                      label="Subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      name="message"
                      id="contact-message"
                      label="Message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
            <div className="text-center text-md-left">
              <MDBBtn
                color="primary"
                size="md"
                type="submit"
                disabled={this.state.disabled}
              >
                Send
              </MDBBtn>

              {this.state.emailSent === true && <p>Email Sent</p>}
              {this.state.emailSent === false && <p>Email Not Sent</p>}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Contact;
