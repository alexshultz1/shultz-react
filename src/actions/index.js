export const startNewSession = videoId => ({
  type: 'START_NEW_SESSION',
  videoId,
});

export const addNote = noteText => ({
  type: 'ADD_NOTE',
  noteText,
});

export const loadPreviousSession = sessionId => ({
  type: 'LOAD_PREVIOUS_SESSION',
  sessionId,
});
