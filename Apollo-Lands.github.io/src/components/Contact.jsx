import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  FormLabel,
} from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '', // Default selection
    state: '',
    county: '',
    parcelNumber: '',
    propertyZoning: '',
    acres: '',
    deedType: '',
    yearAcquired: '',
    acquisitionType: '',
    annualTaxes: '',
    hasHOA: 'no',
    annualHOAFees: '',
    propertyIssues: [],
    propertyFeatures: [],
    closestCity: '',
    videoEditing: 'no',
    mediaFormat: '',
    desiredItems: [],
    mediaType: '',
    add360Tour: 'no',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      const currentList = formData[name];
      if (checked) {
        return { ...prevData, [name]: [...currentList, e.target.value] };
      } else {
        return { ...prevData, [name]: currentList.filter((item) => item !== e.target.value) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can integrate emailJS here to send the form data
    emailjs
    .send(
      'service_pivkfdc', // Replace with your EmailJS service ID
      'template_c8ivfnd', // Replace with your EmailJS template ID
      formData, // Form data to send
      'rSLgNCAvg4oCpoSq5' // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');

     // Reset the form with updated template variables
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '', // Default subject
            message: '',
            parcelNumber: '',
            state: '',
            county: '',
            propertyZoning: '',
            acres: '',
            deedType: '',
            yearAcquired: '',
            acquisitionType: '',
            annualTaxes: '',
            hasHOA: 'No',
            annualHOAFees: '',
            propertyIssues: '',
            propertyFeatures: '',
            closestCity: '',
            videoEditing: 'No',
            mediaFormat: '',
            desiredItems: '',
            mediaType: '',
            add360Tour: 'No',
          });
      },
      (error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send the message. Please try again later.');
      }
    );
  };

// const handleSubmit = (e) => {
//     e.preventDefault();
  
//     emailjs
//       .send('your_service_id', 'your_template_id', formData, 'your_public_key')
//       .then(
//         (result) => {
//           console.log('Email sent successfully:', result.text);
//           alert('Message sent!');
  
//           // Reset the form with updated template variables
//           setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             subject: '', // Default subject
//             message: '',
//             parcelNumber: '',
//             state: '',
//             county: '',
//             propertyZoning: '',
//             acres: '',
//             deedType: '',
//             yearAcquired: '',
//             acquisitionType: '',
//             annualTaxes: '',
//             hasHOA: 'No',
//             annualHOAFees: '',
//             propertyIssues: '',
//             propertyFeatures: '',
//             closestCity: '',
//             videoEditing: 'No',
//             mediaFormat: '',
//             desiredItems: '',
//             mediaType: '',
//             add360Tour: 'No',
//           });
//         },
//         (error) => {
//           console.error('Failed to send email:', error.text);
//           alert('Failed to send message. Please try again later.');
//         }
//       );
//   };
  

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '500px',
        margin: 'auto',
      }}
    >
        <Box>
            <h2>
                Have questions? Or are you ready to take the next step in your land journey? 
                Send us an email by using the form below. 
                Alternatively, you can also call and leave us a message on our voicemail box at 617-398-7155.
            </h2>
        </Box>
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

      {/* Phone Number Field */}
      <TextField
        label="Phone Number"
        variant="outlined"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      {/* Subject (Dropdown) */}
      <FormControl fullWidth>
        <InputLabel id="subject-label">Subject</InputLabel>
        <Select
          labelId="subject-label"
          id="subject"
          name="subject"
          value={formData.subject}
          label="Subject"
          onChange={handleChange}
        >
          <MenuItem value="Land Sale Offer">Land Sale Offer</MenuItem>
          <MenuItem value="Land Purchasing Inquiry">Land Purchasing Inquiry</MenuItem>
          <MenuItem value="Drone Videography Request">Drone Videography Request</MenuItem>
          <MenuItem value="General Inquiry">General Inquiry</MenuItem>
        </Select>
      </FormControl>

      {/* Additional Fields for "Land Sale Offer" */}
      {formData.subject === "Land Sale Offer" && (
        <>
          <TextField
            label="Parcel Number"
            variant="outlined"
            name="parcelNumber"
            value={formData.parcelNumber}
            onChange={handleChange}
            required
            helperText="Enter only numbers and hyphens"
          />

          {/* State Text Box */}
          <TextField
            label="State"
            variant="outlined"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />

          {/* County Text Box */}
          <TextField
            label="County"
            variant="outlined"
            name="county"
            value={formData.county}
            onChange={handleChange}
            required
            helperText="If unsure, please enter the nearest incorporated town or city to your property"
          />

          <TextField
            label="Property Zoning"
            variant="outlined"
            name="propertyZoning"
            value={formData.propertyZoning}
            onChange={handleChange}
            required
          />

          <TextField
            label="Acres"
            variant="outlined"
            name="acres"
            value={formData.acres}
            onChange={handleChange}
            required
            helperText="Enter only numbers and periods"
          />

          <TextField
            label="Deed Type"
            variant="outlined"
            name="deedType"
            value={formData.deedType}
            onChange={handleChange}
            required
          />

          {/* Year Acquired Dropdown */}
          <FormControl fullWidth>
            <InputLabel id="year-acquired-label">Year Acquired</InputLabel>
            <Select
              labelId="year-acquired-label"
              id="yearAcquired"
              name="yearAcquired"
              value={formData.yearAcquired}
              onChange={handleChange}
            >
              {Array.from({ length: 101 }, (_, i) => (
                <MenuItem key={i} value={2023 - i}>
                  {2023 - i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Acquisition Type */}
          <FormControl fullWidth>
            <InputLabel id="acquisition-type-label">Acquisition Type</InputLabel>
            <Select
              labelId="acquisition-type-label"
              id="acquisitionType"
              name="acquisitionType"
              value={formData.acquisitionType}
              onChange={handleChange}
            >
              <MenuItem value="Inheritance">Inheritance</MenuItem>
              <MenuItem value="Investment">Investment</MenuItem>
              <MenuItem value="Homesite">Homesite</MenuItem>
              <MenuItem value="Recreation">Recreation</MenuItem>
              <MenuItem value="Agriculture">Agriculture</MenuItem>
              <MenuItem value="Tax Lien/Deed">Tax Lien/Deed</MenuItem>
              <MenuItem value="Tax Auction">Tax Auction</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Average Annual Taxes"
            variant="outlined"
            name="annualTaxes"
            value={formData.annualTaxes}
            onChange={handleChange}
            required
            helperText="Enter only numbers and periods"
          />

          {/* HOA Yes/No */}
          <FormControl component="fieldset">
            <FormLabel component="legend">Property/Home Owners Association?</FormLabel>
            <RadioGroup
              row
              name="hasHOA"
              value={formData.hasHOA}
              onChange={handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          {/* HOA Fees Field (conditionally rendered if "Yes" selected) */}
          {formData.hasHOA === "yes" && (
            <TextField
              label="Annual POA/HOA Fees"
              variant="outlined"
              name="annualHOAFees"
              value={formData.annualHOAFees}
              onChange={handleChange}
              required
              helperText="Enter only numbers and periods"
            />
          )}

          {/* Property Issues */}
          <FormLabel component="legend">Are any of the following on the property?</FormLabel>
          <Box>
            {[
              "Taxes Owed", "Liens", "Encumbrances", "Multiple Owners",
              "Garbage/Waste/Debris/Ruins", "Flood Zones", "None of the above"
            ].map((issue) => (
              <FormControlLabel
                key={issue}
                control={
                  <Checkbox
                    value={issue}
                    name="propertyIssues"
                    onChange={handleCheckboxChange}
                  />
                }
                label={issue}
              />
            ))}
          </Box>

          {/* Property Features */}
          <FormLabel component="legend">Do any of the following apply to this property?</FormLabel>
          <Box>
            {[
              "Has road access", "Has Electricity", "Has Water Hook up or Well",
              "Has usable buildings or structures", "Adjacent to protected/recreational state or federal lands",
              "Adjacent to town lines, city limits, county lines, or international border",
              "Waterfront", "Mountainview", "Has been professionally surveyed in the past 10 years",
              "Other Improvement made during ownership", "Adjacent to state or federal Highway", "Has Mineral Rights"
            ].map((feature) => (
              <FormControlLabel
                key={feature}
                control={
                  <Checkbox
                    value={feature}
                    name="propertyFeatures"
                    onChange={handleCheckboxChange}
                  />
                }
                label={feature}
              />
            ))}
          </Box>
        </>
      )}

      {/* Additional Fields for "Drone Videography Request" */}
      {formData.subject === "Drone Videography Request" && (
        <>
          {/* Closest City Multiple Choice */}
          <FormControl component="fieldset">
            <FormLabel component="legend">
              We currently only offer Drone Videography within a 100 mile radius of the following cities. 
              Please select the city closest to the land or property:
            </FormLabel>
            <RadioGroup
              name="closestCity"
              value={formData.closestCity}
              onChange={handleChange}
            >
              <FormControlLabel value="Boston, MA" control={<Radio />} label="Boston, MA" />
              <FormControlLabel value="Providence, RI" control={<Radio />} label="Providence, RI" />
              <FormControlLabel value="Portland, ME" control={<Radio />} label="Portland, ME" />
              <FormControlLabel value="Concord, NH" control={<Radio />} label="Concord, NH" />
              <FormControlLabel value="Brattleboro, VT" control={<Radio />} label="Brattleboro, VT" />
            </RadioGroup>
          </FormControl>

          {/* Video Editing Yes/No */}
          <FormControl component="fieldset">
            <FormLabel component="legend">Select YES if you want video editing services, NO if you want raw footage.</FormLabel>
            <RadioGroup
              row
              name="videoEditing"
              value={formData.videoEditing}
              onChange={handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          {/* Additional Fields for Video Editing */}
          {formData.videoEditing === "yes" && (
            <>
              {/* Primary Media Format Dropdown */}
              <FormControl fullWidth>
                <InputLabel id="media-format-label">Select primary media format</InputLabel>
                <Select
                  labelId="media-format-label"
                  id="mediaFormat"
                  name="mediaFormat"
                  value={formData.mediaFormat}
                  onChange={handleChange}
                >
                  <MenuItem value="Instagram/Facebook">Instagram/Facebook</MenuItem>
                  <MenuItem value="YouTube">YouTube</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>

              {/* Check-All-That-Apply: Desired Items */}
              <FormLabel component="legend">Please select desired items, if any</FormLabel>
              <Box>
                {["Background Music", "Labels", "Your logo/trademark"].map((item) => (
                  <FormControlLabel
                    key={item}
                    control={
                      <Checkbox
                        value={item}
                        name="desiredItems"
                        onChange={handleCheckboxChange}
                      />
                    }
                    label={item}
                  />
                ))}
              </Box>

              {/* I Want... (Photos, Videos, or Both) */}
              <FormControl component="fieldset">
                <FormLabel component="legend">I want...</FormLabel>
                <RadioGroup
                  row
                  name="mediaType"
                  value={formData.mediaType}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Drone Photos" control={<Radio />} label="Drone Photos" />
                  <FormControlLabel value="Drone Videos" control={<Radio />} label="Drone Videos" />
                  <FormControlLabel value="Both" control={<Radio />} label="Both" />
                </RadioGroup>
              </FormControl>
            </>
          )}

          {/* Add 360 Virtual Tour Yes/No */}
          <FormControl component="fieldset">
            <FormLabel component="legend">Do you want to add a 360 Virtual Tour in addition to your Drone Footage?</FormLabel>
            <RadioGroup
              row
              name="add360Tour"
              value={formData.add360Tour}
              onChange={handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </>
      )}

      {/* Message Body */}
      <TextField
        label="Message"
        variant="outlined"
        name="message"
        multiline
        rows={4} // Fits about 4 sentences of text
        value={formData.message}
        onChange={handleChange}
        required
        sx={{ overflowY: 'auto' }} // Allows text box to expand
      />

      {/* Submit Button */}
      <Button variant="contained" type="submit">
        Send Message
      </Button>
    </Box>
  );
};

export default Contact;

