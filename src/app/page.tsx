"use client";

import { useReplicate } from "@/lib/client/use-replicate";

export default function Home() {
  const { requests, addRequest } = useReplicate();

  return (
    <main className="min-h-screen bg-white">
      <div className="grid grid-cols-2 gap-4 p-4">
        {requests &&
          Object.keys(requests).map((key) => {
            const request = requests[key];

            return (
              <div
                key={key}
                className="border border-black flex flex-col-reverse items-center justify-center text-center"
              >
                {request.output ? (
                  <img src={request.output} />
                ) : (
                  <pre className="animate-pulse w-full h-full bg-black text-white flex items-center justify-center">CREATING...</pre>
                )}
              </div>
            );
          })}
        <button
          className="text-black border border-black px-4 py-2"
          onClick={() => {
            addRequest(
              { prompt: "photo the earth taken from the moon, cinematic, dramatic" },
              "c221b2b8ef527988fb59bf24a8b97c4561f1c671f73bd389f866bfb27c061316"
            );
          }}
        >
          CREATE
        </button>
      </div>
    </main>
  );
}
