import React from "react";
import { useLocation } from "react-router-dom";

const FormPage = () => {
  const location = useLocation();
  const { address } = location.state || {};

  return (
    <div style={{ padding: "50px" }}>
      <h2>Selected Address: {address}</h2>
      <form>
        <div>
          <label>
            Field 1:
            <input type="text" name="field1" />
          </label>
        </div>
        <div>
          <label>
            Field 2:
            <input type="text" name="field2" />
          </label>
        </div>
        <div>
          <label>
            Field 3:
            <input type="text" name="field3" />
          </label>
        </div>
        <div>
          <label>
            Field 4:
            <input type="text" name="field4" />
          </label>
        </div>
        <div>
          <label>
            Field 5:
            <input type="text" name="field5" />
          </label>
        </div>
        <div>
          <label>
            Field 6:
            <input type="text" name="field6" />
          </label>
        </div>
        <div>
          <label>
            Field 7:
            <input type="text" name="field7" />
          </label>
        </div>
        <div>
          <label>
            Field 8:
            <input type="text" name="field8" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
