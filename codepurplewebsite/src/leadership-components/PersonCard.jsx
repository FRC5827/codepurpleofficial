import temp from "../assets/galleryPhotos/districts-2024/P24D7.jpg";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 10, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function PersonCard({
  name = "name",
  title = "title",
  description = "description",
  image = temp,
  variant = "white",
  text = "black",
}) {
  return (
    <div>
      <Tilt options={defaultOptions}>
        <div
          className={`w-80 h-auto bg-${variant} flex flex-col items-center justify-start shadow-lg rounded-lg flex-shrink-0 overflow-x text-center m-4 text-${text}`}
        >
          <div className="p-6">
            <div className="h-auto w-full rounded-full my-4 flex-shrink-0 flex justify-center items-center">
              <img
                src={image}
                alt={name}
                className="h-48 w-48 rounded-full object-cover"
              />
            </div>
            <h2 className="font-kode font-bold text-2xl">{name}</h2>
            <h3 className="font-kode text-lg">{title}</h3>
            <div className="max-h-48 p-4 w-full">
              <p className="font-cooper text-left">{description}</p>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default PersonCard;
