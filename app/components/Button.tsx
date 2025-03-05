import Image from "next/image";

interface ButtonProps {
  label: string;
  iconUrl?: string;
  // className?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat rounded-full text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red border-coral-red text-white"
      }`}
    >
      {label}
      {iconUrl && (
        <Image src={iconUrl} alt="" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
