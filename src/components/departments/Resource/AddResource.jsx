/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from "react";
import axios from "axios";
import { API_HOST } from "../../../API/constant";

export default function AddResource({ user, setIsOpen }) {
  const [subjects, setSubjects] = React.useState([]);
  const [currentSubject, setCurrentSubject] = React.useState("");
  const resourceRef = useRef();
  const resourceNameRef = useRef();
  const resourceDescriptionRef = useRef();

  React.useEffect(() => {
    setSubjects(user.batch.subjects);
  }, []);

  const handleSubjectChange = (e) => {
    setCurrentSubject(e.target.value);
  };

  const uploadResource = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", resourceRef.current.files[0]);
    formData.append("user_id", user._id);

    // for (var p of formData) {
    // console.log(p);
    // }

    axios
      .post(`${API_HOST}/file/upload`, formData)
      .then((res) => {
        const data = {
          resource_name: resourceNameRef.current.value,
          resource_description: resourceDescriptionRef.current.value,
          resource_attachments: res.data.file,
          resource_subject: currentSubject,
          resource_created_by: user._id,
        };

        // console.log(data);

        axios
          .post(`${API_HOST}/resource`, data)
          .then((res) => {
            // console.log(res);
            setIsOpen(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log("hit");
        console.log(err);
      });
  };

  return (
    <div className="modal_wrapper_center">
      <div className="wrapper_center_modal">
        <div className="center_modal_header">
          <h2>Add a new file</h2>
        </div>
        <button
          className="center_modal_closeBtn btn"
          onClick={() => setIsOpen(false)}
        >
          <img src="/centaur-web/images/icons/cross-red.svg" alt="" />
        </button>
        <form className="center_modal_form">
          <div className="page_form_div">
            <label className="subject_label">Resource Name:</label>
            <div className="form_div_password_input">
              <input
                className="subject_input"
                type="text"
                placeholder="Enter Resource Name:"
                ref={resourceNameRef}
              />
            </div>
          </div>
          <div className="page_form_div">
            <label className="subject_label">Resource Desc:</label>
            <div className="form_div_password_input">
              <textarea
                className="subject_input"
                type="text"
                ref={resourceDescriptionRef}
              />
            </div>
          </div>
          <div className="page_form_div">
            <label className="subject_label">Select Subject</label> <br />
            <select onChange={handleSubjectChange} className="subject_select">
              <option value="none" disabled selected="true">
                Select Subject
              </option>
              {subjects.map((item, key) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>
          </div>
          <div className="modal_form_inputGrp">
            <label>Upload a file</label>
            <input ref={resourceRef} type="file" name="file" id="file" />
          </div>
          <button onClick={uploadResource} className="modal_form_uploadBtn">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
