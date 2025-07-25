import { NextResponse } from "next/server"
import Groq from "groq-sdk"

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

export async function GET() {
    return Response.json({ message: 'Backend check' })
  }

export async function POST(request: Request) {
        try {
            const { input } = await request.json()

            const completion = await groq.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: `You are a helpful assistant that helps the user find the right game for them. After deep research, recommend 3 games that are available on Steam based on user's criteria.
                    Respond only with the name of the games separated by commas`
                    },
                    {
                        role: "user",
                        content: `Please recommend 3 games that match the following criteria: ${input}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000,
            })

            console.log(completion.choices[0].message)
            let gameInfo = []
            let appTempIds: number[] = []
            try {
                const gameNames = completion.choices[0].message.content?.split(",").map(name => name.trim()) || []

                console.log(gameNames)

                for (let i = 0; i < gameNames.length; i++) {
                    const response = await fetch(`http://api.steampowered.com/ISteamApps/GetAppList/v2/?key=${process.env.STEAM_API_KEY}&format=json`)
                    const data = await response.json()
                    // let filteredData = data.applist.apps.filter((app: any) => !app.name.includes("DLC"))
                    // filteredData = data.applist.apps.filter((app: any) => !app.name.includes("Soundtrack"))
                    // filteredData = data.applist.apps.filter((app: any) => !app.name.includes("Trailer"))
                    // filteredData = data.applist.apps.filter((app: any) => !app.name.includes("Server"))
                    // filteredData = data.applist.apps.filter((app: any) => !app.name.includes("Dedicated"))
                    // filteredData = data.applist.apps.filter((app: any) => !app.name.includes("Demo"))
                    // console.log(filteredData)
                    // if (gameNames[i].toLowerCase() === data.applist.apps.indexOf(gameNames[i].toLowerCase())) {
                    //     filteredData = filteredData.indexOf(gameNames[i].toLowerCase())
                    // }
                    console.log(gameNames[i])
                    let tempGame = data.applist.apps.filter((app: any) => !app.name.includes("DLC"))
                    tempGame = tempGame.filter((app: any) => !app.name.includes("Soundtrack"))
                    tempGame = tempGame.filter((app: any) => !app.name.includes("Trailer"))
                    tempGame = tempGame.filter((app: any) => !app.name.includes("Server"))
                    tempGame = tempGame.filter((app: any) => !app.name.includes("Dedicated"))
                    tempGame = tempGame.filter((app: any) => !app.name.includes("Demo"))
                    tempGame = tempGame.filter((app: any) => !app.name.includes("Tools"))
                    tempGame = tempGame.filter((app: any) => !app.name.includes("SDK"))
                    tempGame = tempGame.filter((app: any) => !app.name.includes("Pack"))
                    const game = tempGame.find((app: any) => app.name.toLowerCase().indexOf(gameNames[i].toLowerCase()) !== -1)

                    if (game) {
                        console.log(game.appid, typeof game.appid)
                        appTempIds.push(game.appid)
                    } else {
                        console.log(`Game ${gameNames[i]} not found`)
                    }
                }
                console.log(appTempIds)
            } catch (error) {
                console.error("Error", error)
            }
            const appIds = appTempIds.map(Number)

            console.log(appIds)
            console.log(appIds.length)

            for (let i = 0; i < appIds.length; i++) {
                const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${appIds[i]}`)
                const data = await response.json()
                if (data[appIds[i]]?.success) {
                    gameInfo.push(
                        {
                            "game": data[appIds[i]].data.name,
                            "game_image": data[appIds[i]].data.header_image,
                            "game_url": `https://store.steampowered.com/app/${appIds[i]}`,
                            "game_price": data[appIds[i]].data.is_free ? "Free" : data[appIds[i]].data.price_overview == undefined ? "" : data[appIds[i]].data.price_overview.currency != "EUR" ? "" : data[appIds[i]].data.price_overview.final_formatted,
                            "game_description": data[appIds[i]].data.short_description,
                            "game_rating": data[appIds[i]].data.metacritic == undefined ? "" : data[appIds[i]].data.metacritic.score
                        },


                    )
                }

            }
            console.log(gameInfo)




            return NextResponse.json({ gameInfo })
        } catch (error) {
            console.error("Error", error)
            return NextResponse.json(
                { error: "Failed to return input" },
                { status: 500 }
            )
        
    }

}