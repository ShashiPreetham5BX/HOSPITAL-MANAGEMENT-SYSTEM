import { useState } from "react"
import { supabase } from "../../services/supabase"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {
      alert("Login Successful")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Login
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter Email"
            className="border p-3 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="border p-3 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-blue-700 text-white p-3 rounded"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  )
}

export default Login