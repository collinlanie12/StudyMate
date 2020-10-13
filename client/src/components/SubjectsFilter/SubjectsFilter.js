import React, { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";


function SubjectsFilter(props) {
  const auth = useContext(AuthContext);

  const [subjectArr, setSubjectArr] = useState([]);

  useEffect(() => {
    API.Subjects.getAll(auth.authToken)
      .then(response => {
        setSubjectArr(response.data);
      });

  }, []);

  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Control as="select" onChange={(e) => { props.onSubjectChange(e.target.value) }}>
          <option value="0" key="0">All</option>
        {subjectArr.map(subject => (
          <option value={subject.id} key={subject.id}>{subject.subject}</option>
        ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SubjectsFilter;
