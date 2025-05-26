import React from "react";
import {Card, CardHeader} from "@heroui/react";
import {Image} from "@heroui/image";
import {Chip} from "@heroui/chip";
import {Link} from "@heroui/link";

export const ProjectCard = ({img, name, tags, description, liveURL, githubURL, articleURL}: {img:string,name:string,tags:string,description:string,liveURL:string,githubURL:string,articleURL:string}) => {

  return (
    <Card className="w-[960px] space-y-5 p-6" radius="lg">
      <CardHeader className="pb-0 pt-0 px-0 flex-row items-start">
        <div className="flex flex-column items-start">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={img}
            width={350}
          />
          <div className="pl-6 w-[650px] flex " style={{'flexFlow':'column'}}>

            <div className="flex-row flex justify-between ">
              <span className="font-bold text-3xl">{name}</span>
              <div className="mt-1">
                <Link isExternal href={liveURL}><Chip className="" color="secondary">demo</Chip></Link>
                <Link isExternal href={githubURL}><Chip className="ml-2" color="secondary" variant="bordered">code</Chip></Link>
              </div>
              </div>
            <div className="flex flex-row">
              <p className="text-xs uppercase text-default-500 font-bold py-2 pb-4">{tags}</p>
            </div>





            <div className="flex-column items-between">
              <span className="text-default-600">{description}</span>

          </div>
          <div className="flex justify-center items-end h-[60px]">
              <Link href={articleURL} className=" " style={{"position":"absolute","bottom":"30px"}}><Chip className="px-6">Read More -&gt;</Chip></Link>
            </div>
          </div>

        </div>

      </CardHeader>


    </Card>
  );
};
