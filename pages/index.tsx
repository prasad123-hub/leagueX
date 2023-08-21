import { useContext } from "react";
import Image from "next/image";
import { FeedBackForm } from "@/components/feedback-form";
import { Navbar } from "@/components/navbar";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { Card } from "@/components/card";

export default function Home() {
  const { state } = useContext(UserDetailsContext);
  return (
    <>
      <main className="min-h-screen overflow-y-hidden bg-background">
        <div className="mx-auto max-w-5xl">
          <Navbar />
          <div className="md:grid md:grid-cols-[2fr,1fr] md:gap-x-6">
            <div className="py-10">
              {state.isSubmitted ? <Card /> : <FeedBackForm />}
            </div>
            <div className="hidden md:block">
              <Image
                src="/banner.jpg"
                height={500}
                width={300}
                alt="LeagueX_Banner_Image"
                className="mt-2 h-[95%] rounded-xl object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
