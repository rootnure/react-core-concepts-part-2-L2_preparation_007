import useInputState from "../../hooks/useInputState";

const HookForm = () => {

  // const [name, handleNameChange] = useInputState('Raaj');

  const emailState = useInputState('Bura bbau')

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form data', emailState.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name" /> */}
        <br />
        <input
          {...emailState}
          type="email"
          name="email" />
        <br />
        <input
          type="password"
          name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;