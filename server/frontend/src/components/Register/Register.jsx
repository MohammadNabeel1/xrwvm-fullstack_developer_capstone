import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const registeruser = async (e) => {
    e.preventDefault();

    let register_url = window.location.origin + "/djangoapp/register";

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });

    const json = await res.json();
    if (json.status === "Authenticated") {
      window.location.href = window.location.origin;
    } else if (json.error) {
      alert("Registration failed: " + json.error);
    }
  };

  return (Sign Up

setUserName(e.target.value)}
required
/>

setFirstName(e.target.value)}
required
/>

setLastName(e.target.value)}
required
/>

setEmail(e.target.value)}
required
/>

setPassword(e.target.value)}
required
/>

);
};

export default Register;
