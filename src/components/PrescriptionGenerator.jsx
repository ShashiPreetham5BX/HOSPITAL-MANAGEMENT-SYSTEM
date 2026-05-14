import { useState } from "react"
import jsPDF from "jspdf"

function PrescriptionGenerator() {

  const [patientName, setPatientName] = useState("")
  const [doctorName, setDoctorName] = useState("")
  const [disease, setDisease] = useState("")
  const [medicines, setMedicines] = useState("")

  function generatePDF() {

    const doc = new jsPDF()

    doc.setFontSize(22)
    doc.text("Hospital Prescription", 20, 20)

    doc.setFontSize(14)

    doc.text(`Patient Name: ${patientName}`, 20, 50)
    doc.text(`Doctor Name: ${doctorName}`, 20, 70)
    doc.text(`Disease: ${disease}`, 20, 90)

    doc.text("Medicines:", 20, 120)

    doc.text(medicines, 20, 140)

    doc.save("prescription.pdf")
  }

  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg mt-10">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Prescription Generator
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
          placeholder="Doctor Name"
          className="border p-3 rounded-xl"
          onChange={(e) => setDoctorName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Disease"
          className="border p-3 rounded-xl"
          onChange={(e) => setDisease(e.target.value)}
        />

        <textarea
          placeholder="Medicines"
          className="border p-3 rounded-xl"
          rows="5"
          onChange={(e) => setMedicines(e.target.value)}
        />

        <button
          onClick={generatePDF}
          className="bg-blue-700 text-white p-3 rounded-xl"
        >
          Download Prescription PDF
        </button>

      </div>

    </div>

  )
}

export default PrescriptionGenerator