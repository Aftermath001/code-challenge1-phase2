import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your Description:
      <input 
        type="text" 
        name="description" 
        value={inputs.description || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your category:
        <input 
          type="number" 
          name="category" 
          value={inputs.category || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
export default MyForm;