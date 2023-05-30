import React from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="column" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Input Required" : "Enter your Id #"}
          size="small"
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          required
          error
          helperText="helper text here... "
          size="small"
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">#</InputAdornment>,
          }}
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
