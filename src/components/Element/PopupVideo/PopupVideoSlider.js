import React, {useState} from 'react';
import ModalVideo from "react-modal-video";

const PopupVideoSlider = () => {
    const [openPopup, setOpenPopup] = useState(false);
    return (
        <>
            <ModalVideo channel='youtube' autoplay videoId="-WRZI63emjs" isOpen={openPopup}
                        onClose={() => setOpenPopup(false)}/>
            <button className="play-btn popup-video" onClick={() => setOpenPopup(true)}>
                <i className="fas fa-play"/>
            </button>
        </>
    );
};

export default PopupVideoSlider;
