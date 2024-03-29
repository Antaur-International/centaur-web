/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-control-regex */
/* eslint-disable no-useless-escape */
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Popup from '../../layout/lyt-popup';
import axios from "axios";
import { API_HOST } from "../../API/constant";

export default function RegForm() {
  const serialNumber = "zqUCVG-GbBu6k-sWX6H6-A5mbDb-69HSjM-FoFJxx";

  // eslint-disable-next-line no-control-regex
  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  var mediumRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const [userType, setUserType] = React.useState("student");
  const [isValidKey, setIsValidKey] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [passwordMatch, setPasswordMatch] = React.useState(true);
  const [isValidEnrollment, setIsValidEnrollment] = React.useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = React.useState(true);
  const [selectedDepartment, setSelectedDepartment] = React.useState("");
  const [semesters, setSemesters] = React.useState([]);
  const [selectedSemester, setSelectedSemester] = React.useState("");

  const Navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);

  const license = useRef();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const enrollmentNumber = useRef();
  const phoneNumber = useRef();
  const hideShowImage = useRef();
  const hideShowImage2 = useRef();

  const [departmentsAvail, setDepartments] = React.useState([{}]);

  const validateKey = async () => {
    const userEnteredKey = await license.current.value;
    if (userEnteredKey === serialNumber) {
      setIsValidKey(true);
      license.current.className += " validInput";
      license.current.disabled = true;
    } else {
      setIsValidKey(false);
      license.current.className += " invalidInput";
      license.current.disabled = false;
    }
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);

    axios
      .get(`${API_HOST}/department/${e.target.value}`)
      .then((res) => {
        const semesterIds = res.data.department.semesters;
        semesterIds.map((semester, index) => {
          axios
            .get(`${API_HOST}/semester/${semester}`)
            .then((res) => {
              setSemesters((semesters) => [...semesters, res.data.semester]);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const sorted = semesters.sort((a, b) => {
      return a.semesterId - b.semesterId;
    });

    setSemesters(sorted);
  };

  const changePasswordType = (e) => {
    if (password.current.type === "password") {
      password.current.type = "text";
      hideShowImage.current.src = "/centaur-web/images/icons/eye_open.svg";
    } else {
      password.current.type = "password";
      hideShowImage.current.src = "/centaur-web/images/icons/eye_close.svg";
    }
  };

  const changeConfirmPasswordType = (e) => {
    if (confirmPassword.current.type === "password") {
      confirmPassword.current.type = "text";
      hideShowImage2.current.src = "/centaur-web/images/icons/eye_open.svg";
    } else {
      confirmPassword.current.type = "password";
      hideShowImage2.current.src = "/centaur-web/images/icons/eye_close.svg";
    }
  };

  React.useEffect(() => {
    axios.get(`${API_HOST}/department`).then((res) => {
      if (res.data.success) {
        setDepartments(res.data.departments);
      } else {
        console.log("An error occurred");
      }
    });
  }, []);

  // Validation part is under development
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.current.value === "" ||
      email.current.value === "" ||
      password.current.value === "" ||
      confirmPassword.current.value === "" ||
      phoneNumber.current.value === ""
    ) {
      if (userType === "student") {
        if (enrollmentNumber.current.value === "") {
          setIsOpen(true);
          alert("Please fill all the fields");
        }
      }
      setIsOpen(true);
      alert("Please fill all the fields");
    } else {
      let user = {
        type: userType,
        privilege: userType === "student" ? "student" : "admin",
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
        phoneNum: phoneNumber.current.value,
        department: selectedDepartment,
        semester: selectedSemester,
      };

      if (userType === "staff") {
        user = {
          ...user,
          en_number: "",
        };
      }

      if (userType === "student") {
        user = {
          ...user,
          en_number: enrollmentNumber.current.value,
        };
      }

      axios
        .post(`${API_HOST}/user/register`, user)
        .then((res) => {
          if (res.data.success) {
            alert("User registered successfully");
            Navigate("/login");
          } else {
            alert("User registration failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form className="register_page_form">
      {/* Still working on this popup box */}
      {/* {isOpen && <Popup onClose={() => setIsOpen(false)}>
                <p className='popupAlert'>Please fill all the details</p>
            </Popup>} */}

      <div className="page_form_div">
        <label>User</label>
        <select onChange={(e) => setUserType(e.target.value)}>
          <option value="none" disabled>
            Select User
          </option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
      </div>
      <div className="page_form_wrapper">
        {userType === "staff" && (
          <div className="page_form_div">
            <label>License</label>
            <input
              type="text"
              placeholder="XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX"
              ref={license}
              onChange={validateKey}
            />
          </div>
        )}

        <div className="page_form_div">
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name"
            ref={name}
            disabled={!isValidKey && userType === "staff"}
            onBlur={() => {
              if (name.current.value !== "")
                name.current.className = "validInput";
            }}
          />
        </div>

        <div className="page_form_div">
          <label>Email</label>
          <input
            type="email"
            placeholder="name@example.com"
            ref={email}
            disabled={!isValidKey && userType === "staff"}
            onBlur={() => {
              if (email.current.value !== "") {
                if (emailRegex.test(email.current.value)) {
                  setIsValidEmail(true);
                  email.current.className = " validInput";
                } else {
                  setIsValidEmail(false);
                  email.current.className = " invalidInput";
                }
              }
            }}
          />
          {!isValidEmail && (
            <p className="errorTxt">Not a valid email address!</p>
          )}
        </div>
        <div className="page_form_div">
          <label>Password</label>
          <div className="form_div_password_input">
            <input
              type="password"
              placeholder="********"
              ref={password}
              disabled={!isValidKey && userType === "staff"}
              onBlur={() => {
                if (password.current.value !== "") {
                  if (mediumRegex.test(password.current.value)) {
                    setIsValidPassword(true);
                    password.current.parentElement.className =
                      "form_div_password_input validInput";
                  } else {
                    console.log();
                    setIsValidPassword(false);
                    password.current.parentElement.className =
                      "form_div_password_input invalidInput";
                  }
                }
              }}
            />
            <button onClick={changePasswordType} type="button">
              <img
                src="/images/icons/eye_close.svg"
                alt=""
                ref={hideShowImage}
              />
            </button>
          </div>
          {!isValidPassword && (
            <p className="errorTxt">
              Password must be at least 8 characters long and contain at least
              one number, one lowercase and one uppercase letter
            </p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="page_form_div">
          <label>Confirm Password</label>
          <div className="form_div_password_input">
            <input
              type="password"
              placeholder="********"
              ref={confirmPassword}
              disabled={!isValidKey && userType === "staff"}
              onChange={() => {
                if (confirmPassword.current.value !== "") {
                  if (
                    password.current.value === confirmPassword.current.value
                  ) {
                    setPasswordMatch(true);
                    confirmPassword.current.parentElement.className =
                      "form_div_password_input validInput";
                  } else {
                    setPasswordMatch(false);
                    confirmPassword.current.parentElement.className =
                      "form_div_password_input invalidInput";
                  }
                }
              }}
            />
            <button type="button" onClick={changeConfirmPasswordType}>
              <img
                src="/images/icons/eye_close.svg"
                alt=""
                ref={hideShowImage2}
              />
            </button>
          </div>
          {!passwordMatch && (
            <p className="errorTxt">Password does not match!</p>
          )}
        </div>

        {/* ENROLLMENT NUMBER */}
        {userType !== "staff" && (
          <div className="page_form_div">
            <label>Enrollment Number</label>
            <div className="form_div_input_prefix">
              <span>EN</span>
              <input
                type="number"
                placeholder="XXXXXXXX"
                ref={enrollmentNumber}
                disabled={!isValidKey && userType === "staff"}
                onBlur={() => {
                  if (enrollmentNumber.current.value !== "") {
                    if (enrollmentNumber.current.value.length === 10) {
                      setIsValidEnrollment(true);
                      enrollmentNumber.current.parentElement.className =
                        "form_div_input_prefix validInput";
                    } else {
                      setIsValidEnrollment(false);
                      enrollmentNumber.current.parentElement.className =
                        "form_div_input_prefix invalidInput";
                    }
                  }
                }}
              />
            </div>
            {!isValidEnrollment && (
              <p className="errorTxt">
                Please enter a valid enrollment number!
              </p>
            )}
          </div>
        )}

        {/* SELECT DEPARTMENT */}
        <div className="page_form_div">
          <label>Select Department</label>
          <select
            disabled={!isValidKey && userType === "staff"}
            onChange={handleDepartmentChange}
          >
            <option value="none" disabled selected="true">
              Select Department
            </option>
            {departmentsAvail.map((item, key) => {
              return <option value={item._id}>{item.department_name}</option>;
            })}
          </select>
        </div>

        {/* SELECT SEMESTER */}
        <div className="page_form_div">
          <label>Select Semester</label>
          <select
            disabled={semesters.length === 0}
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedSemester(e.target.value);
            }}
          >
            {semesters.map((item, key) => {
              return <option value={item._id}>{item.name}</option>;
            })}
          </select>
        </div>

        {/* PHONE NUMBER */}
        <div className="page_form_div">
          <label>Phone number</label>
          <div className="form_div_input_prefix">
            <span>+91</span>
            <input
              type="number"
              placeholder="XXXXXXXX"
              ref={phoneNumber}
              maxLength="10"
              disabled={!isValidKey && userType === "staff"}
              onBlur={() => {
                if (phoneNumber.current.value !== "") {
                  if (phoneNumber.current.value.length === 10) {
                    setIsValidPhoneNumber(true);
                    phoneNumber.current.parentElement.className =
                      "form_div_input_prefix validInput";
                  } else {
                    setIsValidPhoneNumber(false);
                    phoneNumber.current.parentElement.className =
                      "form_div_input_prefix invalidInput";
                  }
                }
              }}
            />
          </div>
          {!isValidPhoneNumber && (
            <p className="errorTxt">Please enter a valid phone number!</p>
          )}
        </div>
      </div>

      <div className="page_form_links">
        <Link to="/login">Already have an account?</Link>
      </div>

      <button to="/login" className="page_form_btn" onClick={handleSubmit}>
        Register
      </button>
    </form>
  );
}
