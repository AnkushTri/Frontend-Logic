import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    courses: [],
    message: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const newCourses = checked
        ? [...formData.courses, value]
        : formData.courses.filter((course) => course !== value);
      setFormData({ ...formData, courses: newCourses });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log("Form submitted:", formData);
      // Here you can make an API call to post formData to the server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Gender:</label>
        <label>
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>Select Courses:</label>
        <label>
          Course A
          <input
            type="checkbox"
            name="courseA"
            value="courseA"
            checked={formData.courses.includes("courseA")}
            onChange={handleChange}
          />
        </label>
        <label>
          Course B
          <input
            type="checkbox"
            name="courseB"
            value="courseB"
            checked={formData.courses.includes("courseB")}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>Send Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Select Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Select Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
