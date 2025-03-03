import Image from "next/image";

interface ButtonProps {
    label: string;
    iconUrl: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    ariaLabel?: string;
  }

const Button  = ({label, iconUrl}: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat rounded-full text-white text-lg leading-none bg-coral-red border-coral-red">
      {label}
      <Image src={iconUrl} alt="" className="ml-2 rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;
