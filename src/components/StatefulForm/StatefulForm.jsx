import { useState } from "react";

const StatefulForm = () => {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be 6 characters of longer');
    }
    else {
      setError('');
      console.log(name, email, password);
    }
  }

  const handleNameChange = e => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const handleEmailChange = e => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          defaultValue="Your Name"
          type="text"
          name="name" />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          defaultValue="Email"
          name="email" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          defaultValue="******"
          name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default StatefulForm;