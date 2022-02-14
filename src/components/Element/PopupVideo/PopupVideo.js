import React, {useState} from 'react';
import ModalVideo from "react-modal-video";

const PopupVideo = () => {
    const [openPopup, setOpenPopup] = useState(false);
    return (
        <>
            <ModalVideo channel='youtube' autoplay videoId="-WRZI63emjs" isOpen={openPopup}
                        onClose={() => setOpenPopup(false)}/>
            <div className="hero__thumb-2 d-none d-xl-block text-end">
                <span>
                    <img src="assets/img/hero/hero-2.jpg" alt="hero"/>
                    <button className="play-btn popup-video" onClick={() => setOpenPopup(true)}>
                        <i className="fas fa-play"/>
                    </button>
                </span>
            </div>
        </>
    );
};

export default PopupVideo;
