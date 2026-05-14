import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

function DashboardStats() {

  const [patientCount, setPatientCount] = useState(0)
  const [appointmentCount, setAppointmentCount] = useState(0)

  async function fetchStats() {

    const { data: patients } = await supabase
      .from("patients")
      .select("*")

    const { data: appointments } = await supabase
      .from("appointments")
      .select("*")

    setPatientCount(patients.length)
    setAppointmentCount(appointments.length)
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (

    <div className="grid grid-cols-2 gap-6 mt-10">

      <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold">
          Total Patients
        </h2>

        <p className="text-5xl mt-4">
          {patientCount}
        </p>

      </div>

      <div className="bg-green-600 text-white p-8 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold">
          Total Appointments
        </h2>

        <p className="text-5xl mt-4">
          {appointmentCount}
        </p>

      </div>

    </div>

  )
}

export default DashboardStats