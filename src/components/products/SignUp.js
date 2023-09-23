import React, { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
// import { Mycontext } from '../context/Context';
import { Mycontext } from "../../Usecontext";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Mycontext);

  const register = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.pwd.value;
    //  const emailvalid=user.filter((item)=>item.email===email)
    //  if( emailvalid.length!==0){
    //   alert("Email already exist")
    // }els
    console.log(event.target.name.value);
    setUser([
      ...user,
      { name: name, email: email, password: password },
    ]);
    navigate('/login');

    // }
    // console.log(name);
    event.target.reset();
  };
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <form onSubmit={register}>
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="name"
                    type="text"
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput label="Your Email" id="email" type="email" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput label="Password" id="pwd" type="password" />
                </div>

                <MDBBtn
                  className="mb-4"
                  size="lg"
                  type="submit"
                >
                  Register
                </MDBBtn>
              </form>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://img.freepik.com/free-photo/gray-sofa-white-living-room-with-copy-space_43614-909.jpg?t=st=1694779343~exp=1694779943~hmac=6e198a4296d30f785f96d298475577c8d66e75cf1ecfceaccf51d413e3d61018"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
export default SignUp;
