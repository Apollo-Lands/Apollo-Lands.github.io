// import React, { useState } from 'react';
// import {
//   Box,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   Slider,
//   Checkbox,
//   FormControlLabel,
//   FormLabel,
//   Chip,
//   Autocomplete,
// } from '@mui/material';

// const PurchaseLand = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     states: [],
//     acreage: '',
//     primaryUse: '',
//     budget: 500,
//     selectedFeatures: [],
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFeatureChange = (e) => {
//     const { value, checked } = e.target;
//     const updatedFeatures = checked
//       ? [...formData.selectedFeatures, value]
//       : formData.selectedFeatures.filter((item) => item !== value);

//     // Limit the selection to 4 features
//     if (updatedFeatures.length <= 4) {
//       setFormData({ ...formData, selectedFeatures: updatedFeatures });
//     }
//   };

//   const handleBudgetChange = (event, newValue) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       budget: newValue,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the form data, e.g., using emailJS
//   };

//   const features = [
//     "Waterfront", "Mountainview", "Rural", "Suburban", "Privacy", "Dark Night Skies", "Close to a town", "Close to a City", 
//     "Close to a State/National Park", "Road Access", "Electricity Hook Up", "Water Hook Up / Well", "Mineral Rights", 
//     "Near a Highway", "Train Access", "Near a State/County/International Border", "Flexible Building and Zoning Codes", 
//     "Public Land Adjacency", "No HOA/POA"
//   ];

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         maxWidth: '600px',
//         margin: 'auto',
//       }}
//     >
//       {/* Name Field */}
//       <TextField
//         label="Name"
//         variant="outlined"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       {/* Email Field */}
//       <TextField
//         label="Email"
//         variant="outlined"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       {/* Select 1-6 States (Chip Input) */}
//       <FormControl fullWidth>
//         <Autocomplete
//           multiple
//           id="states"
//           options={[]}
//           freeSolo
//           value={formData.states}
//           onChange={(event, newValue) => setFormData({ ...formData, states: newValue })}
//           renderTags={(value, getTagProps) =>
//             value.map((option, index) => (
//               <Chip
//                 variant="outlined"
//                 label={option}
//                 {...getTagProps({ index })}
//                 disabled={value.length > 5} // Limit to 6 states
//               />
//             ))
//           }
//           renderInput={(params) => <TextField {...params} label="Please select 1-6 States" />}
//         />
//       </FormControl>

//       {/* Desired Acreage Field */}
//       <TextField
//         label="Desired Acreage"
//         variant="outlined"
//         name="acreage"
//         value={formData.acreage}
//         onChange={handleChange}
//         required
//         type="number"
//         inputProps={{ step: "0.1", min: "0" }}
//       />

//       {/* Primary Desired Use (Dropdown) */}
//       <FormControl fullWidth>
//         <InputLabel id="primary-use-label">Primary Desired Use</InputLabel>
//         <Select
//           labelId="primary-use-label"
//           id="primaryUse"
//           name="primaryUse"
//           value={formData.primaryUse}
//           onChange={handleChange}
//         >
//           <MenuItem value="Homesite">Homesite</MenuItem>
//           <MenuItem value="Recreation">Recreation</MenuItem>
//           <MenuItem value="Investment">Investment</MenuItem>
//           <MenuItem value="Commercial">Commercial</MenuItem>
//           <MenuItem value="Agriculture">Agriculture</MenuItem>
//           <MenuItem value="Conservation">Conservation</MenuItem>
//           <MenuItem value="Development">Development</MenuItem>
//           <MenuItem value="Other">Other</MenuItem>
//         </Select>
//       </FormControl>

//       {/* Budget Slider */}
//       <FormLabel>Select your total cost budget</FormLabel>
//       <Slider
//         value={formData.budget}
//         onChange={handleBudgetChange}
//         valueLabelDisplay="auto"
//         step={100}
//         marks
//         min={500}
//         max={50000}
//       />
//       <FormLabel sx={{ color: "gray", fontSize: 12 }}>
//         *The national average cost of 1 acre of land is $16,000. There are many properties above and below that per-acre figure, but expect to pay at least $1000 per acre when buying an acre or more.
//       </FormLabel>

//       {/* Check-All-That-Apply: Features */}
//       <FormLabel component="legend">Select 4 of the features that are most important to you</FormLabel>
//       <Box>
//         {features.map((feature) => (
//           <FormControlLabel
//             key={feature}
//             control={
//               <Checkbox
//                 value={feature}
//                 checked={formData.selectedFeatures.includes(feature)}
//                 onChange={handleFeatureChange}
//               />
//             }
//             label={feature}
//           />
//         ))}
//       </Box>

//       {/* Message Body */}
//       <TextField
//         label="Message"
//         variant="outlined"
//         name="message"
//         multiline
//         rows={4}
//         value={formData.message}
//         onChange={handleChange}
//         required
//         sx={{ overflowY: 'auto' }}
//       />

//       {/* Submit Button */}
//       <Button variant="contained" type="submit">
//         Submit Property Request
//       </Button>
//     </Box>
//   );
// };

// export default PurchaseLand;

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
  const formatCurrency = (value) => {
    return `$${value.toLocaleString()}`;
  };

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

    // Limit the selection to 4 features
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
    console.log('Form submitted:', formData);
    // Here you would typically send the form data, e.g., using emailJS
  };

  const features = [
    "Waterfront", "Mountainview", "Rural", "Suburban", "Privacy", "Dark Night Skies", "Close to a town", "Close to a City", 
    "Close to a State/National Park", "Road Access", "Electricity Hook Up", "Water Hook Up / Well", "Mineral Rights", 
    "Near a Highway", "Train Access", "Near a State/County/International Border", "Flexible Building and Zoning Codes", 
    "Public Land Adjacency", "No HOA/POA"
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '600px',
        margin: 'auto',
      }}
    >

        <box>Some day, I will be a big explanation of the land purchasing process with lots cool pictures and a call to action!</box>

      {/* Name Field */}
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Email Field */}
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Select 1-6 States (Chip Input) */}
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
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
                disabled={value.length > 5} // Limit to 6 states
              />
            ))
          }
          renderInput={(params) => <TextField {...params} label="Please select 1-6 States" />}
        />
      </FormControl>

      {/* Desired Acreage Field */}
      <TextField
        label="Desired Acreage"
        variant="outlined"
        name="acreage"
        value={formData.acreage}
        onChange={handleChange}
        required
        type="number"
        inputProps={{ step: "0.1", min: "0" }}
      />

      {/* Primary Desired Use (Dropdown) */}
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

      {/* Budget Slider */}
      <FormLabel>Select your total cost budget</FormLabel>
      <Slider
        value={formData.budget}
        onChange={handleBudgetChange}
        valueLabelDisplay="auto"
        valueLabelFormat={formatCurrency} // Format the value to USD currency
        step={10} // Step by 10
        marks
        min={500}
        max={50000}
      />
      <FormLabel sx={{ color: "gray", fontSize: 12 }}>
        *The national average cost of 1 acre of land in the United States is $16,000. There are many properties above and below that per-acre figure, but expect to pay at least $1000 per acre when buying an acre or more.
      </FormLabel>

      {/* Check-All-That-Apply: Features */}
      <FormLabel component="legend">Select 4 of the features that are most important to you</FormLabel>
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

      {/* Message Body */}
      <TextField
        label="Message"
        variant="outlined"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
        sx={{ overflowY: 'auto' }}
      />

      {/* Submit Button */}
      <Button variant="contained" type="submit">
        Submit Property Request
      </Button>
    </Box>
  );
};

export default PurchaseLand;
