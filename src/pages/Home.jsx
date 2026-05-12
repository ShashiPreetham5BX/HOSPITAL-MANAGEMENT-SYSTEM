import AddPatient from "../components/AddPatient"
import PatientList from "../components/PatientList"

function Home() {
  return (
    <div className="flex flex-col items-center mt-10">

      <h1 className="text-5xl font-bold text-blue-600">
        Smart Hospital System
      </h1>

      <AddPatient />

      <PatientList />

    </div>
  )
}

export default Home