import React from "react";
import {Chip} from "@heroui/chip";
import {Link} from "@heroui/link";

export const ProjectChips = ({articleURL, liveURL}:{articleURL:string,liveURL:string}) => {
  return (
    <div>
        <div className="w-[350px] flex-row">
          <Link href={liveURL}><Chip className="px-3 mr-3" color="secondary">Live demo</Chip></Link>
          <Chip className="px-3" color="secondary" variant="bordered">Github</Chip>
        </div>
        <div className="flex flex-row justify-between">
          <Link href={articleURL} className="flex gap-5"><Chip>Read More -&gtsp;</Chip></Link>
          <Link href="#" className="flex"><Chip>built with: [express.js, fly.io, psql]</Chip></Link>
        </div>
    </div>
  );
};
