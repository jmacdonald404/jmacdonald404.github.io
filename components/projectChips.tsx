import React from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Skeleton} from "@heroui/skeleton";
import {Image} from "@heroui/image";
import {Chip} from "@heroui/chip";
import {Link} from "@heroui/link";

export const ProjectChips = ({articleURL, liveURL, githubURL, tech}) => {
  return (
    <div className="w-[350px] flex-row">
      <Link href={liveURL}><Chip className="px-3 mr-3" color="secondary">Live demo</Chip></Link>
      <Chip className="px-3" color="secondary" variant="bordered">Github</Chip>
    </div>
    <div className="flex flex-row justify-between">
      <Link href={articleURL} className="flex gap-5"><Chip>Read More -></Chip></Link>
      <Link href="#" className="flex"><Chip>built with: [express.js, fly.io, psql]</Chip></Link>
    </div>
  );
};
