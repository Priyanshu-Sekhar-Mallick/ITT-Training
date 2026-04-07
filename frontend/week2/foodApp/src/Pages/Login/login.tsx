import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if(!userName || !password){
            alert("Enter the username and password");
            return;
        }
        localStorage.setItem("user", JSON.stringify({userName}));
        navigate("/");
    };
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-6 rounded shadow w-80">
                <h1 className="text-xl mb-4 text-center">Login Page</h1>
                <input
                    type="text"
                    placeholder="Enter the username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="border p-2 w-full mb-3"
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full mb-3"
                />
                <button onClick={handleLogin} className="bg-blue-500 text-white w-full p-2 rounded">
                    Login
                </button>
            </div>
        </div>
    );
}
export default Login;