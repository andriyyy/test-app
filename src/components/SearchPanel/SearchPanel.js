import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

function SearchPanel(props) {
  const [term, setTerm] = useState("");

  const onSearchChange = (event) => {
    const term = event.target.value;
    setTerm(term);
    props.onSearchChange(term);
  };

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="term">Filter by: </InputLabel>
        <Input
          id="term"
          name="term"
          autoFocus
          value={term}
          onChange={onSearchChange}
        />
      </FormControl>
    </div>
  );
}

export default SearchPanel;
