import React from "react";
import { FaInstagram, FaTiktok, FaEnvelope, FaYoutube } from "react-icons/fa";

const waveText = "Contact".split("").map((char, index) => (
  <span
    key={index}
    style={{ animationDelay: `${index * 0.1}s` }}
    className="wave"
  >
    {char}
  </span>
));

function Contact() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden my-8">
      <div className="w-full h-80 bg-white items-center justify-center flex pt-16 overflow-hidden">
        <h1 className="text-9xl font-kode text-center font-bold text-codePurple">
          Contact
        </h1>
      </div>
      <div className="w-full h-auto bg-white flex justify-center items-center">
        <form className="w-full p-4 shadow-md">
          <h2 className="text-3xl text-codePurple font-bold mb-6 flex flex-col items-center">
            Get in Touch{" "}
            <div className="w-64 h-auto bg-white flex justify-around items-center pt-6 gap-2">
              <a
                href="https://instagram.com/codepurple5827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-codePurple text-5xl hover:scale-105 transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@codepurple5827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-codePurple text-5xl hover:scale-105 transition-all duration-300"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.youtube.com/@CodePurple-pm3so/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-codePurple text-5xl hover:scale-105 transition-all duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="mailto:frcteam5827@gmail.com"
                className="text-codePurple text-5xl hover:scale-105 transition-all duration-300"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.thebluealliance.com/team/5827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-codePurple text-5xl hover:scale-105 transition-all duration-300 w-12 h-12 flex justify-center items-center"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="72px"
                  height="112px"
                  viewBox="0 0 72 112"
                  enable-background="new 0 0 72 112"
                  xml:space="preserve"
                  className="w-12 h-12"
                >
                  <g>
                    <g>
                      <rect x="8" y="20" fill="#7E44CE" width="6" height="64" />
                    </g>
                    <g>
                      <rect
                        x="58"
                        y="20"
                        fill="#7E44CE"
                        width="6"
                        height="64"
                      />
                    </g>
                    <g>
                      <path
                        fill="#7E44CE"
                        d="M36,112C20.561,112,8,99.439,8,84h6c0,12.131,9.869,22,22,22V112z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#7E44CE"
                        d="M36,112v-6c12.131,0,22-9.869,22-22h6C64,99.439,51.439,112,36,112z"
                      />
                    </g>
                    <g>
                      <rect
                        x="33"
                        y="20"
                        fill="#7E44CE"
                        width="6"
                        height="89"
                      />
                    </g>
                    <g>
                      <rect
                        x="11"
                        y="78"
                        fill="#7E44CE"
                        width="50"
                        height="6"
                      />
                    </g>
                    <g>
                      <rect
                        x="11"
                        y="50"
                        fill="#7E44CE"
                        width="50"
                        height="6"
                      />
                    </g>
                    <g id="Lamp_Rectangle_4_">
                      <path
                        fill="#7E44CE"
                        d="M72,24c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h64c2.2,0,4,1.8,4,4V24z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </h2>
          <div className="w-full flex flex-col items-center">
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block text-codePurple text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-lg w-full p-2 mb-4 border-2 border-codePurple text-black"
                placeholder="Code Purple"
                required
              />

              <label
                htmlFor="email"
                className="block text-codePurple text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-lg w-full p-2 mb-4 border-2 border-codePurple text-black"
                placeholder="example@example.com"
                required
              />

              <label
                htmlFor="message"
                className="block text-codePurple text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="rounded-lg w-full p-2 mb-4 border-2 border-codePurple text-black"
                placeholder="Your message here..."
                rows="4"
                required
              ></textarea>

              <button
                type="button"
                onClick={() => {
                  const name = document.getElementById("name").value;
                  const email = document.getElementById("email").value;
                  const message = document.getElementById("message").value;
                  const mailtoLink = `mailto:fr5827@gmail.com?subject=Contact%20Form%20from%20${encodeURIComponent(
                    name
                  )}&body=Name:%20${encodeURIComponent(
                    name
                  )}%0AEmail:%20${encodeURIComponent(
                    email
                  )}%0A%0A${encodeURIComponent(message)}`;
                  window.location.href = mailtoLink;
                }}
                className="bg-codePurple text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
