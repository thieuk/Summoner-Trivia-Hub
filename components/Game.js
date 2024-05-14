'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CardQuestion(props) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [min, setMin] = useState(15);
  const [sec, setSec] = useState(0);
  const [countdownSec, setCountdownSec] = useState(min * 60);
  const question = props.question[index].question;
  const options = props.question[index].options;
  const correctAns = props.question[index]["correct-answer"];
  let key, img, questionDetail;
  
  if (props.game === "runeterra") {
    key = props.question[index].key;
    img = props.question[index].img;
  }
  else {
    questionDetail = props.question[index].questionDetail;
  }

  const showResult = () => {
    router.push(`/result/${score}/${countdownSec}`, "/result");
  }

  const handleSubmit = () => {
    if (index <= props.question.length - 1) {
      for (let i = 0; i < options.length; i++) {
        const selected = document.getElementById(options[i]);

        if (selected.checked) {
          setScore(selected.value === correctAns ? score + 1 : score);
          selected.checked = false;
          break;
        }
      }
    }

    index < props.question.length - 1 ? setIndex(index + 1) : showResult();
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (countdownSec === 0) {
        clearInterval(timerInterval);
        showResult();
        alert("Time's up!");
      }
      else {
        setCountdownSec(countdownSec - 1);
        setMin(Math.floor(countdownSec / 60));
        setSec(countdownSec % 60);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [countdownSec]);

  return(
    <div>
      <div className="flex justify-center align-center gap-12 mt-7 text-2xl max-md:text-xl font-bold text-center">
        <p>Question: <span className="max-md:block">{index + 1}</span></p>
        <p>Score: <span className="max-md:block">{score}/30</span></p>
        <p>Time Left: <span className="max-md:block">{ min < 10 ? "0" : "" }{min}:{ sec < 10 ? "0" : "" }{sec}</span></p>
      </div>
      <div className="w-full mt-7 flex flex-col sm:flex-row justify-center items-center gap-8">
        {props.game === "runeterra" ? 
          <div className="p-2 border-2 border-amber-400 outline outline-2 outline-amber-400 outline-offset-[-6px] rounded-lg bg-gradient-to-b from-[rgba(251,191,36,0.2)] from-10% via-[rgba(79,70,229,0.4)] via-30% to-[rgba(219,39,119,0.2)] to-90%">
            <Image src={`/cards/${img}`} alt="card" width={150} height={150} priority={true} className="max-sm:w-[100px] max-sm:h-[100px] mx-auto border-2 border-amber-400 outline outline-2 outline-amber-400 outline-offset-[3px] rounded-full shadow-[0_0_20px_rgba(251,191,36,1)]" />
            <p className="text-center font-extrabold my-4 border-y-2 border-amber-400">--- {key.toUpperCase()} ? ---</p>
          </div> : <></>}
        <div className={`${props.game === "runeterra" ? "w-[400px]" : "w-[90vw] max-w-[700px]"} max-sm:w-fit`}>
          <p className="text-xl font-extrabold mb-2 text-center">{question}</p>
          {props.game === "league" ? <p className="max-md:w-4/5 mb-2 mx-auto font-bold text-center">"{questionDetail}"</p> : <></>}
          <div className="w-fit max-w-[90vw] mx-auto py-2">
            {options.map((option, index) => (
              <div key={`option${index}`} className="mb-2">
                <input type="radio" id={option} name="answers" value={option} className="accent-black" />
                <label for={option} className="ml-2">{option}</label>
              </div>))}
          </div>
          <button onClick={handleSubmit} className="w-fit block mt-4 mb-7 mx-auto px-4 py-1 bttn-style">Submit</button>
        </div>
      </div>
    </div>    
  );
}