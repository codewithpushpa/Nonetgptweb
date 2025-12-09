import { GoogleGenAI } from "@google/genai";

export const generateDemoResponse = async (prompt: string): Promise<string> => {
  // 1. Custom Founder Logic
  const lowerPrompt = prompt.toLowerCase();
  if (lowerPrompt.includes('founder') || lowerPrompt.includes('created by') || lowerPrompt.includes('maker') || lowerPrompt.includes('who made you')) {
      return "Mohammad Akib Javed";
  }

  try {
    // 2. Retrieve API Key
    // Strictly obtain the API key from process.env.API_KEY as per coding guidelines.
    // The guidelines state: "The API key must be obtained exclusively from the environment variable process.env.API_KEY."
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are the 'Cloud Mode' of No Net GPT. You are helpful, concise, and knowledgeable. You prioritize privacy and offline capabilities in your explanations. Keep responses relatively short for a demo.",
      }
    });
    
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Unable to connect to No Net GPT Cloud Relay. Please check your internet connection or API key configuration.";
  }
};