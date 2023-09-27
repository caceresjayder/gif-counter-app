
function Footer() {
  return (
    <>

      <div className="h-fit w-full flex flex-col items-center justify-center bg-blue-200 p-4 sm:p-12 gap-2">
        <div className="text-center">
          <h4 className="text-lg font-bold">This is a project for public use</h4>
          <p className="text-center">
              You don{'\''}t have to pay nothing and register on anything to use this service.
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold">How does this works?</h4>
          <p className="text-center">
              Set a number on the counter (max 1000), write a cool text downside of the number, select a background color, and click in Create gif and wait for it. I recommend to stay in the page until the gif is created, and you can download it.
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold">Which technologies and libraries uses?</h4>
          <p className="text-center">
              Uses JavaScript, Next.js, React.js, Gif.js, html2canvas and tailwindcss.
              The gif creation is maded in client side. &#128516;
          </p>
        </div>
      </div>
      <div className="h-12 bg-blue-500 text-white items-center justify-center flex">Created by Jayder Caceres, {new Date().getFullYear()}</div>
    </>
  );
}

export default Footer;
