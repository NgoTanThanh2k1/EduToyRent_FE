import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Component/Sidebar/Sidebar";
import HeaderForCustomer from "../../Component/HeaderForCustomer/HeaderForCustomer";
import FooterForCustomer from "../../Component/FooterForCustomer/FooterForCustomer";

const featuredToys = [
  {
    name: "Đồ chơi phát triển tư duy",
    ageGroup: "Ages 3-5",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
  {
    name: "Đồ chơi STEM",
    ageGroup: "Ages 6-8",
    image:
      "https://cdn.usegalileo.ai/stability/600f7d73-b2c4-4ef5-a065-4968a5ee23d4.png",
  },
  {
    name: "Đồ chơi ngôn ngữ",
    ageGroup: "Ages 9-12",
    image:
      "https://cdn.usegalileo.ai/stability/94e0bca4-abc6-4700-8e82-cf72b95d7a27.png",
  },
  {
    name: "Đồ chơi nghệ thuật và sáng tạo",
    ageGroup: "Ages 10+",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
  {
    name: "Đồ chơi toán học",
    ageGroup: "Ages 10+",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
  {
    name: "Đồ chơi cho thuê",
    ageGroup: "Ages 10+",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
  {
    name: "Mua đồ chơi",
    ageGroup: "Ages 10+",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
  {
    name: "",
    ageGroup: "Ages 10+",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
];

const dealsOfTheDay = [
  {
    name: "Remote Control Car",
    ageGroup: "Ages 4-6",
    price: "29.99",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
  {
    name: "Magic Markers",
    ageGroup: "Ages 5-7",
    price: "14.99",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
  {
    name: "Dinosaur Play Set",
    ageGroup: "Ages 3-6",
    price: "39.99",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
];

const recommendedToys = [
  {
    name: "Kids Play Kitchen",
    ageGroup: "Ages 4-6",
    price: "49.99",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
  {
    name: "Outdoor Adventure Set",
    ageGroup: "Ages 5-8",
    price: "34.99",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
  {
    name: "Musical Instruments",
    ageGroup: "Ages 6-9",
    price: "59.99",
    image:
      "https://cdn.usegalileo.ai/sdxl10/7d365c36-d63a-4aff-9e34-b111fb44eddd.png",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 p-9">
      {" "}
      {/* Thêm lớp bg-gray-100 và padding */}
      <header>
        <HeaderForCustomer />
      </header>
      <div className="flex flex-1 justify-center py-5 bg-white shadow-md">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/53c88725-ec48-4320-81f5-e34d4c105caf.png")`,
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight">
                  Unlimited toys for unlimited fun
                </h1>
                <h2 className="text-white text-sm font-normal">
                  Explore our collection of educational toys and activities
                  designed to help your child learn, grow and thrive
                </h2>
              </div>
              <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] h-16">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#507a95] flex border border-[#d1dde6] bg-[#f8fafb] items-center justify-center pl-[15px] rounded-l-xl border-r-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Search toys"
                    className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#f8fafb] h-full placeholder:text-[#507a95] px-[15px] text-sm font-normal"
                    value=""
                  />
                  <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#d1dde6] bg-[#f8fafb] pr-[7px]">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#47a6e6] text-[#0e161b] text-sm font-bold">
                      <span className="truncate">Explore</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>

            <div className="flex justify-between items-center p-4">
              <p className="text-[#0e161b] text-4xl font-black">
                Khám Phá Danh Mục
              </p>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e8eef3] text-[#0e161b] text-sm font-bold">
                <span className="truncate">View all</span>
              </button>
            </div>

            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {featuredToys.map((toy, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                      style={{ backgroundImage: `url(${toy.image})` }}
                    ></div>
                    <div>
                      <p className="text-[#0e161b] text-base font-medium">
                        {toy.name}
                      </p>
                      <p className="text-[#507a95] text-sm">{toy.ageGroup}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-[#0e161b] text-[22px] font-bold px-4 pt-5">
              Deals of the Day
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {dealsOfTheDay.map((deal, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${deal.image})` }}
                  ></div>
                  <div>
                    <p className="text-[#0e161b] text-base font-medium">
                      {deal.name}
                    </p>
                    <p className="text-[#507a95] text-sm">
                      Age group: {deal.ageGroup}
                    </p>
                    <p className="text-[#0e161b] text-lg font-bold">
                      ${deal.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[#0e161b] text-[22px] font-bold px-4 pt-5">
              Recommended for You
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {recommendedToys.map((toy, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${toy.image})` }}
                  ></div>
                  <div>
                    <p className="text-[#0e161b] text-base font-medium">
                      {toy.name}
                    </p>
                    <p className="text-[#507a95] text-sm">
                      Age group: {toy.ageGroup}
                    </p>
                    <p className="text-[#0e161b] text-lg font-bold">
                      ${toy.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <FooterForCustomer />
      </footer>
      <Outlet />
    </div>
  );
};

export default Home;
