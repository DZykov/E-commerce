import { useState } from "react";
import CSS from 'csstype';
import product from "../types/product";

const slideStyles: CSS.Properties = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
};

const rightArrowStyles: CSS.Properties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#000",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles: CSS.Properties = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#000",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles: CSS.Properties = {
    position: "relative",
    height: "100%",
};

const dotsContainerStyles: CSS.Properties = {
    display: "flex",
    justifyContent: "center",
};

const dotStyle: CSS.Properties = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "10px",
    color: "#000",
    zIndex: 1,
};

const ImageSlider = (slides: product) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides.pictures[currentIndex]})`,
    };

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
                {slides.pictures.map((_slide: string, slideIndex: number) => (
                    <div
                        style={dotStyle}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;