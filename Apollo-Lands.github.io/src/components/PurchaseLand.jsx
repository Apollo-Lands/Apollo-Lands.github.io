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
        {/* Copy goes here */}
      <Box>
      <div>
  <h1>Demystifying the Land Buying Process</h1>

  <p>
    Buying land doesn’t have to be complicated—but knowing the right steps can save you time, 
    money, and frustration. Whether you're looking to build a home, create a retreat, or make an 
    investment, this guide will walk you through the key steps to buying land. At 
    <strong>Apollo Lands</strong>, we’re here to make the process as easy and transparent as possible, 
    ensuring every piece of land we sell is ready for your dream project.
  </p>

  <h2>Step 1: Define Your Dream Property</h2>
  <p>
    The first step in buying land is understanding what <strong>you want</strong>. Ask yourself:
  </p>
  <ul>
    <li>Are you looking for <strong>rural privacy</strong>, <strong>road access</strong>, or utilities on-site?</li>
    <li>Do you want a property near <strong>waterfronts</strong>, <strong>mountain views</strong>, or <strong>recreational areas</strong>?</li>
  </ul>
  <p>
    Making a list of everything important to you will help focus your search. The more specific your vision, 
    the easier it will be to find the perfect parcel.
  </p>

  <h2>Step 2: Search for Land That Matches Your Criteria</h2>
  <p>
    Once you have a clear idea of what you’re looking for, it’s time to <strong>start searching</strong>. Use 
    websites, local listings, or services like <strong>Apollo Lands</strong> to narrow down options that match your needs. 
    Remember, the more closely you stick to your criteria, the more likely you’ll find the right property quickly.
  </p>

  <h2>Step 3: Do Your Due Diligence</h2>
  <p>
    This step is crucial. Before committing to any property, you must verify key details to ensure it meets 
    your needs and has no hidden surprises.
  </p>
  <ul>
    <li><strong>Parcel Numbers:</strong> Every property in the USA has a <em>parcel number</em>. You can usually find it on the <strong>county government’s website</strong>.</li>
    <li><strong>Chain of Title & Encumbrances:</strong> Verify that the <em>chain of title is clean</em>—no liens, unpaid taxes, or other encumbrances.</li>
    <li><strong>Flood Maps & Satellite Imagery:</strong> Use the county’s <em>GIS mapping system</em> to check for flood zones and view the property layout.</li>
    <li><strong>Visit the Land:</strong> If you’re nearby, <em>visit the property</em> in person to make sure it matches your expectations.</li>
  </ul>
  <p>
    At <strong>Apollo Lands</strong>, we take care of this due diligence for you. Every piece of land we offer has been 
    thoroughly vetted—ready for immediate use and free from complications.
  </p>

  <h2>Step 4: Reach an Agreement with the Seller</h2>
  <p>
    Once you’ve found a property you love, the next step is to <strong>reach an agreement with the seller</strong>. 
    This is typically done with a <em>Purchase and Sale Agreement</em>—a document that clearly outlines:
  </p>
  <ul>
    <li><strong>Who</strong> is buying and selling the property</li>
    <li><strong>What</strong> parcel is being sold</li>
    <li>The <strong>agreed-upon price</strong></li>
    <li>The <strong>timeline</strong> for completing the transaction</li>
  </ul>
  <p>
    This document ensures both the buyer and seller are on the same page about the transaction.
  </p>

  <h2>Step 5: Create and File the Deed</h2>
  <p>
    With the agreement in place, it’s time to create the <strong>deed</strong>. Some states have specific 
    requirements for how deeds are written, but in general, the deed must:
  </p>
  <ol>
    <li><strong>Grant ownership</strong> from the seller to the buyer for the agreed amount.</li>
    <li>Be <strong>notarized</strong> to confirm the authenticity of the transfer.</li>
    <li>Be sent to the <strong>county government</strong> for review and official recording.</li>
  </ol>
  <p>
    Once the county records the deed, it becomes <strong>official</strong>, and ownership is legally transferred to the buyer.
  </p>

  <h2>Step 6: Complete the Payment</h2>
  <p>
    After the deed is officially recorded, the buyer makes the <strong>final payment</strong> to the seller. At this point, 
    the property is fully yours—ready for whatever you have planned.
  </p>

  <h2>We’re Here to Help Every Step of the Way</h2>
  <p>
    Buying land is a journey, and every buyer’s path looks a little different. At <strong>Apollo Lands</strong>, we simplify the process so you can focus on bringing your dream to life. 
    Whether you’re looking for a place to build, a recreational escape, or an investment, we’ve got the tools, expertise, and properties to help you succeed.
  </p>

  <h2>Start Your Search Today</h2>
  <p>
    Ready to find the perfect property? <strong>Tell us what you’re looking for</strong> by filling out the form below, 
    and we’ll help you find the land that fits your vision.
  </p>


  <div>

  </div>
</div>

      </Box>

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
