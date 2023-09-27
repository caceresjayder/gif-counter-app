'use client'
import { useState } from "react";
import icons from "../mocks/icons";
import colors from "../mocks/colors";
import Preview from "../components/Preview";
import { inputType } from "../constants";
import useGif from "../hooks/useGif";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'

const initialState = {
  preview: {
    bgColor:
      "bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 scale-100",
    icon: icons[0].icon,
    number: 40,
    text: "awesome text",
  },
};

function App() {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState({ isLoading: false, progress: 0 });
  const [gifUrl, setGifURL] = useState(null);
  const { createGif } = useGif({ state, setGifURL, setLoading });

  const setColor = (color) => {
    setState((prev) => {
      return {
        ...prev,
        preview: {
          ...prev.preview,
          bgColor: color,
        },
      };
    });
  };

  /**
   * Handles the input
   * @param {string} value
   * @param {inputType} type
   */

  const handleInput = (value, type) => {
    if (type === inputType.TEXT) {
      setState((prev) => {
        return {
          ...prev,
          preview: {
            ...prev.preview,
            text: [value],
          },
        };
      });
    }
    if (type === inputType.NUMBER) {
      const newCount = parseInt(value.replace(/\D/g, ""), 10);
      if (!isNaN(newCount) && newCount >= 1)
        setState((prev) => {
          return {
            ...prev,
            preview: {
              ...prev.preview,
              number: newCount,
            },
          };
        });
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto min-h-screen flex flex-col p-4 items-center overflow-hidden border relative">
        <Preview
          number={state.preview.number}
          text={state.preview.text}
          bgColor={state.preview.bgColor}
          icon={state.preview.icon}
          handleInput={handleInput}
        />
        <div
          id="colors-selector"
          className="w-96 flex flex-row flex-wrap content-center justify-center"
        >
          {colors.map((item, index) => {
            return (
              <div
                className={`h-12 w-12 m-2 ${item.color}`}
                key={item.color + index}
                onClick={() => setColor(item.color)}
              ></div>
            );
          })}
        </div>
        <div
          id="buttons"
          className="w-full flex flex-col items-center justify-center gap-2"
        >
          {loading.isLoading ? (
            <>
              <p className="text-lg text-white bg-green-500 p-1  rounded">
                Creating gif...
              </p>
              <div className="w-1/2 border h-4 p-0.5">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${loading.progress}%` }}
                ></div>
              </div>
            </>
          ) : (
            <button
              type="button"
              className="w-40 p-2 bg-green-500 text-white font-semibold rounded my-2"
              onClick={createGif}
            >
              Create Gif
            </button>
          )}
        </div>
        {gifUrl && (
          <div id="gif-div" className="flex flex-col items-center">
            <figure className="w-[500px] h-[240px] relative">
            <Image src={gifUrl} alt="gift generated" fill style={{objectFit: 'fill'}}/>
            </figure>
            <a
              className="w-40 p-2 bg-green-500 text-white font-semibold rounded my-2 text-center"
              href={gifUrl}
              download={true}
            >
              Download Gif
            </a>
          </div>
        )}
        <div
          id="frames"
          className="translate-x-[100%] absolute top-0 right-0"
        ></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
