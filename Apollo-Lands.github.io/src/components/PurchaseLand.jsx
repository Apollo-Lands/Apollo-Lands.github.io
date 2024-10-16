import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Slider,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Chip,
  Autocomplete,
} from '@mui/material';
import emailjs from '@emailjs/browser'; // Import EmailJS

const PurchaseLand = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    states: [],
    acreage: '',
    primaryUse: '',
    budget: 500,
    selectedFeatures: [],
    message: '',
  });

  // Format the slider value to USD currency format
  const formatCurrency = (value) => `$${value.toLocaleString()}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    const updatedFeatures = checked
      ? [...formData.selectedFeatures, value]
      : formData.selectedFeatures.filter((item) => item !== value);

    if (updatedFeatures.length <= 4) {
      setFormData({ ...formData, selectedFeatures: updatedFeatures });
    }
  };

  const handleBudgetChange = (event, newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      budget: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_pivkfdc', // Replace with your EmailJS service ID
        'template_y2x23um', // Replace with your EmailJS template ID
        formData, // Form data to send
        'rSLgNCAvg4oCpoSq5' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');

          // Reset the form after submission
          setFormData({
            name: '',
            email: '',
            states: [],
            acreage: '',
            primaryUse: '',
            budget: 500,
            selectedFeatures: [],
            message: '',
          });
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  const features = [
    "Waterfront", "Mountainview", "Rural", "Suburban", "Privacy", "Dark Night Skies",
    "Close to a town", "Close to a City", "Close to a State/National Park", "Road Access",
    "Electricity Hook Up", "Water Hook Up / Well", "Mineral Rights", "Near a Highway",
    "Train Access", "Near a State/County/International Border", "Flexible Building and Zoning Codes",
    "Public Land Adjacency", "No HOA/POA"
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '600px', margin: 'auto' }}
    >
      <Box>Some day, I will be a big explanation of the land purchasing process with lots of cool pictures and a call to action!</Box>

      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormControl fullWidth>
        <Autocomplete
          multiple
          id="states"
          options={[]}
          freeSolo
          value={formData.states}
          onChange={(event, newValue) => setFormData({ ...formData, states: newValue })}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => <TextField {...params} label="Please select 1-6 States" />}
        />
      </FormControl>

      <TextField
        label="Desired Acreage"
        variant="outlined"
        name="acreage"
        value={formData.acreage}
        onChange={handleChange}
        required
        type="number"
      />

      <FormControl fullWidth>
        <InputLabel id="primary-use-label">Primary Desired Use</InputLabel>
        <Select
          labelId="primary-use-label"
          id="primaryUse"
          name="primaryUse"
          value={formData.primaryUse}
          onChange={handleChange}
        >
          <MenuItem value="Homesite">Homesite</MenuItem>
          <MenuItem value="Recreation">Recreation</MenuItem>
          <MenuItem value="Investment">Investment</MenuItem>
          <MenuItem value="Commercial">Commercial</MenuItem>
          <MenuItem value="Agriculture">Agriculture</MenuItem>
          <MenuItem value="Conservation">Conservation</MenuItem>
          <MenuItem value="Development">Development</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <Slider
        value={formData.budget}
        onChange={handleBudgetChange}
        valueLabelDisplay="auto"
        valueLabelFormat={formatCurrency}
        step={10}
        min={500}
        max={50000}
      />

      <FormLabel>Features (Select up to 4)</FormLabel>
      <Box>
        {features.map((feature) => (
          <FormControlLabel
            key={feature}
            control={
              <Checkbox
                value={feature}
                checked={formData.selectedFeatures.includes(feature)}
                onChange={handleFeatureChange}
              />
            }
            label={feature}
          />
        ))}
      </Box>

      <TextField
        label="Message"
        variant="outlined"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
      />

      <Button variant="contained" type="submit">
        Submit Property Request
      </Button>
    </Box>
  );
};

export default PurchaseLand;
