import { useState } from "react"
import { supabase } from "../services/supabase"

function MedicalRecordForm() {

  const [patientName, setPatientName] = useState("")
  const [diagnosis, setDiagnosis] = useState("")
  const [prescription, setPrescription] = useState("")
  const [doctorNotes, setDoctorNotes] = useState("")
  const [visitDate, setVisitDate] = useState("")

  async function addMedicalRecord() {

    const { error } = await supabase
      .from("medical_records")
      .insert([
        {
          patient_name: patientName,
          diagnosis: diagnosis,
          prescription: prescription,
          doctor_notes: doctorNotes,
          visit_date: visitDate
        }
      ])

    if (error) {alert(error.message)
      console.log(error)
    }

    else {
      alert("Medical record added")
    }
  }

  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg mt-10">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Electronic Medical Records
      </h1>

      <div className="flex flex-col gap-5">

        <input
          type="text"
          placeholder="Patient Name"
          className="border p-3 rounded-xl"
          onChange={(e) => setPatientName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Diagnosis"
          className="border p-3 rounded-xl"
          onChange={(e) => setDiagnosis(e.target.value)}
        />

        <textarea
          placeholder="Prescription"
          className="border p-3 rounded-xl"
          onChange={(e) => setPrescription(e.target.value)}
        />

        <textarea
          placeholder="Doctor Notes"
          className="border p-3 rounded-xl"
          onChange={(e) => setDoctorNotes(e.target.value)}
        />

        <input
          type="date"
          className="border p-3 rounded-xl"
          onChange={(e) => setVisitDate(e.target.value)}
        />

        <button
          onClick={addMedicalRecord}
          className="bg-blue-700 text-white p-3 rounded-xl"
        >
          Save Medical Record
        </button>

      </div>

    </div>

  )
}

export default MedicalRecordForm