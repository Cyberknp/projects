
import { GoogleGenAI, Type } from "@google/genai";
import { MatchingResult, Guide } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function findMatuguideMatch(userInput: string, availableGuides: Guide[]): Promise<MatchingResult> {
  const guideProfiles = availableGuides.map(g => ({
    id: g.id,
    tags: g.experienceTags,
    bio: g.bio
  }));

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `
      User Situation: "${userInput}"
      Available Guides: ${JSON.stringify(guideProfiles)}
      
      Help this person find a 'Matuguide'. 
      Return a JSON object with:
      1. suggestedGuideIds: string[] (up to 2 best matches)
      2. reasoning: string (why these people can help)
      3. comfortingWords: string (a warm, empathetic message to the user)
    `,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          suggestedGuideIds: { type: Type.ARRAY, items: { type: Type.STRING } },
          reasoning: { type: Type.STRING },
          comfortingWords: { type: Type.STRING }
        },
        required: ["suggestedGuideIds", "reasoning", "comfortingWords"]
      }
    }
  });

  return JSON.parse(response.text) as MatchingResult;
}

export async function generateWelcomeMessage(name: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Write a very warm, short (2 sentences), and comforting welcome message for a new user named ${name} who is visiting Matuguides, a place for healing and peer wisdom.`,
  });
  return response.text;
}
