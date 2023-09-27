import sharp from "sharp";


const convert = async(svgComponent) => {
    const svg = JSON.stringify(svgComponent);

    const svgBuffer = Buffer.from(svg);
    const newGif = await sharp(svgBuffer).gif()

}