import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

function PatientList() {

  const [patients, setPatients] = useState([])
  const [search, setSearch] = useState("")

  async function fetchPatients() {

    const { data, error } = await supabase
      .from("patients")
      .select("*")

    if (error) {
      console.log(error)
    } else {
      setPatients(data)
    }
  }

  async function deletePatient(id) {

    await supabase
      .from("patients")
      .delete()
      .eq("id", id)

    fetchPatients()
  }

  useEffect(() => {
    fetchPatients()
  }, [])

  return (
    <div className="mt-10 w-full">

      {/* SEARCH INPUT */}

      <input
        type="text"
        placeholder="Search patients..."
        className="border p-3 rounded w-full mb-8"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PATIENT CARDS */}

      <div className="flex flex-wrap gap-5 justify-center">

        {patients
          .filter((patient) =>
            patient.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((patient) => (

            <div
              key={patient.id}
              className="bg-white shadow-lg rounded-xl p-5 w-[250px]"
            >

              <h2 className="text-2xl font-bold text-blue-600">
                {patient.name}
              </h2>

              <p className="mt-2">
                Age: {patient.age}
              </p>

              <p>
                Gender: {patient.gender}
              </p>

              <p>
                Disease: {patient.disease}
              </p>

              <button
                onClick={() => deletePatient(patient.id)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              >
                Delete
              </button>

            </div>

        ))}

      </div>

    </div>
  )
}

export default PatientList