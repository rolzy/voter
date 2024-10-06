"use client";

import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import { policies } from "@/app/polls/data/mock_policies";

export default function PollSwiper() {
  const [currentIndex, setCurrentIndex] = useState(policies.length - 1);
  const [swipedCards, setSwipedCards] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleSwipe = (
    direction: string,
    policy: { id: number; title: string },
  ) => {
    console.log(
      `Voted ${direction === "right" ? "Yes" : "No"} on: ${policy.title}`,
    );
    setSwipedCards((prev) => [...prev, policy.id]);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="container mx-auto mb-4 px-4 flex flex-col items-center h-screen pt-16 overflow-hidden max-h-fit">
      <div className="w-full max-w-sm">
        <h1 className="text-foreground text-2xl font-bold mb-4 text-center">
          PolicySwipe
        </h1>
        <div className="cardContainer relative min-h-[70vh] mb-16">
          {policies.map((policy, index) => (
            <TinderCard
              key={policy.id}
              onSwipe={(dir) => handleSwipe(dir, policy)}
              preventSwipe={["up", "down"]}
              className={`absolute w-full h-full transition-opacity duration-300 ${
                swipedCards.includes(policy.id) ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="bg-zinc-300 dark:bg-zinc-700 p-6 rounded-lg shadow-md border border-border swipe w-full h-full flex flex-col justify-center relative">
                {isDragging && (
                  <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                    <div className="w-1/3 h-full bg-red-500 bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        Disagree
                      </span>
                    </div>
                    <div className="w-1/3 h-full bg-green-500 bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        Agree
                      </span>
                    </div>
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2 text-card-foreground">
                  {policy.title}
                </h2>
                <p className="text-muted-foreground">{policy.description}</p>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
}
