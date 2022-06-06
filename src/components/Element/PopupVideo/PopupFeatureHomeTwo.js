import React, {useState} from 'react';
import ModalVideo from "react-modal-video";
import {images} from "../../../utilities/Images";

const PopupFeatureHomeTwo = () => {
    const [openPopup, setOpenPopup] = useState(false);
    return (
        <>
            <ModalVideo channel='youtube' autoplay videoId="-WRZI63emjs" isOpen={openPopup}
                        onClose={() => setOpenPopup(false)}/>
            <div className="features__video">
                <div className="features__video-triangle">
                    <div className="features__video-thumb">
                        <img src={images.featuresAbout1} alt=""/>
                        <button onClick={() => setOpenPopup(true)} className="play-btn popup-video"><i
                            className="fas fa-play"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopupFeatureHomeTwo;
