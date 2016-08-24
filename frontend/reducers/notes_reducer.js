import { NotesConstants } from '../actions/note_actions';
import { NOTE_NAMES } from '../util/tones';

const validKeys = "qwertyuiopas".split("");

const keyMap = {};
validKeys.forEach((key, idx) => {
  keyMap[key] = NOTE_NAMES[idx];
});

export const notes = (state = [], action) => {
  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      if (state.includes(keyMap[action.key]) || !validKeys.includes(action.key) ) {
        return state;
      } else {
        return [...state, keyMap[action.key]];
      }
    case NotesConstants.KEY_RELEASED:
      if (state.includes(keyMap[action.key])) {
        let keyIdx = state.indexOf(keyMap[action.key]);
        return state.slice(0, keyIdx).concat(state.slice(keyIdx + 1));
      } else {
        return state;
      }
    default:
      return state;
  }
};

export { keyMap };
