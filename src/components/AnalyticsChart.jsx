import { useState } from "react"

function AISymptomChecker() {

  const [symptoms, setSymptoms] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  async function analyzeSymptoms() {

    try {

      setLoading(true)

      const response = await fetch(
        "https://api-inference.huggingface.co/models/google/flan-t5-base",
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            inputs: `Patient symptoms: ${symptoms}. Suggest possible disease and department.`,
          }),
        }
      )

      const data = await response.json()

      console.log(data)

      setResult(data[0]?.generated_text || "No response")

    } catch (error) {

      console.log(error)

      alert(error.message)

    } finally {

      setLoading(false)

    }
  }

  return (

    <div className="bg-white p-10 rounded-2xl shadow-xl w-[700px]">

      <h1 className="text-5xl font-bold text-blue-700 mb-8">
        AI Symptom Checker
      </h1>

      <textarea
        placeholder="Enter symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        className="w-full h-[200px] border rounded-xl p-5 text-2xl"
      />

      <button
        onClick={analyzeSymptoms}
        className="bg-blue-600 text-white px-8 py-4 rounded-xl mt-6 text-2xl"
      >
        {loading ? "Analyzing..." : "Analyze Symptoms"}
      </button>

      <div className="bg-gray-100 mt-10 p-6 rounded-xl min-h-[100px] text-xl">
        {result}
      </div>

    </div>

  )
}

export default AISymptomChecker