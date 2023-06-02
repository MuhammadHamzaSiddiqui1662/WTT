import { FC, ReactNode } from "react";

export interface Route {
  name: string;
  url: `/${string}`;
  component: any;
}

export interface Notes {
  title: string;
  description: string;
  image: string;
  alt: string;
}
export interface NotesConfig {
  sectionHeading: string;
  content: Notes[];
}

export interface Tools {
  title: string;
  price: number;
  image: string;
  alt: string;
  planId: string;
}
export interface ToolsConfig {
  sectionHeading: string;
  content: Tools[];
}

export interface InsightsConfig {
  heading: string;
  src: string;
  descriptions: string[];
}
