import { GoogleGenAI } from "@google/genai";

// Initialize the client
// The API key is injected from the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDemoResponse = async (prompt: string): Promise<string> => {
  try {
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
    return "Error: Unable to connect to Cloud Mode. This demo requires a valid API key.";
  }
};