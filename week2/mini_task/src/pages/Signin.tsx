import SigninForm from "../components/SigninForm";

function Signin() {
  return (
    <div>
      <h1 className="text-6xl font-bold mb-4 text-start">Hello!</h1>
      <p className="text-sm text-gray-500 text-start">Welcome back to the Application.</p>
      <SigninForm />
    </div>
  );
}

export default Signin;
