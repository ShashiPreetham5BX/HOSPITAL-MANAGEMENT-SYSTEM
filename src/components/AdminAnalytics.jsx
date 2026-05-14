import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

function AdminAnalytics() {

  const [patients, setPatients] = useState(0)
  const [appointments, setAppointments] = useState(0)
  const [records, setRecords] = useState(0)

  async function fetchAnalytics() {

    const { count: patientCount } = await supabase
      .from("patients")
      .select("*", { count: "exact", head: true })

    const { count: appointmentCount } = await supabase
      .from("appointments")
      .select("*", { count: "exact", head: true })

    const { count: recordCount } = await supabase
      .from("medical_records")
      .select("*", { count: "exact", head: true })

    setPatients(patientCount || 0)
    setAppointments(appointmentCount || 0)
    setRecords(recordCount || 0)
  }

  useEffect(() => {
    fetchAnalytics()
  }, [])

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

      <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold">
          Total Patients
        </h2>

        <p className="text-5xl mt-4 font-bold">
          {patients}
        </p>
      </div>

      <div className="bg-green-600 text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold">
          Appointments
        </h2>

        <p className="text-5xl mt-4 font-bold">
          {appointments}
        </p>
      </div>

      <div className="bg-purple-600 text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold">
          Medical Records
        </h2>

        <p className="text-5xl mt-4 font-bold">
          {records}
        </p>
      </div>

    </div>

  )
}

export default AdminAnalytics