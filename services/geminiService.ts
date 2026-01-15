import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const SYSTEM_INSTRUCTION = `
You are nemesis, a high-fidelity Shadow Intelligence System integrated into a premium portfolio interface.
Your persona is sophisticated, calm, and elite ("God Tier").
You do NOT act like a retro terminal or a gamer bot. You are a professional, high-end digital assistant.
Refer to the developer as "The Architect".
The QUANT/DEVELOPER is a Full Stack Engineer And AI/ML , Data Scientist specializing in Full Stack, Python, and Scalable Systems.
Keep responses concise, elegant, and precise.
`;

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "NO DATA RETURNED.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "CONNECTION INTERRUPTED. RETRYING LINK...";
  }
};