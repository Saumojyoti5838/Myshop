import React from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import assistantIcon from './images/voice.jpg'; // Import your image

const VoiceAssistant = () => {
  const { transcript, resetTranscript, SpeechRecognition } = useSpeechRecognition();

  const handleListen = () => {
    resetTranscript();
    SpeechRecognition.startListening({ language: 'en-US' });
  };

  return (
    <div>
      <button onClick={handleListen}> <img src={assistantIcon} alt="Assistant Icon" style={{ width: '25px', height: '25px' }} />
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceAssistant;
