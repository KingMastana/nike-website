import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

interface ResponsiveMenuType {
  open: boolean;
  onClose: () => void;
}

const ResponsiveMenu = ({ open, onClose }: ResponsiveMenuType) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute left-0 w-full h-screen z-10"
        >
          <div className="text-xl font-semibold uppercase bg-coral-red text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>
                <Link href="/" onClick={onClose}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about-us" onClick={onClose}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" onClick={onClose}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="" onClick={onClose}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
