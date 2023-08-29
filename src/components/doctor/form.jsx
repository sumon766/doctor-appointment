import { useState } from "react";
import { useDispatch } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import fileSaver from "file-saver";
// eslint-disable-next-line import/no-extraneous-dependencies

import { addNewDoctor } from "../../redux/doctor_list_slice";

import "./form.scss";

const Form = () => {
  const initialFormState = {
    name: "",
    photo: "",
    description: "",
  };
  const [inputs, setInputs] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const saveDoctor = () => {
    const { name, photo, description } = inputs;

    dispatch(addNewDoctor({ name, photo, description }))
      .unwrap()
      .then((data) => {
        console.log(data);
        setInputs({
          name: data.name,
          photo: data.photo,
          description: data.description,
        });
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a FormData object
    const formData = new FormData();

    // Add the image file to the FormData object
    console.log(formData);
    // formData.append("photo", event.target);
    // Get the file extension of the image file
    const fileExtension = formData.get("photo").name.split(".")[1];

    // Generate a random name for the image
    // Save the image to the local filesystem
    fileSaver.save(
      formData.get("photo"),
      `public/images/${formData.get("photo").name}.${fileExtension}`,
    );

    // Save the image path in the database
    saveDoctor();
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
            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <input
                type="text"
                id="name"
                required
                value={inputs.name}
                onChange={handleChange}
                name="name"
                placeholder="Name..."
              />
            </div>

            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <input
                type="text"
                id="description"
                required
                value={inputs.description}
                onChange={handleChange}
                name="description"
                placeholder="Description..."
              />
            </div>

            <div className="form-group">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="photo">Photo</label>
              <input
                type="file"
                id="photo"
                required
                value={inputs.photo}
                onChange={handleChange}
                name="photo"
              />
            </div>

            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
