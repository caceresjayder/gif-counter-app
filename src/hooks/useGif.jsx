'use client'
import GIF from "gif.js";
import { createRoot } from "react-dom/client";
import Preview from "../components/Preview";
import React from "react";
import html2canvas from "html2canvas";

/**
 * Wait to element be available in the DOM a returns a Promise when available
 * @param {string} id
 * @returns {Promise}
 */

const getElementByIdAsync = (id) =>
  new Promise((resolve) => {
    const getElement = () => {
      const element = document.getElementById(id);
      if (element) {
        resolve(element);
      } else {
        requestAnimationFrame(getElement);
      }
    };
    getElement();
  });

/**
 * Return handlers to manage gif
 * @param {{state: {}, setGifURL: import("react").SetStateAction<string | null>, setLoading: import('react').SetStateAction<{isLoading: boolean, progress: number}>}} param0
 * @returns
 */

function useGif({ state, setGifURL, setLoading }) {

  /**
   * Create gif function
   * @returns Promise
   */
  const createGif = async () => {
    const { number, text, icon, bgColor } = state.preview;

    // Init GIF
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: 500,
      height: 240,
      repeat: -1,
    });

    // Reset gifURL and loading status
    setGifURL(null);
    setLoading((prev) => {
      return {
        ...prev,
        isLoading: true,
      };
    });

    // Sets 20% status bar
    await new Promise((r) => setTimeout(r, 1000));
    for (let i = 0; i < 20; i++) {
      await new Promise((r) => setTimeout(r, 100));
      setLoading((prev) => {
        return {
          ...prev,
          progress: i,
        };
      });
    }

    // Creates root to render de component

    const frames = createRoot(document.getElementById("frames"));

    // Begins iteration to render and unmount the components, in each iteration add frame to gif.
    for (let i = 0, frameCount = number; i <= frameCount; i++) {
      const clonedComponent = React.cloneElement(<Preview />, {
        key: `frame-${i}`,
        number: i,
        text,
        bgColor,
        icon,
        frameId: `frame-${i}`,
      });
      frames.render(clonedComponent);

      const divElement = await getElementByIdAsync(`frame-${i}`);

      const canvas = await html2canvas(divElement);
      canvas.getContext("2d", {
        willReadFrequently: true,
      });
      gif.addFrame(canvas, { delay: 100, copy: true });
    }

    // unmount the root
    frames.unmount();

    //Set listeners on progress and on finished for GIF

    gif.on("progress", (e) => {
      const progress = Math.round(e * 100);
      if (progress > 20) {
        setLoading((prev) => {
          return {
            ...prev,
            progress: progress,
          };
        });
      }
    });

    gif.on("finished", (blob) => {
      const url = URL.createObjectURL(blob);
      setLoading({
        isLoading: false,
        progress: 0,
      });
      setGifURL(url);
    });

    // Renders the Gif
    gif.render();
  };

  return {
    createGif,
  };
}

export default useGif;
