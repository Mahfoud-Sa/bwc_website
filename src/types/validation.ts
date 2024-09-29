import { useTranslation } from "react-i18next";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const addReferenceSchema = z.object({
  ar_title: z.string({ message: "مطلوب " }).max(20),
  en_title: z.string({ message: "مطلوب " }).max(20),
  link: z.string({ message: "مطلوب " }).max(1000),
});
export const addServicesSchema = z.object({
  ar_name: z.string({ message: "مطلوب " }).max(20),
  en_name: z.string({ message: "مطلوب " }).max(20),
  ar_Description: z.string({ message: "مطلوب " }).max(1000),
  en_Description: z.string({ message: "مطلوب " }).max(1000),
});
export const addReportSchema = z.object({
  Ar_Title: z.string({ message: "مطلوب " }).max(20),
  En_Title: z.string({ message: "مطلوب " }).max(20),
  Img: z.string({ message: "مطلوب " }).max(1000),
  Ar_description: z.string({ message: "مطلوب " }).max(1000),
  En_description: z.string({ message: "مطلوب " }).max(1000),
  Ar_executive_summary: z.string({ message: "مطلوب " }).max(1000),
  En_executive_summary: z.string({ message: "مطلوب " }).max(1000),
  Ar_table_of_content: z.string({ message: "مطلوب " }).max(1000),
  Er_table_of_content: z.string({ message: "مطلوب " }).max(1000),
  date_of_report: z.string({ message: "مطلوب " }).max(1000),
  date_of_publish: z.string({ message: "مطلوب " }).max(1000),
  PdfImg: z.string({ message: "مطلوب " }).max(1000),
  pdf_link: z.string({ message: "مطلوب " }).max(1000),
  An_note: z.string({ message: "مطلوب " }).max(1000),
  En_note: z.string({ message: "مطلوب " }).max(1000),
});
export const addJobSchema = z.object({
  Ar_jobTitle: z.string({ message: "مطلوب " }).max(20),
  En_jobTitle: z.string({ message: "مطلوب " }).max(20),
  ImageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    }),
  avaliable: z.boolean(),
  publish: z.boolean(),
  Ar_skiles: z.array(z.string({ message: "مطلوب " })).optional(),
  En_skiles: z.array(z.string({ message: "مطلوب " })).optional(),
  Ar_advances: z.array(z.string({ message: "مطلوب " })).optional(),
  En_advances: z.array(z.string({ message: "مطلوب " })).optional(),
  Ar_basicDescription: z.string({ message: "مطلوب " }).max(1000),
  En_basicDescription: z.string({ message: "مطلوب " }).max(1000),
  formLink: z.string({ message: "مطلوب " }).max(1000),
  endDate: z.string(),
});
export const updateJobSchema = z.object({
  Ar_jobTitle: z.string({ message: "مطلوب " }).max(20),
  En_jobTitle: z.string({ message: "مطلوب " }).max(20),
  ImageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    })
    .optional(),
  avaliable: z.boolean(),
  publish: z.boolean(),
  Ar_skiles: z.array(z.string({ message: "مطلوب " })).optional(),
  En_skiles: z.array(z.string({ message: "مطلوب " })).optional(),
  Ar_advances: z.array(z.string({ message: "مطلوب " })).optional(),
  En_advances: z.array(z.string({ message: "مطلوب " })).optional(),
  Ar_basicDescription: z.string({ message: "مطلوب " }).max(1000),
  En_basicDescription: z.string({ message: "مطلوب " }).max(1000),
  formLink: z.string({ message: "مطلوب " }).max(1000),
  endDate: z.string(),
});
export const addTaskForceSchema = z.object({
  Ar_name: z.string({ message: "مطلوب " }).max(20),
  En_name: z.string({ message: "مطلوب " }).max(20),
  Ar_degree: z.string({ message: "مطلوب " }).max(20),
  En_degree: z.string({ message: "مطلوب " }).max(20),
  Ar_role: z.string({ message: "مطلوب " }).max(20),
  En_role: z.string({ message: "مطلوب " }).max(20),
  ImageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    })
    .optional(),
});

export const addOrgSchema = z.object({
  Ar_name: z.string({ message: "مطلوب " }),
  En_name: z.string({ message: "مطلوب " }),
  Link: z.string({ message: "مطلوب " }),
  ImageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    }),
});
export const updateOrgSchema = z.object({
  Ar_name: z.string({ message: "مطلوب " }),
  En_name: z.string({ message: "مطلوب " }),
  Link: z.string({ message: "مطلوب " }),
  ImageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    })
    .optional(),
});
export const addWriterSchema = z.object({
  Ar_fullName: z
    .string({ message: "مطلوب " })
    .nonempty("Arabic full name is required"),
  En_fullName: z
    .string({ message: "مطلوب " })
    .nonempty("English full name is required"),
  ImageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    }),
  Ar_description: z
    .string({ message: "مطلوب " })
    .nonempty("Arabic description is required"),
  En_description: z
    .string({ message: "مطلوب " })
    .nonempty("English description is required"),
  Ar_role: z.string({ message: "مطلوب " }).nonempty("Arabic role is required"),
  En_role: z.string({ message: "مطلوب " }).nonempty("English role is required"),
  Soicalmedia: z
    .array(
      z.object({
        name: z.string(),
        url: z.string().min(10, "URL should be at least 10 characters long"),
      })
    )
    .optional(),
});
export const UpdateWriterSchema = z.object({
  Ar_fullName: z
    .string({ message: "مطلوب " })
    .nonempty("Arabic full name is required"),
  En_fullName: z
    .string({ message: "مطلوب " })
    .nonempty("English full name is required"),
  ImageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    })
    .optional(),
  Ar_description: z
    .string({ message: "مطلوب " })
    .nonempty("Arabic description is required"),
  En_description: z
    .string({ message: "مطلوب " })
    .nonempty("English description is required"),
  Ar_role: z.string({ message: "مطلوب " }).nonempty("Arabic role is required"),
  En_role: z.string({ message: "مطلوب " }).nonempty("English role is required"),
});

export type ReferenceResp = {
  id: number;
  ar_title: string;
  en_title: string;
  link: string;
};
export type TaskForceRespTable = {
  id: number;
  ar_name: string;
  en_name: string;
  ar_degree: string;
  en_degree: string;
  ar_role: string;
  en_role: string;
  img: string;
};
export interface WriterResp {
  id: number;
  ar_fullName: string;
  en_fullName: string;
  image: string;
  ar_description: string;
  en_description: string;
  ar_role: string;
  en_role: string;
  publication: any[];
  soicalmedia: Soicalmedia[];
}

export interface Writer {
  id: number;
  ar_fullName: string;
  en_fullName: string;
  image: string;
  ar_description: string;
  en_description: string;
  ar_role: string;
  en_role: string;
  publication: any[];
  soicalmedia: Array<Soicalmedia | null>;
}

export interface Soicalmedia {
  id: number;
  name: string;
  url: string;
  writerId: number;
  writer: Writer | null;
}
export type TaskForceResp = {
  id: number;
  ar_name: string;
  en_name: string;
  ar_degree: string;
  en_degree: string;
  ar_role: string;
  en_role: string;
  img: string;
};
export type OgResp = {
  id: number;
  name: string;
  img: string;
  link: string;
};

export interface ServicesHomeProp {
  ar_name: string;
  en_name: string;
  ar_Description: string;
  en_Description: string;
}
export interface ProfileResp {
  FormFile: File;
  name: string;
}

export type ServicesHomeResp = ServicesHomeProp[];
