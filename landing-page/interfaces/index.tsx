import { ReactNode } from "react";

export interface ButtonProps{
  title: string;
  action?: () => void
};

export interface ComponentProps{
  children:ReactNode
}