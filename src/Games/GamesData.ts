import { simpleGameMatchup } from "./GamesInterfaces";

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].id < right[rightIndex].id) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

export default class GamesFunctions {
  public static async cleanTeamPageGames(
    homeGames: Array<simpleGameMatchup>,
    awayGames: Array<simpleGameMatchup>
  ) {
    const allGames = homeGames.concat(awayGames);

    const finalAnswer: Array<simpleGameMatchup> = mergeSort(allGames);
    return finalAnswer;
  }
}
