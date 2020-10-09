import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBar(props) {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search new Subject's"
        aria-label="Search Subject"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-info">Search</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default SearchBar;
