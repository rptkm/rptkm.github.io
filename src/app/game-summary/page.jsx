"use client";
import Image from "next/image"
import { useState } from "react"
import { ArrowPathIcon } from "@heroicons/react/24/outline"

export default function Home() {
  const [input, setInput] = useState("")
  const [gameInfo, setGameInfo] = useState([])
  const [loading, setLoading] = useState(false)

  const generateSummary = async (e) => {
    e.preventDefault()
    setLoading(true)
    document.getElementById("game-info").innerHTML = ""
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      })

      const data = await response.json()

      console.log(data)
      console.log(data.gameInfo)
      console.log(gameInfo)
      console.log("I EXIST")
      for (let i = 0; i < data.gameInfo.length; i++) {
        document.getElementById("game-info").innerHTML += `
      <div class="mx-4 w-full sm:w-1/${data.gameInfo.length}">
        <div class="flex flex-col items-center gap-4">
          <Image src=${data.gameInfo[i].game_image} alt=${data.gameInfo[i].game} width={200} height={200} />
          <p class="text-2xl font-bold my-4">${data.gameInfo[i].game}</p>
        </div>
        <div class="border-t border-gray-300 w-full "></div>
        <div class="flex flex-row items-center gap-4 mt-4">
          <div class="flex flex-col items-start gap-4 w-1/3">
            <p class="text-lg font-bold">Price: ${data.gameInfo[i].game_price == "Free" ? "Free" : data.gameInfo[i].game_price == "" ? "" : data.gameInfo[i].game_price}</p>
            <p class="text-lg font-bold">Rating: ${data.gameInfo[i].game_rating == "" ? "No rating" : data.gameInfo[i].game_rating + "/100"}</p>
            <a class=" text-sm rounded-full bg-foreground text-background transition-colors px-6 py-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium" href=${data.gameInfo[0].game_url} target="_blank" rel="noopener noreferrer">Steam page</a>
          </div>
          <div class="items-center gap-4 w-2/3">
                <p class="text-md">${data.gameInfo[i].game_description}</p>
          </div>
        </div>
      </div>
        `
      }
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
          What kind of game are you looking for?
        </h1>
        <input
          type="text"
          placeholder="I want to play a shooter where you can level up"
          className="outline-none border-b border-gray-300 w-full max-w-2xl text-2xl font-mono"
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
            disabled={loading}
          >
            {loading ? (
              <ArrowPathIcon className="w-4 h-4 animate-spin" />
            ) : (
              'Recommend'
            )}
          </a>

        </div>
        <div id="game-info" className="flex flex-col items-center gap-16 my-10 text-center xl:flex-row">
          {/* <div class="mx-4 w-full sm:w-1/${data.gameInfo.length}">
        <div class="flex flex-col items-center gap-4">
          <Image src="/actuallyme.png" alt="actuallyme" width={200} height={200} />
          <p class="text-2xl font-bold my-4">Path of Exile</p>
        </div>
        <div class="border-t border-gray-300 w-full "></div>
        <div class="flex flex-row items-center gap-4 mt-4">
          <div class="flex flex-col items-start gap-4 w-1/3">
            <p class="text-lg font-bold">Price: $200</p>
            <p class="text-lg font-bold">Rating: 100/100</p>
            <a class=" text-sm rounded-full bg-foreground text-background transition-colors px-6 py-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium" href="rptkm.com" target="_blank" rel="noopener noreferrer">Steam page</a>
          </div>
          <div class="items-center gap-4 w-2/3">
                <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus facilis, ex consequatur veritatis rem totam perspiciatis recusandae iure possimus sunt? Voluptate ut unde quo autem, natus distinctio dolorum explicabo!</p>
          </div>
        </div>
      </div>  //testing div*/}
        </div>
      </main >

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://rptkm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to rptkm.com →
        </a>

      </footer>
    </div >
  );
}
