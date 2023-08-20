import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-[100%]"
      style={{
        backgroundImage:
          "url(https://cdn.shopify.com/s/files/1/0408/5792/7834/files/redux-bg-A-2_800x.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" my-20 lg:my-40 md:my-40">
          <h1 className="mb-5 text-5xl font-bold">
            🔥Discover Your Ultimate PC Experience with Us!🔥
          </h1>
          <p className="mb-5">
            Welcome to the world of limitless possibilities in PC building.
            Unleash your creativity, power your passion, and elevate your
            gaming, productivity, and entertainment with our curated selection
            of top-notch components and accessories. Whether you're a seasoned
            enthusiast or a first-time builder, our PC building website is here
            to guide you every step of the way.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
