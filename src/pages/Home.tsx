import React from "react";

export default function Home() {
    return (
        <section className="flex min-h-[calc(100vh)] flex-col items-center justify-center bg-slate-900 px-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-5xl">
            TKScore
        </h1>
        <p className="mt-4 text-lg font-medium text-slate-400 sm:text-xl">
            Calculate your TKA/TKAD Score
        </p>
        </section>
    );
}