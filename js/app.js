'use strict';
var correctAnswer = 0;
var incorrectAnswer = 0;


alert('Do you want to know more about Joyce? She is a very cool developer!');
alert('Here are some fun facts about Joyce!');

function language() {
  var answerLanguage = prompt('Joyce is proficient in oral and written Chinese-English translation - True or False?').toUpperCase();
  console.log('Answer for Language: ', answerLanguage);
  if (answerLanguage === 'T' || answerLanguage === 'TRUE') {
    alert('Yes, that\'s correct!');
    correctAnswer++;
  } else if (answerLanguage === 'F' || answerLanguage === 'FALSE') {
    alert('No, that\'s incorrect.');
    incorrectAnswer++;
  } else {
    alert('That was not the answer I wanted... Try True or False next time.');
    incorrectAnswer++;
  }
  console.log ('# of Correct Answers: ', correctAnswer);
  console.log ('# of Incorrect Answers: ', incorrectAnswer);
}
language();





function work() {
  var answerWork = prompt('Joyce had 10 years of experience working in finance and accounting – True or False?').toUpperCase();
  console.log('Answer for Work: ', answerWork);
  if (answerWork === 'T' || answerWork === 'TRUE') {
    alert('Yes, that\'s correct!');
    correctAnswer++;
  } else if (answerWork === 'F' || answerWork === 'FALSE') {
    alert('No, that\'s incorrect.');
    incorrectAnswer++;
  } else {
    alert('That was not the answer I wanted... Try True or False next time.');
    incorrectAnswer++;
  }
  console.log ('# of Correct Answers: ', correctAnswer);
  console.log ('# of Incorrect Answers: ', incorrectAnswer);
}
work();




function constellation() {
  var answerConstellation = prompt('Joyce\'s zodiacal constellation is Cancer – T or F?').toUpperCase();
  console.log('Answer for Constellation: ', answerConstellation);
  if (answerConstellation === 'T' || answerConstellation === 'TRUE') {
    alert('Yes, that\'s correct!');
    correctAnswer++;
  } else if (answerConstellation === 'F' || answerConstellation === 'FALSE') {
    alert('No, that\'s incorrect.');
    incorrectAnswer++;
  } else {
    alert('That was not the answer I wanted... Try True or False next time.');
    incorrectAnswer++;
  }
  console.log ('# of Correct Answers: ', correctAnswer);
  console.log ('# of Incorrect Answers: ', incorrectAnswer);
}
constellation();




function hobby() {
  var answerHobby = prompt('Joyce makes dance choreography – T or F?').toUpperCase();
  console.log('Answer for Hobby: ', answerHobby);
  if (answerHobby === 'T' || answerHobby === 'TRUE') {
    alert('Yes, that\'s correct!');
    correctAnswer++;
  } else if (answerHobby === 'F' || answerHobby === 'FALSE') {
    alert('No, that\'s incorrect.');
    incorrectAnswer++;
  } else {
    alert('That was not the answer I wanted... Try True or False next time.');
    incorrectAnswer++;
  }
  console.log ('# of Correct Answers: ', correctAnswer);
  console.log ('# of Incorrect Answers: ', incorrectAnswer);
}
hobby();



function food() {
  var answerFood = prompt('Joyce loves eating rice dumplings wrapped in bamboo leaves in Dragon Festival – T or F?').toUpperCase();
  console.log('Answer for Food', answerFood);
  if (answerFood === 'T' || answerFood === 'TRUE') {
    alert('Yes, that\'s correct!');
    correctAnswer++;
  } else if (answerFood === 'F' || answerFood === 'FALSE') {
    alert('No, that\'s incorrect.');
    incorrectAnswer++;
  } else {
    alert('That was not the answer I wanted... Try True or False next time.');
    incorrectAnswer++;
  }
  console.log ('# of Correct Answers: ', correctAnswer);
  console.log ('# of Incorrect Answers: ', incorrectAnswer);
}
food();



function countries() {
  var i;
  var answerNum = Number(prompt ('How many countries has Joyce traveled around the world? Type a number. You have four chances to get the right answer.'));

  for (i=0; i<3; i++) {
    if (answerNum < 10) {
      answerNum = Number(prompt('The number is too low. Please try again.'));
    } else if (answerNum > 10) {
      answerNum = Number(prompt('The number is too high. Please try again.'));
    } else if (answerNum === 10) {
      alert('That is coorect!');
      break;
    } else {
      answerNum = Number(prompt ('That was not the answer I wanted. Please try a number.'));
    }
  }

  if (answerNum!==10) {
    alert('You have used all four chances. Sorry you didn\'t get the right answer.');
    console.log('Answer for Countries: ', answerNum);
    incorrectAnswer++;
  }
  if (answerNum===10) {
    correctAnswer++;
    console.log('Answer for Countries: ', answerNum);
  }
  console.log ('# of Correct Answers: ', correctAnswer);
  console.log ('# of Incorrect Answers: ', incorrectAnswer);
}
countries();




function statesFun(){
  var states = ['WASHINGTON', 'WA', 'CALIFORNIA', 'CA', 'NEW YORK', 'NY', 'WEST VIRGINIA', 'WV', 'HAWAII', 'HI'];
  var statesCount = 0;
  while (statesCount < 5) {
    var answerStates=prompt ('What states has Joyce visited in the United States? You have six chances to get the right answer.').toUpperCase();
    if (states.includes(answerStates)) {
      alert('That is correct! Joyce has visited Washington, California, New York, West Virginia and Hawaii.');
      statesCount = 100;
      correctAnswer++;
      break;
    } else {
      statesCount++;
      alert ('The answer is incorrect. Please try again.');
    }
  }

  if (statesCount ===5) {
    answerStates = prompt ('What states has Joyce visited in the United States? You have the last chance to answer.').toUpperCase();
    if (states.includes(answerStates)) {
      alert('Yes, that is correct! Joyce has visited Washington, California, New York, West Virginia and Hawaii.');
      statesCount = 100;
      correctAnswer++;
    }
    if (statesCount === 100) {
      alert('Wow! You are really good!');
    } else {
      alert ('You have used up 6 chances. You did not get the correct answer. Joyce has visited Washington, California, New York, West Virginia and Hawaii.');
    }
  }
  console.log('Answer for States: ', answerStates);
  console.log ('# of Correct Answers: ', correctAnswer);
  console.log ('# of Incorrect Answers: ', incorrectAnswer);
}
statesFun();









