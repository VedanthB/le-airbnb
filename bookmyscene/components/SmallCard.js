import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 space-x-4 text-white rounded-xl cursor-pointer hover:bg-regal-blue-dark hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-300">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
