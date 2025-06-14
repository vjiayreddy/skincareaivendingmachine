import React from "react";

interface IndustryCardProps {
  title: string;
  content: string;
  image: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <div className="relative bg-white mx-auto mb-20 max-w-7xl px-6 sm:mt-25 lg:px-8">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-50 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt=""
              src={image}
              className="absolute inset-0 size-full bg-gray-50 object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-10 pb-10 sm:pt-10 sm:pb-10 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-10 xl:w-1/2">
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">{content}</p>
            <div className="rounded-md mt-5 shadow-sm w-50">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-800 px-8 py-3 text-base font-medium text-white hover:bg-white hover:border-green-800 hover:text-green-800 md:px-10 md:py-4 md:text-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
