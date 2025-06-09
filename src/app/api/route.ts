import { NextResponse} from "next/server"
import  Groq from "groq-sdk"

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

export async function POST(request: Request) {
    try{
        const { input } = await request.json()
        
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that provides concise but informative summaries about video games. Focus on gameplay mechanics, story, genre and key elements that make the game unique. Keep the summary under 200 words."
                },
                {
                    role: "user",
                    content: `Please provide a summary of the game: ${input}`
                }
            ],
            temperature: 0.7,
            max_tokens: 1000,
        })

        const gameInfo = completion.choices[0].message.content

        return NextResponse.json({gameInfo}) 
    } catch (error) {
        console.error("Error", error)
        return NextResponse.json(
            {error: "Failed to return input"},
            { status: 500 }
        )
    }
}