"use server"

import { db } from "@/lib/db/db"
import { suggestionTable } from "@/lib/db/schema"

export async function addSuggestion(suggestion: string) {

  try {
    const result = await db
      .insert(suggestionTable)
      .values({
        suggestion
      })
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}
