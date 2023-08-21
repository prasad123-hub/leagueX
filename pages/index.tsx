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
      <main className="bg-background min-h-screen overflow-y-hidden">
        <div className="max-w-5xl mx-auto">
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
                className="object-cover h-[95%] mt-2 rounded-xl opacity-80"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
