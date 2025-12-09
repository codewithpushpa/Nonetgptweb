import { GoogleGenAI } from "@google/genai";

export const generateDemoResponse = async (prompt: string): Promise<string> => {
  try {
    // Hardcoded API Key as per user request to ensure Vercel deployment works immediately.
    // Since the repo is private/controlled, this is acceptable for this use case.
    const apiKey = "AIzaSyC38qQt2STyLktaNhIUVqEhyR1XlNjA5uY";

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