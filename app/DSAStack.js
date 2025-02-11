// 10-02-25, 00:01, Boys' new house with letter E.
// Done with letter B: 10-02-25, 00:29, Boys' new house.

const MY_CHARACTER = "⭐";
const My_SPACE_CHARACTER = " ";

const FULL_LINE = 7; // 7
const BASE_LINE = 2; // 2
const LONGER_FULL_LINE = FULL_LINE + 1;
const outerCurveLine = FULL_LINE + 1;
const innerCurveSpace = (FULL_LINE - 1) * 2;
const innerCurveLine = "innerCurve";

let letterE = [
  FULL_LINE,
  FULL_LINE,
  BASE_LINE,
  BASE_LINE,
  FULL_LINE,
  FULL_LINE,
  BASE_LINE,
  BASE_LINE,
  FULL_LINE,
  FULL_LINE,
];

let letterB = [
  FULL_LINE,
  LONGER_FULL_LINE,
  innerCurveLine,
  innerCurveLine,
  LONGER_FULL_LINE,
  LONGER_FULL_LINE,
  innerCurveLine,
  innerCurveLine,
  LONGER_FULL_LINE,
  FULL_LINE,
];

// Draw the letter E
drawLetter(letterE);

// Draw test line
drawLetter(letterB);

function drawLetter(letterArray) {
  for (let i = 0; i < letterArray.length; i++) {
    let newItem = letterArray[i];
    let newOutput = "";
    if (newItem === "innerCurve") {
      newOutput = drawInnerCurveLine(newOutput);
    } else {
      while (newItem > 0) {
        newOutput += MY_CHARACTER;
        newItem--;
      }
    }
    console.log(newOutput);
  }
  // Leave some space for the next letter
  console.log("\n");
}

function drawInnerCurveLine(newOutput) {
  for (let i = 0; i < BASE_LINE; i++) {
    newOutput += MY_CHARACTER;
  }
  for (let i = 0; i < innerCurveSpace; i++) {
    newOutput += My_SPACE_CHARACTER;
  }
  for (let i = 0; i < BASE_LINE; i++) {
    newOutput += MY_CHARACTER;
  }
  return newOutput;
}
