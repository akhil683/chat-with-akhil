'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/db/db";
import { suggestionTable } from "@/lib/db/schema";
import { useState } from "react";

export default function SuggestPage() {
  const [suggestion, setSuggestion] = useState("")
  const [error, setError] = useState("")

  const sendSuggestion = async () => {
    if (!suggestion) {
      setError("Suggestion is Required.")
    }
    const res = await db.insert(suggestionTable).values({
      suggestion
    })
    console.log("res", res)
  }

  return (
    <section className="flex max-w-lg mx-auto flex-col gap-4 justify-center items-center min-h-screen">
      <h2 className="text-2xl">Suggest Something</h2>
      <div>
        <Input
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Suggestion..."
        />
        {error !== "" && (
          <p>{error}</p>
        )}
      </div>
      <Button onClick={sendSuggestion} className="w-full cursor-pointer">Send</Button>
    </section>
  )
}
