import "@/app/globals.css";
import Bottombar from "@/components/shared/Bottombar";
import Leftbar from "@/components/shared/Leftbar";
import Rightbar from "@/components/shared/Rightbar";
import Topbar from "@/components/shared/Topbar";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A clone Threads with next 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>
        <ClerkProvider>
          <Topbar />
          <main className="flex flex-row">
            <Leftbar />
            <section className="main-container">
              <div className="max-w-4xl w-full">{children}</div>
            </section>
            <Rightbar />
          </main>
          <Bottombar />
        </ClerkProvider>
      </body>
    </html>
  );
}
