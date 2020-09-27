import React, {useEffect, useState } from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';


const ImageScroll = () => {

    const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
    const [mouseEvtCount, setMouseEvtCount] = useState(0);

    useEffect(() => {
        window.document.title = `SpeakerID ${currentSpeakerId}`;
        console.log(`Current speaker id - ${currentSpeakerId}`);
    }, [currentSpeakerId]);

    return (
        <div>
            <strong>{mouseEvtCount}</strong>
            {
                [1124, 823, 187, 1269, 1530].map((id) => {
                    return (
                        <div
                            key={id}
                            onMouseOver={() => {
                                setCurrentSpeakerId(id);
                                setMouseEvtCount(mouseEvtCount+1);
                                console.log(`You hovered: ${currentSpeakerId}`);
                            }}>
                            <ImageToggleOnScroll
                                primaryImg={`/images/bw/Speaker-${id}.jpg`}
                                secondaryImg={`/images/Speaker-${id}.jpg`}
                                alt=""
                            />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ImageScroll;


// import React, { useEffect, useState } from 'react';
// import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

// const ImageChangeOnScroll = () => {
//   const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
//   const [mouseEventCnt, setMouseEventCnt] = useState(0);

//   useEffect(() => {
//     window.document.title = `SpeakerId: ${currentSpeakerId}`;
//     console.log(`useEffect: setting title to ${currentSpeakerId}`);
//   }, [currentSpeakerId]);

//   return (
//     <div>
//       <span>mouseEventCnt: {mouseEventCnt}</span>
//       {[1124, 823, 187, 1269, 1530].map((speakerId) => {
//         return (
//           <div
//             key={speakerId}
//             onMouseOver={() => {
//               setCurrentSpeakerId(speakerId);
//               setMouseEventCnt(mouseEventCnt + 1);
//               console.log(`onMouseOver:${speakerId}`);
//             }}
//           >
//             <ImageToggleOnScroll
//               primaryImg={`/images/bw/Speaker-${speakerId}.jpg`}
//               secondaryImg={`/images/Speaker-${speakerId}.jpg`}
//               alt=""
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ImageChangeOnScroll;
