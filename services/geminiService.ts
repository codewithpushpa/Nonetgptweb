import { GoogleGenAI } from "@google/genai";

export const generateDemoResponse = async (prompt: string): Promise<string> => {
  try {

    const apiKey = `AIzaSyC38qQt2STyLktaNhIUVqEhyR1XlNjA5uY`;

    if (!apiKey) {
        throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are the 'Cloud Mode' of No Net GPT. You are a helpful, secure, and privacy-conscious AI assistant. You are currently connected to the internet to help with complex tasks, but you respect the user's preference for offline privacy when this mode is toggled off. Keep responses relatively short for a demo.",
      }
    });
    
    return response.text || "No response generated.";
  } catch (error) {
    // console.error("Gemini API Error:", error); // Suppress log to keep console clean
    return "Error: Unable to connect to No Net GPT Cloud Relay. Please check your internet connection.";
  }
};
