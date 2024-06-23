import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './FormPage.css';  // Import the CSS file

const FormPage = () => {
  const location = useLocation();
  const { address } = location.state || {};

  const [formData, setFormData] = useState({
    capRate: '',
    purchasePrice: '',
    monthlyHOA: '',
    yearlyText: '',
    yearlyInsurance: '',
    propertyManagementPercentage: '',
    yearlyMaintenance: '',
    monthlyRent: '',
    propertyAddress: address
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRecalculate = async () => {
    // Serialize formData to query string parameters
    const formDataQueryParams = new URLSearchParams(formData).toString();
  
    // Construct the URL with the formDataQueryParams
    const url = `https://albvg9jakf.execute-api.us-east-1.amazonaws.com/test/property_roi?${formDataQueryParams}`;
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // no body is passed in the request
    };
  
    console.log('Full request:', url, requestOptions);
  
    try {
      const response = await fetch(url, requestOptions);
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
  
      const data = await response.json();
      alert(`Recalculate successful: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error('Error during fetch:', error);
      alert(`Recalculate failed: ${error.message}`);
    }
  };
  
  return (
    <div className="form-container">
      <h2>Selected Address: {address}</h2>
      <form className="aligned-form">
        <div className="form-group">
          <label>Cap Rate:</label>
          <input type="text" name="capRate" value={formData.capRate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Purchase Price:</label>
          <input type="text" name="purchasePrice" value={formData.purchasePrice} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Monthly HOA:</label>
          <input type="text" name="monthlyHOA" value={formData.monthlyHOA} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Yearly Text:</label>
          <input type="text" name="yearlyText" value={formData.yearlyText} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Yearly Insurance:</label>
          <input type="text" name="yearlyInsurance" value={formData.yearlyInsurance} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Property Management Percentage:</label>
          <input type="text" name="propertyManagementPercentage" value={formData.propertyManagementPercentage} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Yearly Maintenance:</label>
          <input type="text" name="yearlyMaintenance" value={formData.yearlyMaintenance} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Monthly Rent:</label>
          <input type="text" name="monthlyRent" value={formData.monthlyRent} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleRecalculate}>
            Recalculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
