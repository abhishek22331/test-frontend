import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Create = () => {
  // Initialize form state with an object containing all form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    description: "",
    address: ""
  });

  // Function to update state based on input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(formData,"formDataformData"); // Log the form data to the console or handle it as needed
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" gutterBottom>
          Contact Form
        </Typography>
        <TextField
          required
          label="Name"
          type="text"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          required
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          required
          label="Mobile Number"
          type="tel"
          variant="outlined"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          required
          label="Address"
          multiline
          rows={2}
          variant="outlined"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }} type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Create;
