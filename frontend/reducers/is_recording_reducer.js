import { TrackConstants } from '../actions/track_actions';

export const recording = (state = false, action) => {
  switch (action.type) {
    case TrackConstants.START_RECORDING:
      return true;
    case TrackConstants.STOP_RECORDING:
      return false;
    default:
      return state;
  }
};
