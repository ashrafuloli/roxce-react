import React, {useState} from 'react';
import ModalVideo from "react-modal-video";
import {images} from "../../../utilities/Images";

const PopupVideoHomeOne = () => {
    const [openPopup, setOpenPopup] = useState(false);
    return (
        <>
            <ModalVideo channel='youtube' autoplay videoId="-WRZI63emjs" isOpen={openPopup}
                        onClose={() => setOpenPopup(false)}/>
            <div className="video__area p-relative z-index-11 video-mb--160">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="video__wrapper video__overlay w-img p-relative">
                                <img src={images.video1} alt="video"/>
                                <div className="video__play">
                                    <button onClick={() => setOpenPopup(true)} className="video__play-btn popup-video">
                                        <i className="fas fa-play"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopupVideoHomeOne;
