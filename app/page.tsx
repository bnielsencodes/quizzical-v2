"use client";


interface GameOptions {
  category: string;
  difficulty: string;
  type: string;
}

interface Question {
  id: string;
  question: string;
  answers: string[];
  correct: string;
  selected: string | null;
  checked: boolean;
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        />
    </main>
  );
}
