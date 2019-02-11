import React, { useState } from "react";
import { v4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function AddStudentsForm(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);

  const handleNameChange = function(e) {
    setName(e.target.value);
  };

  const handleSurnameChange = function(e) {
    setSurname(e.target.value);
  };

  const handleAgeChange = function(e) {
    setAge(e.target.value);
  };

  const handleAddStudentClick = function() {
      debugger;
    const id = v4();
    const student = {
      name,
      surname,
      age,
      id
    };
    props.addStudent(student);
  };

  return (
    <div>
      <div>
        <TextField
          className="textField"
          type="text"
          variant="outlined"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <TextField
          className="textField"
          type="text"
          variant="outlined"
          placeholder="surname"
          value={surname}
          onChange={handleSurnameChange}
        />
      </div>
      <div>
        <TextField
          className="textField"
          type="age"
          variant="outlined"
          placeholder="number"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <Button
        className="addStudentButton"
        onClick={handleAddStudentClick}
        variant="contained"
        color="primary"
      >
        ADD
      </Button>
        <div>{props.addStudentError}</div>
    </div>
  );
}
