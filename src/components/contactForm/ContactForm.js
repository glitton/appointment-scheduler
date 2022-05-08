import React from "react"

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="full_name">Full Name:</label>
      <input
        type="text"
        id="full_name"
        name="full_name"
        aria-label="Enter your first and last name"
        placeholder="Enter your first and last name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        required
      />
      <label for="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        aria-label="Enter your phone"
        placeholder="Enter your phone"
        value={phone}
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        title="Hyphen separated phone number"
        onChange={(e) => {
          setPhone(e.target.value)
        }}
        required
      />
      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        aria-label="Enter your email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  )
}
