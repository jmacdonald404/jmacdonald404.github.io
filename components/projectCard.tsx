import React from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Skeleton} from "@heroui/skeleton";
import {Image} from "@heroui/image";
import {Chip} from "@heroui/chip";
import {Link} from "@heroui/link";

export const ProjectCard = ({img, name, tags, description, liveURL, githubURL, articleURL, tech, children}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };
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
              <large className="font-bold text-3xl">{name}</large>
              <div className="mt-1">
                <Link href={liveURL}><Chip className="" color="secondary">demo</Chip></Link>
                <Chip className="ml-2" color="secondary" variant="bordered">code</Chip>
              </div>
              </div>
            <div className="flex flex-row">
              <p className="text-xs uppercase text-default-500 font-bold py-2 pb-4">{tags}</p>
            </div>





            <div className="flex-column items-between">
              <medium className="text-default-600">{description}</medium>

          </div>
          <div className="flex justify-center items-end h-[60px]">
              <Link href={articleURL} className=" " style={{"position":"absolute","bottom":"30px"}}><Chip className="px-6">Read More -></Chip></Link>
            </div>
          </div>

        </div>

      </CardHeader>


    </Card>
  );
};
