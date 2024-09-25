import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUp = data => {
    console.log('Sign Up Form', data);
  }

  const handleUpdate = data => {
    console.log('Update form', data);
  }

  return (
    <>
      <h1>Vite & React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        handleSubmit={handleSignUp}
      >
        <div>
          <p>Sign up now to explore the unknown</p>
        </div>
      </ReusableForm>
      <ReusableForm
        handleSubmit={handleUpdate}
        submitBtnText={'Update'}
        formTitle={'Update'}
      >
        <div>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
