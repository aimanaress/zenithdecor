import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Button from "../../shared/components/Button";

function CollectionCard(props) {
  return (
    <div className="w-full flex flex-row py-4">
      <div className="h-[17rem] w-1/2 ">
        <img
          className="h-full w-full overflow-hidden rounded-lg object-cover object-center"
          src={props.imgLink}
          alt="profile-picture"
        />
      </div>
      <div className="flex flex-col justify-between my-8 ml-8">
        <div className="">
          <h2 className="text-white font-bold">{props.title}</h2>
          <p className="text-gray-500">{props.subtitle}</p>
        </div>
        <div>
          <Button highlight className="" name={props.cta} />
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;

{
  /*
    <Card className="w-full flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Summer Collection
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Experience the warmth of Scandinavian design
        </Typography>
        <a href="#" className="inline-block">
          <Button highlight className="" name="Explore Collection" />
        </a>
      </CardBody>
    </Card>*/
}
