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
    else {
      randObjIndex = Math.floor(Math.random() * data[0].champions.length);
      randPropIndex = Math.floor(Math.random() * 7) + 2;
    }

    objProp = [randObjIndex, randPropIndex];

    if (!randProp.includes(objProp)) {
      randProp.push(objProp);
    }
  }

  return randProp;
}

function generateQuestions(game, data, randProp) {
  let questions = [];
  let options = [];
  const keys = Object.keys(data[0].cards[0]);

  if (game === "runeterra") {
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

      options.push(currObj[keys[randProp[i][1]]]);
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
  }
  else if (game === "league") {
    
  }

  return questions;
} 

export default async function Questions(game) {
  let questions = [];
  let data = [];
  let randProperties;
  
  game === "runeterra" ? data.push(await FetchData("runeterra")) : data.push(await FetchData("league"));
  randProperties = randObjProp(game, data);
  questions = generateQuestions(game, data, randProperties);

  return questions;
}