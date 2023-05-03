import { Route, useTrans } from "@/lib";
import Image from "next/image";
import Link from "../atoms/Link";

const MidJourneyImages = () => {
  const trans = useTrans();

  const imageFilenames = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    // Add more filenames as needed
  ];

  return (
    <section className="py-5 md:py-10 fade-in-start">
      <div data-fade="0">
        <span className="mb-5 block text-4xl font-bold text-gray-800 dark:text-gray-100">
          MidJourney Images
        </span>
        <div className="flex flex-wrap">
          {imageFilenames.map((filename, index) => (
            <div key={index} className="w-64 mr-4 mb-4">
              <Image
                width={256}
                height={256}
                src={Route.midJourneyImage(`${filename}`)}
                alt={`MidJourney Image ${index}`}
              />
            </div>
          ))}
        </div>
        <div className="block font-bold text-lg text-gray-800 dark:text-gray-100">
          {trans.images.description}
          <div className="block">
            🔥🔥
            <Link
              href="https://luminhkhuong.netlify.app/"
              target="_blank"
              className="flex items-center"
              key={"luminhkhuong"}
            >
              <span className="mr-1 text-transparent bg-clip-text bg-gradient-to-r dark:from-emerald-400 dark:to-violet-400  from-rose-500 to-blue-600 hover:underline">
                AI Photos Website
              </span>
            </Link>
            🔥🔥
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidJourneyImages;
