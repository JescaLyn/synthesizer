export const TrackConstants = {
  START_RECORDING: "START_RECORDING",
  STOP_RECORDING: "STOP_RECORDING",
  ADD_NOTES: "ADD_NOTES"
};

export const startRecording = () => ({
  type: TrackConstants.START_RECORDING,
  timeNow: Date.now()
});

export const stopRecording = () => ({
  type: TrackConstants.STOP_RECORDING,
  timeNow: Date.now()
});

export const addNote = (notes) => ({
  type: TrackConstants.ADD_NOTES,
  timeNow: Date.now(),
  notes
});
