import {
  OPEN_GAME_POPUP,
  CLOSE_GAME_POPUP,
} from "../../constants/action-types";

export function openGamePopup() {
  return { type: OPEN_GAME_POPUP };
}

export function closeGamePopup() {
  return { type: CLOSE_GAME_POPUP };
}
