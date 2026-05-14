import { useState } from "react"
import { supabase } from "../services/supabase"

function FileUpload() {

  const [file, setFile] = useState(null)

  async function uploadFile() {

    if (!file) {
      alert("Select a file")
      return
    }

    const fileName = `${Date.now()}-${file.name}`

    const { error } = await supabase.storage
      .from("medical-files")
      .upload(fileName, file)

    if (error) {
      console.log(error)
      alert(error.message)
    }

    else {
      alert("File uploaded successfully")
    }
  }

  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg mt-10">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Upload Medical Reports
      </h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-5"
      />

      <button
        onClick={uploadFile}
        className="bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        Upload File
      </button>

    </div>

  )
}

export default FileUpload