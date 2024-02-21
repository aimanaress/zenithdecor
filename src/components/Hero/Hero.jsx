import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Button from "../../shared/components/Button";

function Hero() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative pt-12 overflow-hidden">
        <div className="h-[30rem] items-center justify-center text-center rounded-lg overflow-hidden">
          <img
            className="overflow-hidden object-cover object-center hover:scale-110 transition duration-500 cursor-pointer object-cover"
            src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
          />
          <div className="pointer-events-none to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </div>
        <div className="absolute inset-0 top-1/2 bottom-1/2">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-4xl text-white">
              Explore Scandinavian Simplicity
            </h2>
            <p className="text-xl text-gray-200">
              Discover timeless furniture pieces from the mid-century era
            </p>
            <Button name="Shop Now" highlight="true" />
          </div>
        </div>

        {/* <Card
          shadow={false}
          className="h-[30rem] w-full items-center justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Explore Scandinavian Simplicity
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Discover timeless furniture pieces from the mid-century era
            </Typography>
            <Button name="Shop Now" highlight="true" />
          </CardBody>
        </Card> */}
      </div>
    </div>
  );
}

export default Hero;
