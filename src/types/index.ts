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
}

export interface Tools {
  title: string;
  description: string;
  image: string;
}
