import Image from "next/image";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <div className="max-container flex items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1 ">
        <Image
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red"> Sepcial </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn more" iconUrl="" backgroundColor = "bg-white" textColor="text-slate-gray" borderColor="border-slate-gray"/>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
