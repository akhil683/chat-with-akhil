"use client"

import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUp, Bot, Github, Link, MessageCircle, Twitter, User } from "lucide-react"
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
    <div className="flex min-h-screen flex-col p-4 max-w-3xl mx-auto">

      <div className="flex-1 justify-center flex flex-col gap-2 overflow-y-auto p-4 h-full">
        {messages.length < 1 && (
          <div className="h-full flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="https://avatars.githubusercontent.com/oa/2827716?s=140&u=3f51c827df36248b4e060a0abfb7662f8bd2cd8d&v=4"
                width={300}
                height={300}
                className="max-h-24 max-w-24 rounded-full border" alt="Logo"
              />
              <p className="md:text-lg text-white text-center">
                Wanna know about Akhil? <br />
                <span className="text-sm text-gray-300">
                  Start talking to Andromeda AI
                </span>
              </p>
              <div className="flex justify-center items-center gap-2 mt-4">
                <a href="https://github.com/akhil683" target="_blank">
                  <Github className="w-8 h-8 p-1 rounded-full bg-gray-300 hover:bg-gray-100 duration-200 text-gray-900" />
                </a>
                <a href="https://x.com/akkhil_dev" target="_blank">
                  <Twitter className="w-8 h-8 p-1 rounded-full bg-gray-300 hover:bg-gray-100 duration-200 text-gray-900" />
                </a>
                <a href="https://akkhil.dev" target="_blank">
                  <Link className="w-8 h-8 p-1 rounded-full bg-gray-300 hover:bg-gray-100 duration-200 text-gray-900" />
                </a>
              </div>
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

      <div className="max-w-3xl mx-auto opacity-0 shadow-xl shadow-black border border-gray-500 bg-[#222] md:p-4 p-3 rounded-2xl">
        <form onSubmit={handleSubmit} className="flex items-end space-x-2 overflow-hidden">
          <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Ask Andomeda..."
            className="flex-1 border-none shadow-none focus-visible:ring-transparent resize-none text-gray-200 md:text-lg"
            onKeyDown={handleKeyPress}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading} className="rounded-xl">
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>

      <div className="fixed max-w-3xl mx-auto bottom-2 left-0 right-0 shadow-xl shadow-black border border-[#555] bg-[#222] md:p-4 p-3 rounded-2xl">
        <form onSubmit={handleSubmit} className="flex items-end space-x-2 overflow-hidden">
          <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Ask Andomeda..."
            className="flex-1 border-none shadow-none focus-visible:ring-transparent resize-none text-gray-200 md:text-lg"
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
