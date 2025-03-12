'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { addSuggestion } from "./addSuggestin";

export default function SuggestPage() {
  const [suggestion, setSuggestion] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const sendSuggestion = async () => {
    if (!suggestion) {
      setError("Suggestion is Required.")
      return
    }
    setError("")
    setLoading(true)
    try {
      const res = await addSuggestion(suggestion)
      if (res.success === true) {
        alert("Submitted Successfully !")
      }
    } catch (submitError) {
      console.log(submitError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex max-w-lg mx-auto flex-col px-4 gap-4 justify-center items-center min-h-screen">
      <h2 className="text-2xl">Suggest Something</h2>
      <div className="w-full">
        <Input
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Suggestion..."
          className="w-full"
        />
        {error !== "" && (
          <p className="text-red-500">{error}</p>
        )}
      </div>
      <Button disabled={loading} onClick={sendSuggestion} className="w-full cursor-pointer">
        {loading ? "Sending..." : "Send"}
      </Button>
    </section>
  )
}
