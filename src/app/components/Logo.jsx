import React from "react";

const Logo = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
    <div className="fixed top-4 left-4 cursor-pointer">
      <img
        src="/images/webLogo.png" // Path to your logo
        alt="Logo"
        onClick={handleLogoClick}
        className="h-16 w-16 object-contain transition-transform duration-500 hover:rotate-360"
      />
    </div>
  );
};

export default Logo;