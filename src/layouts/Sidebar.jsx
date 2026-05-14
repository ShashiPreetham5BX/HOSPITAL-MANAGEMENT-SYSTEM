import {
  FaUserInjured,
  FaCalendarCheck,
  FaChartBar,
  FaFileMedical,
  FaRobot
} from "react-icons/fa"

function Sidebar() {
  return (
    <div className="w-[250px] h-screen bg-blue-700 text-white p-5 fixed">

      <h1 className="text-3xl font-bold mb-10">
        Hospital
      </h1>

      <div className="flex flex-col gap-6 text-lg">

        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserInjured />
          <p>Patients</p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaCalendarCheck />
          <p>Appointments</p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaChartBar />
          <p>Analytics</p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaFileMedical />
          <p>Reports</p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaRobot />
          <p>AI Assistant</p>
        </div>

      </div>

    </div>
  )
}

export default Sidebar