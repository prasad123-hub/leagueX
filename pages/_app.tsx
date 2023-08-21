import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { fontHeading, fontSans } from "@/lib/fonts";
import { UserDetailsContextProvider } from "@/context/UserDetailsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserDetailsContextProvider>
      <main
        className={cn(
          "min-h-screen bg-background font-sans antialiased px-6 lg:px-0",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Component {...pageProps} />
      </main>
    </UserDetailsContextProvider>
  );
}
