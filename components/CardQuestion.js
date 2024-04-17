'use client'

import { useState } from "react";
import Image from "next/image";

export default function CardQuestion(props) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const question = props.question[index].question;
  const key = props.question[index].key;
  const img = props.question[index].img;
  const options = props.question[index].options;
  const correctAns = props.question[index]["correct-answer"];

  const handleSubmit = () => {
    props.question.splice(index, 1);
    setIndex(Math.floor(Math.random() * props.question.length));
  }

  return(
    <div className="w-full pt-16 flex flex-col sm:flex-row justify-center items-center gap-8">
      <div className="w-fit h-fit p-2 border-2 border-amber-400 outline outline-2 outline-amber-400 outline-offset-[-6px] rounded-lg bg-gradient-to-b from-[rgba(251,191,36,0.2)] from-10% via-[rgba(79,70,229,0.4)] via-30% to-[rgba(219,39,119,0.2)] to-90%">
        <Image src={`/cards/${img}`} alt="card" width={150} height={150} className="m-2 border-2 border-amber-400 outline outline-2 outline-amber-400 outline-offset-[3px] rounded-full shadow-[0_0_20px_rgba(251,191,36,1)]" />
        <p className="text-center font-extrabold mt-6 mb-6 border-y-2 border-amber-400">--- {key.toUpperCase()} ? ---</p>
      </div>
      <div className="w-[400px] max-sm:w-fit">
        <p className="text-xl font-extrabold mb-2">{question}</p>
        {options.map((option, index) => (
          <div key={`option${index}`} className="mb-2">
            <input type="radio" id="answers" name="answers" value={option} />
            <label for="answers" className="ml-2">{option}</label>
          </div>
        ))}
        <button className="w-fit mt-4 px-4 py-1 bttn-style" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}