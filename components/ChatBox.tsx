"use client"

import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUp, Bot, User } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "./ui/textarea"
import Image from "next/image"

export default function ModalChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex min-h-screen flex-col w-full p-4">
      <div className="flex-1 justify-center items-center flex overflow-y-auto p-4 h-full">
        {messages.length < 1 && (
          <div className="h-full flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="https://avatars.githubusercontent.com/u/71344171?v=4" width={300} height={300} className="h-28 md:36 w-28 md:w-36 rounded-full" alt="Logo" />
              <p className="max-md:text-sm text-gray-300">Start talking to Andromeda AI</p>
            </div>
          </div>
        )}
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex flex-col max-w-[80%] ${message.role === "user" ? "items-end" : "items-start"}`}>
              <div
                className={`flex items-center gap-2 mb-2 ${message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
              >
                <Avatar className="h-8 w-8">
                  {message.role === "user" ? (
                    <>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/71344171?v=4"
                        className="border rounded-full"
                        alt="User"
                      />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </>
                  ) : (
                    <>
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="AI Assistant"
                      />
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </>
                  )}
                </Avatar>
                <span className="font-medium">
                  {message.role === "user"
                    ? "Andromedian"
                    : "Andromeda AI"
                  }
                </span>
              </div>
              <div
                className={`rounded-lg px-4 py-2 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex flex-col max-w-[80%] items-start">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                  <AvatarFallback>
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Andromeda</span>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              {/* </div> */}
            </div>
          </div>
        )}
      </div>

      <div className="border border-gray-500 bg-[#222] md:p-4 p-3 rounded-2xl">
        <form onSubmit={handleSubmit} className="flex items-end space-x-2 overflow-hidden">
          <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Ask Andomeda..."
            className="flex-1 border-none shadow-none focus-visible:ring-transparent resize-none md:text-xl"
            onKeyDown={handleKeyPress}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading} className="rounded-xl">
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
