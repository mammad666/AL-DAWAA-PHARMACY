import { Image } from "@nextui-org/react";

const Images = () => {
  const images = ["11.jpg", "12.jpg", "13.jpg", "14.jpg"];

  return (
    <>
      <div id="services" className="m-1 my-5">
        <h1 className="text-center text-3xl sm:text-4xl font-mono font-bold text-teal-700">
          OUR SERVICES
        </h1>
        <div className="grid grid-cols-2 gap-10 p-5">
          {images.map((src, index) => (
            <Image
              key={index}
              isBlurred
              isZoomed
              width="100%"
              src={src}
              alt={`Image ${index + 1}`}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Images;
