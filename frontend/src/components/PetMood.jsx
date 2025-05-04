import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const PetMood = ({ mood }) => {
    
    const moods = {
        Sad: 'e649c8b2-a03e-43fd-a6a3-fd1c0f8bdc22/eeTN1bkJ1A.lottie',
        Excited: '6628d7a9-9018-42bc-a7fb-b90f27194d84/PxAIuvGMEq.lottie',
        Happy: 'f7430372-988b-4f16-9777-fa78ea66def3/V0cJYH1DDH.lottie'
    };

    const baseUrl = 'https://lottie.host/';
    const src = moods[mood] ? `${baseUrl}${moods[mood]}` : null;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '50vh', alignItems: 'center' }}>
            {src ? (<DotLottieReact src={src} loop autoplay />)
                : (<p>No animation for this mood</p>)}
        </div>
    );
};

export default PetMood;