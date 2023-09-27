import { inputType } from "../constants";

/**
 * Returns a preview of the element to convert to gif
 * @param {{number: number, text: string, bgColor: string, icon: HTMLOrSVGElement, handleInput: () => void, frameId?: string }} param0
 * @returns
 */

function Preview({ number, text, bgColor, icon, handleInput, frameId }) {
  return (
    <div
      id={frameId ? frameId : "preview"}
      className={`w-[500px] h-[240px] rounded px-12 pt-8 pb-4 flex flex-col items-center gap-4 ${bgColor}`}
    >
      <div className="w-full h-28 bg-white rounded flex flex-row items-center p-4 my-4 gap-4">
        <figure className="w-20 rounded-full bg-blue-200 flex items-center text-blue-500 justify-center relative p-4">
          {icon}
        </figure>
        <div className="flex flex-col w-full">
          <input
            className="text-3xl font-bold text-gray-900 px-2 py-1 w-full"
            contentEditable="true"
            type="number"
            max={1001}
            maxLength={4}
            id={`number-${frameId}-input-${number}`}
            defaultValue={number}
            onInput={(e) => handleInput(e.target.value, e.target.value <= 1000 ? inputType.NUMBER: 1000)}
            onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
          />
          <input
            className="text-gray-800 px-2 h-8"
            contentEditable="true"
            defaultValue={text}
            maxLength={30}
            id={`text-${frameId}-input-${number}`}
            onInput={(e) => handleInput(e.target.value, inputType.TEXT)}
            onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
          />
        </div>
      </div>

      <a className="text-white">By rafacli</a>
    </div>
  );
}

export default Preview;
