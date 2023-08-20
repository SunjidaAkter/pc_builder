import { SessionProvider } from "next-auth/react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <SessionProvider>
      <div>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default RootLayout;
