import { useState } from "react";
import "./form.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Form = () => {
  const { user } = useSelector((state) => state.auth);
  const initialFormState = {
    name: "",
    photo: "",
    description: "",
  };
  const [inputs, setInputs] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const saveDoctor = (formData) => {
    fetch("http://localhost:3000/api/v1/doctors", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        setSubmitted(true);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user) return toast.error("You must login to add a doctor.");
    if (!event.target.name?.value || !event.target.description?.value) {
      return toast.error("Name and description cannot be empty.");
    }
    const formData = new FormData();
    formData.append("doctor[name]", event.target.name.value);
    formData.append("doctor[photo]", event.target.photo.files[0]);
    formData.append("doctor[description]", event.target.description.value);
    saveDoctor(formData);
  };

  const newDoctor = () => {
    setInputs(initialFormState);
    setSubmitted(false);
  };
  return (
    <div className="add-doctor-container">
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button type="button" onClick={newDoctor}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <h4>Add New Doctor</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  value={inputs.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Name..."
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="description"
                  value={inputs.description}
                  onChange={handleChange}
                  name="description"
                  placeholder="Description..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="photo">
                  <input
                    type="file"
                    id="photo"
                    value={inputs.photo}
                    onChange={handleChange}
                    name="photo"
                  />
                </label>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
