import { useState } from "react"
import { supabase } from "../services/supabase"

function AppointmentForm() {

  const [patientName, setPatientName] = useState("")
  const [doctorName, setDoctorName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  async function bookAppointment() {

    const { error } = await supabase
      .from("appointments")
      .insert([
        {
          patient_name: patientName,
          doctor_name: doctorName,
          appointment_date: date,
          appointment_time: time,
          status: "Booked"
        }
      ])

    if (error) {
      alert("Error booking appointment")
      console.log(error)
    } else {
      alert("Appointment Booked")
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg mt-10">

      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Book Appointment
      </h1>

      <div className="flex flex-col gap-5">

        <input
          type="text"
          placeholder="Patient Name"
          className="border p-3 rounded"
          onChange={(e) => setPatientName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Doctor Name"
          className="border p-3 rounded"
          onChange={(e) => setDoctorName(e.target.value)}
        />

        <input
          type="date"
          className="border p-3 rounded"
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="border p-3 rounded"
          onChange={(e) => setTime(e.target.value)}
        />

        <button
          onClick={bookAppointment}
          className="bg-blue-700 text-white p-3 rounded"
        >
          Book Appointment
        </button>

      </div>

    </div>
  )
}

export default AppointmentForm