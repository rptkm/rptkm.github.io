"use client";

import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [gameInfo, setGameInfo] = useState("")
  const [loading, setLoading] = useState(false)

  const generateSummary = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      })

      const data = await response.json()
      setGameInfo(data.gameInfo)
    } catch (error) {
      console.error("error:", error)
      setGameInfo("Error generating summary")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-4 font-mono">
          What game would you like to know about?
        </h1>
        <input
          type="text"
          placeholder="Enter your game name"
          className="outline-none border-b border-gray-300 w-full max-w-md text-2xl font-mono"
          value={input}
          onChange={(e) => setInput(e.target.value)}

        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center font-mono justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href=""
            type="button"
            target=""
            onClick={generateSummary}
            disabled = {loading}
          >
            Summarize
          </a>

        </div>
        {gameInfo && (
          <div className="mt-8 w-full max-w-4xl text-center mx-auto">
            <h2 className="text-2xl font-bold mb-4 font-mono">Game Summary</h2>
            <p className="text-lg font-mono">{gameInfo}</p>
          </div>
        )}
      </main >
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://rptkm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to rptkm.org →
        </a>

      </footer>
    </div >
  );
}
