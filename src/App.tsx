import './App.css';
import AddUser from './screens/Authenticated/AddUser/AddUser';
import HomePage from './screens/Authenticated/HomePage/HomePage';
import LoginForm from './screens/Authentication/Login/LoginForm';
import SignUpForm from './screens/Authentication/SignUp/SignUpForm';
import ResponsiveDesign from './screens/Responsive/ResponsiveDesign';

function App() {
  return (
    <div className="typewriter">
      {/* <h1>Hello, My name is Tanishqa.</h1> */}
      {/* <AddUser/> 
      <LoginForm />
      <SignUpForm></SignUpForm> */}
      <HomePage />
      {/* <ResponsiveDesign /> */}
    </div>
  );
}

export default App;
