import { useEffect, useState } from "react"
import defaultImage from "../assets/galleryPhotos/kickoff/IMG_4918.JPG"

function NavBox({stuff}) {
    const [animate, setAnimate] = useState(false)
    
    useEffect(() => {
        setAnimate(false)
        const timeout = setTimeout(() => setAnimate(true), 10)
        return () => clearTimeout(timeout)
    }, [stuff])

    const defaultBg = (
        <img
          src={defaultImage}
          alt="Default Image"
          className="w-full h-full object-cover"
        />
      );

    return (
        <div className="bg-codePurple w-[50vw] h-96 border-white border-2 rounded-xl mb-24 overflow-hidden">
            <div className={`flex justify-center items-center h-full text-white text-2xl font-semibold font-cooper ${
                    animate ? "floatin" : ""
                }`} >
                {stuff || defaultBg}
            </div>
        </div>
    );
}

export default NavBox;