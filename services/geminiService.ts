
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getGeminiClient = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Generates creative ideas based on a given prompt using the Gemini API.
 * @param prompt The user's prompt for generating ideas.
 * @returns A promise that resolves to the generated text content.
 */
export const generateCreativeIdea = async (prompt: string): Promise<string> => {
  try {
    const ai = getGeminiClient();
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Using gemini-2.5-flash for general text tasks
      contents: prompt,
      config: {
        temperature: 0.7, // Adjust for creativity vs. focus
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 500,
        thinkingConfig: { thinkingBudget: 200 } // Allocate thinking budget for flash model
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        if (error.message.includes("403") || error.message.includes("Forbidden")) {
            throw new Error("Gemini API access denied. Please ensure your API key is correct and has the necessary permissions.");
        }
        throw new Error(`Failed to generate idea: ${error.message}`);
    }
    throw new Error("Failed to generate idea due to an unknown error.");
  }
};
