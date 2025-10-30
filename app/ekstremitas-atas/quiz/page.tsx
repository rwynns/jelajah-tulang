"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PURPLE_BLUR_DATA_URL } from "@/lib/blur-placeholder";

interface Answer {
  id: string;
  text?: string;
  image?: string;
}

interface Question {
  id: number;
  question: string;
  image?: string;
  answers: Answer[];
  correctAnswer: string;
  type: "text" | "image-question" | "image-answer";
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Apa Nama Tulang Di Samping?",
    image: "/images/quizImages/book2_question1.png",
    type: "image-question",
    answers: [
      { id: "A", text: "A. Scapula" },
      { id: "B", text: "B. Ulna" },
      { id: "C", text: "C. Humerus" },
    ],
    correctAnswer: "C",
  },
  {
    id: 2,
    question: "Manakah Yang Merupakan Tulang Clavicula?",
    type: "image-answer",
    answers: [
      { id: "A", image: "/images/quizImages/book2_answer1.png" },
      { id: "B", image: "/images/quizImages/book2_answer2.png" },
      { id: "C", image: "/images/quizImages/book2_answer3.png" },
    ],
    correctAnswer: "A",
  },
  {
    id: 3,
    question: "Tulang Apakah Yang Sejajar Dengan Ibu Jari?",
    type: "text",
    answers: [
      { id: "A", text: "A. Ulna" },
      { id: "B", text: "B. Radius" },
      { id: "C", text: "C. Carpal" },
    ],
    correctAnswer: "B",
  },
  {
    id: 4,
    question: "Tulang Apa Yang Ada Di Bagian Wrist?",
    type: "text",
    answers: [
      { id: "A", text: "A. Radius dan Ulna" },
      { id: "B", text: "B. Carpal, Metacarpal, dan Phalangs" },
      { id: "C", text: "C. Scapula dan Clavicula" },
    ],
    correctAnswer: "B",
  },
  {
    id: 5,
    question: "Apakah Fungsi Dari Tulang Ekstremitas Atas?",
    type: "text",
    answers: [
      { id: "A", text: "A. Menggerakan Kepala" },
      { id: "B", text: "B. Menendang Bola" },
      { id: "C", text: "C. Menulis" },
    ],
    correctAnswer: "C",
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false));

  const question = quizQuestions[currentQuestion];

  const handleAnswerClick = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleNextClick = () => {
    // Check if answer is correct
    if (selectedAnswer === question.correctAnswer && !answeredQuestions[currentQuestion]) {
      setScore(score + 1);
      const newAnswered = [...answeredQuestions];
      newAnswered[currentQuestion] = true;
      setAnsweredQuestions(newAnswered);
    }

    // Move to next question or show results
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    // Get emoji based on score (0-5)
    const emojiImage = `/images/emojis/${score}.png`;

    // Get message based on score
    const getMessage = () => {
      if (score === 5) return "Sempurna! Kamu Luar Biasa! 🎉";
      if (score === 4) return "Bagus Sekali! Hampir Sempurna! 👏";
      if (score === 3) return "Bagus! Pertahankan! 👍";
      if (score === 2) return "Lumayan! Terus Belajar! 📚";
      if (score === 1) return "Jangan Menyerah! Coba Lagi! 💪";
      return "Ayo Semangat! Belajar Lagi Ya! 🌟";
    };

    return (
      <div className="relative flex flex-col items-center justify-center w-full h-screen">
        <Image src="/images/background_video.png" alt="Background Quiz" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-6xl font-bold text-white mb-8">Quiz Selesai!</h1>

          {/* Emoji based on score */}
          <div className="mb-8">
            <Image src={emojiImage} alt={`Score ${score}`} width={200} height={200} className="object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </div>

          <p className="text-5xl font-bold text-white mb-4">
            {score} / {quizQuestions.length}
          </p>
          <p className="text-3xl text-white mb-8">{getMessage()}</p>

          <Link href="/pilih_kelas" className="inline-block px-8 py-4 bg-purple-600 text-white text-2xl rounded-lg hover:bg-purple-700 transition-colors">
            Kembali ke Pilih Kelas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen">
      <Image src="/images/background_video.png" alt="Background Quiz" fill className="object-cover object-center" priority quality={75} sizes="100vw" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />

      {/* Quiz Content */}
      <div className="relative z-10 w-full max-w-6xl px-8">
        {/* Progress Indicator */}
        <div className="text-right mb-8">
          <p className="text-white text-2xl font-bold">
            Soal {currentQuestion + 1}/{quizQuestions.length}
          </p>
        </div>

        {/* Question Section */}
        {question.type === "image-question" ? (
          // Layout for questions with image (side by side)
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">{question.question}</h2>

            <div className="flex items-center justify-center gap-16 w-full">
              {/* Question Image on the left */}
              <div className="shrink-0">
                <Image src={question.image!} alt="Question Image" width={350} height={350} className="object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
              </div>

              {/* Answers on the right */}
              <div className="flex flex-col gap-6 w-full max-w-md">
                {question.answers.map((answer) => (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswerClick(answer.id)}
                    className={`bg-white text-purple-600 text-2xl font-bold py-6 px-8 rounded-2xl transition-all duration-300 hover:bg-purple-100 hover:scale-105 ${selectedAnswer === answer.id ? "scale-110" : ""}`}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Layout for questions without image (standard)
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">{question.question}</h2>

            {/* Answers Section */}
            <div className="flex flex-col items-center gap-6 mb-12 w-full">
              {question.type === "image-answer" ? (
                // Image-based answers (3 images in a row)
                <div className="flex gap-8 justify-center">
                  {question.answers.map((answer) => (
                    <button key={answer.id} onClick={() => handleAnswerClick(answer.id)} className={`p-6 transition-all duration-300 hover:scale-115  ${selectedAnswer === answer.id ? "scale-115" : ""}`}>
                      <Image src={answer.image!} alt={`Answer ${answer.id}`} width={280} height={280} className="object-contain" placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
                    </button>
                  ))}
                </div>
              ) : (
                // Text-based answers
                <div className="flex flex-col gap-6 w-full max-w-3xl">
                  {question.answers.map((answer) => (
                    <button
                      key={answer.id}
                      onClick={() => handleAnswerClick(answer.id)}
                      className={`bg-white text-purple-600 text-2xl font-bold py-6 px-8 rounded-2xl transition-all duration-300 hover:bg-purple-100 hover:scale-105 ${selectedAnswer === answer.id ? "scale-110" : ""}`}
                    >
                      {answer.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Next Button */}
      {selectedAnswer && (
        <button onClick={handleNextClick} className="absolute bottom-20 right-20 z-10 hover:opacity-70 transition-opacity">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold mb-2 text-white drop-shadow-lg">Next</p>
            <Image src="/images/next_button.png" alt="Next Button" width={120} height={120} placeholder="blur" blurDataURL={PURPLE_BLUR_DATA_URL} />
          </div>
        </button>
      )}
    </div>
  );
}
