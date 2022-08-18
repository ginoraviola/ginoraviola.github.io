import {useEffect, useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const ImgGallery = ({images}) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    const setNextImage = () => {
        const nextImage = images[images.indexOf(currentImage) + 1] ? images[images.indexOf(currentImage) + 1] : images[0];
        setCurrentImage(nextImage);
    }
    const setPreviousImage = () => {
        const previousImage = images[images.indexOf(currentImage) - 1] ? images[images.indexOf(currentImage) - 1] : images[images.length - 1];
        setCurrentImage(previousImage);
    }


    return (
        <div className="flex justify-center w-full p-4 select-none">
            <div className="flex flex-col w-full md:w-1/2 ">
                <div className="flex justify-center px-10 relative p-2 py-4">
                    <div className="flex relative justify-between items-center">
                        <div className="absolute left-1">
                            <FaChevronLeft className="text-white text-2xl cursor-pointer" onClick={setPreviousImage}/>
                        </div>
                        <div className="flex flex-col text-center">
                            <img className="rounded object-contain max-h-96" src={currentImage.img}
                                 alt={currentImage.title}/>
                            <figcaption className="text-gray-800 text-sm py-1">{currentImage.title}</figcaption>
                        </div>


                        <div className="absolute right-1">
                            <FaChevronRight className="text-white text-2xl cursor-pointer" onClick={setNextImage}/>
                        </div>
                    </div>
                </div>
                <div className="container grid grid-cols-3 gap-2">
                    {images.map((image, index) => (
                        <img key={index}
                             className="w-full max-h-28 object-cover rounded-lg hover:shadow-xl cursor-pointer"
                             onClick={() => setCurrentImage(image)}
                             src={image.img}
                             alt={image.title}/>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ImgGallery;