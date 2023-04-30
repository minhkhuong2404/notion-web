import { Route } from "@/lib";
import Image from "next/image";

const MidJourneyImages = () => {

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
                src={Route.midJourneyImage(`${filename}`)}
                alt={`MidJourney Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MidJourneyImages;
