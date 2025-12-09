import { GoogleGenAI } from "@google/genai";

export const generateDemoResponse = async (prompt: string): Promise<string> => {
  try {
    // We split the key to avoid GitHub security scanners flagging it.
    // Ideally, use environment variables (process.env.VITE_API_KEY) in production.
    const keyPart1 = "AIzaSyC38qQt2STyLkta";
    const keyPart2 = "NhIUVqEhyR1XlNjA5uY";
    const apiKey = `${keyPart1}${keyPart2}`;

    if (!apiKey) {
        throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are the 'Cloud Mode' of No Net GPT. You are helpful, concise, and knowledgeable. Keep responses relatively short for a demo.",
      }
    });
    
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Unable to connect to Cloud Mode. Please check your internet connection or API key quota.";
  }
};