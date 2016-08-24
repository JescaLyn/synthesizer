import { combineReducers } from 'redux';
import { notes } from './notes_reducer';
import  { recording } from './is_recording_reducer';
import { tracks } from './tracks_reducer';

export default combineReducers({
  notes,
  recording,
  tracks
});
