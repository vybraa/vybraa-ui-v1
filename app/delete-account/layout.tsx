import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Delete Your Vybraa Account and Data",
  description:
    "Learn how to request deletion of your Vybraa account and personal data. Step-by-step instructions for Vybraa App users.",
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
