import React from "react";
import { useLocation } from "react-router-dom";
import './FormPage.css';  // Import the CSS file

const FormPage = () => {
  const location = useLocation();
  const { address } = location.state || {};
  const handleRecalculate = () => {
    // Placeholder function for recalculation logic
    alert("Recalculate button clicked!");
  };

  return (
    <div className="form-container">
      <h2>Selected Address: {address}</h2>
      <form className="aligned-form">
        <div className="form-group">
          <label>Cap Rate:</label>
          <input type="text" name="capRate" />
        </div>
        <div className="form-group">
          <label>Purchase Price:</label>
          <input type="text" name="purchasePrice" />
        </div>
        <div className="form-group">
          <label>Monthly HOA:</label>
          <input type="text" name="monthlyHOA" />
        </div>
        <div className="form-group">
          <label>Yearly Text:</label>
          <input type="text" name="yearlyText" />
        </div>
        <div className="form-group">
          <label>Yearly Insurance:</label>
          <input type="text" name="yearlyInsurance" />
        </div>
        <div className="form-group">
          <label>Property Management Percentage:</label>
          <input type="text" name="propertyManagementPercentage" />
        </div>
        <div className="form-group">
          <label>Yearly Maintenance:</label>
          <input type="text" name="yearlyMaintenance" />
        </div>
        <div className="form-group">
          <label>Monthly Rent:</label>
          <input type="text" name="monthlyRent" />
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
