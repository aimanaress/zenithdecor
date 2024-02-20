import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

function ItemCard() {
  return (
    <div className="flex flex-col py-2">
      <div>
        <img
          className="h-[8rem] w-[17rem] overflow-hidden rounded-lg object-cover object-center"
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
        <h2 className="text-white font-bold mt-2">Item name</h2>
        <p className="text-gray-500">$64.78</p>
        {/* <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
      </Card> */}
      </div>
    </div>
  );
}

export default ItemCard;
