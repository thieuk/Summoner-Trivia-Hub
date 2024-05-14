import { FetchData } from "./FetchData";

function shuffleArray(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randObjProp(game, data) {
  let randProp = [];
  let randObjIndex = 0;
  let randPropIndex = 0;

  while (randProp.length < 30) {
    let objProp = [];

    if (game === "runeterra") {
      randObjIndex = Math.floor(Math.random() * data[0].cards.length);
      randPropIndex = Math.floor(Math.random() * 4) + 2;
    }
    else if (game === "league") {
      randObjIndex = Math.floor(Math.random() * data[0].champions.length);
      randPropIndex = Math.floor(Math.random() * 5) + 2;
    }

    objProp = [randObjIndex, randPropIndex];

    if (!randProp.includes(objProp)) {
      randProp.push(objProp);
    }
  }

  return randProp;
}

function generateRuneterraQuestions(data, randProp) {
  const keys = Object.keys(data[0].cards[0]);
  let questions = [];
  let options = [];

  for (let i = 0; i < 30; i++) {
    let currObj = data[0].cards[randProp[i][0]];

    questions.push({ 
      "id" : currObj.id,
      "img" : currObj.img
    })

    if (randProp[i][1] === 2) {
      questions[i].question = "Which region does this card belongs to?";
    }
    else {
      questions[i].question = `What is the ${keys[randProp[i][1]]} of this card?`;
    }
    
    questions[i].key = keys[randProp[i][1]];
    questions[i]["correct-answer"] = currObj[keys[randProp[i][1]]];

    options.push(questions[i]["correct-answer"]);
    while (options.length < 4) {
      const randAns = data[0].cards[Math.floor(Math.random() * data[0].cards.length)][keys[randProp[i][1]]];
      if (!options.includes(randAns)) {
        options.push(randAns);
      }
    }
    options = shuffleArray(options);
    questions[i].options = options;
    options = [];
  }

  return questions;
} 

function generateLeagueQuestions(data, randProp) {
  const keys = Object.keys(data[0].champions[0]);
  let questions = [];
  let options = [];
  let all_champions = [];
  
  data[0].champions.forEach((obj) => {
    all_champions.push(obj.Champion);
  })

  for (let i = 0; i < 30; i++) {
    let currObj = data[0].champions[randProp[i][0]];
    
    questions.push({ 
      "id" : currObj.id
    })

    questions[i].question = `Which champion has this "${keys[randProp[i][1]]}" ability?`;
    questions[i]["correct-answer"] = currObj.Champion;
    questions[i].questionDetail = hideChampDetails(currObj[keys[randProp[i][1]]], all_champions);
    
    options.push(questions[i]["correct-answer"]);
    while (options.length < 4) {
      const randAns = data[0].champions[Math.floor(Math.random() * data[0].champions.length)].Champion;
      
      if (!options.includes(randAns)) {
        options.push(randAns);
      }
    }
    options = shuffleArray(options);
    questions[i].options = options;
    options = [];
  }

  return questions;
}

function hideChampDetails(text, champions) {
  let result = text;
  const pronouns = ["he", "she"];
  const objPronouns = ["him", "her"];
  const posPronouns = ["his", "her"];
  const refPronouns = ["himself", "herself"]; 
  
  const replaceWords = (words, wordList, replacement) => {
    words.forEach((word, index) => {
      if (word.toLowerCase() === wordList) {
        words[index] = replacement;

        if (word.includes(",") || word.includes(".")) {
          const punctuation = word[word.length - 1];
          words[index] += punctuation;
        }
      }
    });
  };

  champions.forEach(champ => {
    if (result.includes(champ)) {
      const regex = new RegExp(champ, "gi");
      result = result.replace(regex, "[Champion]");
    }
  });

  [pronouns, objPronouns, posPronouns, refPronouns].forEach((wordList, index) => {
    const replacement = ["[They]", "[Them]", "[Their]", "[Themself]"];
    let words = result.split(" ");
    wordList.forEach(word => {
      replaceWords(words, word, replacement[index]);
    });
    result = words.join(" ");
  });

  return result;
}

export default async function GetQuestions(game) {
  const data = [await FetchData(game)];
  const randProperties = randObjProp(game, data);
  let questions;

  if (game === "runeterra") {
    questions = generateRuneterraQuestions(data, randProperties);
  }
  else if (game === "league") {
    questions = generateLeagueQuestions(data, randProperties);
  }

  return questions;
}