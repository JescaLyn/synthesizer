import { TrackConstants } from '../actions/track_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

export const tracks = (state = {}, action) => {
  switch (action.type) {
    case TrackConstants.START_RECORDING:
      currTrackId++;
      let track = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      let trackContainer = {};
      trackContainer[track.id] = track;
      return merge({}, state, trackContainer);
    case TrackConstants.STOP_RECORDING:
      let newState = merge({}, state);
      track = newState[currTrackId];
      let timeSlice = action.timeNow - track.timeStart;
      track.roll.push({ notes: [], timeSlice });
      return newState;
    case TrackConstants.ADD_NOTES:
      newState = merge({}, state);
      track = newState[currTrackId];
      timeSlice = action.timeNow - track.timeStart;
      track.roll.push( {notes: action.notes, timeSlice} );
      return newState;
    default:
      return state;
  }
};
