import React from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import {Image} from "@heroui/image";
import {Chip} from "@heroui/chip";
import {Link} from "@heroui/link";
import {ArticleImage} from "./articleImage"
import {ArticleFooter} from "./articleFooter"
import {Divider} from "@heroui/divider"

export const Article = ({img, name, tags, tech, description, p1, p2, p3, liveURL, githubURL}:{img:string,name:string,tags:string,description:string,p1:string,p2:string,p3:string,liveURL:string,githubURL:string,articleURL:string,tech:string,children:string}) => {

  return (
    <Card className="w-[960px] space-y-5 p-6" radius="lg">
      <CardHeader className="pb-0 pt-0 px-0 flex-row items-start">
        <div className="flex flex-column items-start">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={`/${img}`}
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
              <span className="text-default-600">{p1}</span>

          </div>
          <div className="flex justify-center items-end h-[60px]">

          <Link href="#" className="flex"><Chip>built with: [{tech}]</Chip></Link>
            </div>
          </div>

        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-0 px-2 flex-column">
        <div className="pt-4 flex-row">
          {p2}
<br /><br />
        {/*<ArticleImage*/}
        {/*  alt="Saltybet interface: wager table on the left, gameplay stream in center, twitch chat on the right."*/}
        {/*  className="object-cover rounded-xl"*/}
        {/*  src="/saltybet.jpg"*/}
        {/*  // isLoading*/}
        {/*/>*/}
          <br />
          {p3}
        </div>

      </CardBody>
      <Divider />
      <CardFooter>
        {/*<ArticleFooter>*/}

        {/*</ArticleFooter>*/}
      </CardFooter>




    </Card>
  );
};
