import { useState } from "react"
import { supabase } from "../../services/supabase"

function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("patient")

  async function handleSignup() {

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      alert(error.message)
      return
    }

    await supabase
      .from("profiles")
      .insert([
        {
          email: email,
          role: role
        }
      ])

    alert("Signup Successful")
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Signup
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

          <select
            className="border p-3 rounded"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>

          <button
            onClick={handleSignup}
            className="bg-blue-700 text-white p-3 rounded"
          >
            Signup
          </button>

        </div>

      </div>

    </div>
  )
}

export default Signup