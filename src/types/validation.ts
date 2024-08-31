import { z } from "zod";

export const addReferenceSchema = z.object({
  title: z.string(),
  link: z.string(),
});

export type ReferenceResp = {
  id: number;
  ar_title: string;
  en_title: string;
  link: string;
};
