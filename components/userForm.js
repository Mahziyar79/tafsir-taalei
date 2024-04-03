"use client";
import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate name and email fields
    if (!formData.name || !formData.email) {
      console.error("Name and email are required");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.error("Invalid email format");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully");
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "" });
      } else {
        setMessage("Failed to send email");
        console.error("Failed to send email");
      }
    } catch (error) {
      setMessage("Error sending email");
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mt-9 mb-3">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-5"
      >
        <input
          type="text"
          name="name"
          className="bg-[#f3f3f3] rounded-md border-none p-2 w-full md:w-1/3"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="bg-[#f3f3f3] rounded-md border-none p-2 w-full md:w-1/3"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button
          className="bg-[#1E3A8A] rounded-md text-white p-2 w-full md:w-1/3"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="mt-1">{message}</p>
    </>
  );
};
export default UserForm;
