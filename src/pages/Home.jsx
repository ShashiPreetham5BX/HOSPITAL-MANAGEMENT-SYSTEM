import Sidebar from "../layouts/Sidebar"
import AddPatient from "../components/AddPatient"
import PatientList from "../components/PatientList"
import AppointmentForm from "../components/AppointmentForm"
import DashboardStats from "../components/DashboardStats"
import AnalyticsChart from "../components/AnalyticsChart"
import MedicalRecordForm from "../components/MedicalRecordForm"
import FileUpload from "../components/FileUpload"
import AdminAnalytics from "../components/AdminAnalytics"
import PrescriptionGenerator from "../components/PrescriptionGenerator"
function Home() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-[270px] p-10 w-full">

        <h1 className="text-5xl font-bold text-blue-700">
          Smart Hospital Dashboard
        </h1>
        <AdminAnalytics />
<DashboardStats />
        <AddPatient />

        <PatientList />
<AppointmentForm />
<AnalyticsChart />
<MedicalRecordForm />
<FileUpload /><PrescriptionGenerator />
      </div>

    </div>
  )
}

export default Home