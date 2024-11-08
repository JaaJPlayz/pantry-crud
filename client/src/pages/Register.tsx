import { useState } from "react";
import { IUser } from "../interfaces/User";
import registerUser from "../utils/Register";
import { useNavigate } from "react-router-dom";
import validateUserInfo from "../utils/ValidateUserInfo";

function Register() {
  const navigate = useNavigate();

  const [userValues, setUserValues] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateUserInfo(userValues);
    if (!isValid) {
      alert("Invalid email or password");
      return;
    }
    const response = await registerUser(userValues);
    const token = response.token;
    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    }
    console.log(token);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={userValues.email}
              onChange={(e) =>
                setUserValues({ ...userValues, email: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={userValues.password}
              onChange={(e) =>
                setUserValues({ ...userValues, password: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {!validateUserInfo(userValues) && (
            <div className="text-red-500">Invalid email or password</div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={!validateUserInfo(userValues)}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
