
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API only if the key exists
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const getAIFeedback = async (
    question: string,
    userAnswer: string,
    correctAnswer: string,
    existingExplanation: string
): Promise<string> => {
    if (!API_KEY) {
        throw new Error("Missing VITE_GEMINI_API_KEY environment variable");
    }

    // DEBUG: List available models
    try {
        console.log("Fetching available models...");
        const listParams = { key: API_KEY };
        const q = new URLSearchParams(listParams).toString();
        const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?${q}`);
        const d = await r.json();
        console.log("AVAILABLE_MODELS:", JSON.stringify(d, null, 2));
    } catch (e) {
        console.error("Failed to list models", e);
    }

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
      Context: Educational Quiz on the Indian Constitution.
      Question: "${question}"
      User's Wrong Answer: "${userAnswer}"
      Correct Answer: "${correctAnswer}"
      Standard Explanation: "${existingExplanation}"

      Task: Explain to the student specifically why their answer ("${userAnswer}") is incorrect or less appropriate than the correct answer. 
      Identify the misconception they likely have. 
      Keep the tone encouraging and pedagogical. 
      Keep the response concise (max 3-4 sentences).
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error: any) {
        console.error("FULL AI ERROR:", error);
        if (error.message && error.message.includes("404") && error.message.includes("not found")) {
            return `AI Error: Model not found (404). Please ensure your API Key is valid and the "Generative Language API" is enabled in your Google Cloud Console. Your key may not have access to 'gemini-1.5-flash'.`;
        }
        return `AI Error: ${error.message || "Unknown error occurred"}`;
    }
};