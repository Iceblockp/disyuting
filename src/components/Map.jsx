import React from "react";

const Map = () => {
  return (
    <div className="w-full">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9381.005207244461!2d115.20423188707146!3d-8.669966362697416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Denpasar%20City%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2smm!4v1704111108618!5m2!1sen!2smm"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
