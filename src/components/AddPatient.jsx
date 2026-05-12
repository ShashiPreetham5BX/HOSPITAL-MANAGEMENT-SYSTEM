import { useState } from "react"
import { supabase } from "../services/supabase"

function AddPatient() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [disease, setDisease] = useState("")

  async function handleSubmit() {

    const { error } = await supabase
      .from("patients")
      .insert([
        {
          name: name,
          age: age,
          gender: gender,
          disease: disease
        }
      ])

    if (error) {
      alert("Error adding patient")
      console.log(error)
    } else {
      alert("Patient Added Successfully")

      setName("")
      setAge("")
      setGender("")
      setDisease("")
    }
  }

  return (
    <div className="flex flex-col gap-4 mt-10 w-[300px]">

      <input
        className="border p-3 rounded"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-3 rounded"
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        className="border p-3 rounded"
        type="text"
        placeholder="Enter Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />

      <input
        className="border p-3 rounded"
        type="text"
        placeholder="Enter Disease"
        value={disease}
        onChange={(e) => setDisease(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white p-3 rounded"
      >
        Add Patient
      </button>

    </div>
  )
}

export default AddPatient