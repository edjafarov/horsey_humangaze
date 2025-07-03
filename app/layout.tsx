import { ReactNode } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://equine.humangaze-photography.com'),
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}