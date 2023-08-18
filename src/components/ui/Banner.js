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
        <div className="max-w-md my-20 lg:my-40 md:my-40">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
