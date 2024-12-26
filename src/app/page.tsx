import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="flex flex-col md:flex-row h-auto lg:h-[465px] w-11/12">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4 text-center md:text-left">
          <h1 className="font-bold text-[32px] sm:text-[32px] md:text-[35px] lg:text-[44px]">
            Welcome To Our Website
          </h1>
          <p className="font-normal text-[18px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[32px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry standard
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="text-white bg-black w-full max-w-[237px] h-[50px] md:h-[60px] lg:h-[66px] p-2 md:p-4 rounded-md">
              Contact US
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center w-full h-auto mt-8 md:mt-0 md:ml-8">
          <Image 
            src="/images/main.png"
            alt="Banner Image" 
            width={502}
            height={465}
            className="object-contain w-full max-w-[490px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
