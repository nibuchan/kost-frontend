import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      alert("Login berhasil");
    } else {
      alert("Login gagal");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      <input 
        className="border px-3 py-2 w-64"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        className="border px-3 py-2 w-64"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
    </div>
  )
}
