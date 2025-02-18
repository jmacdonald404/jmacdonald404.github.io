import React from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import {Image} from "@heroui/image";
import {Chip} from "@heroui/chip";
import {Link} from "@heroui/link";
import {ArticleImage} from "./articleImage"
import {ArticleFooter} from "./articleFooter"
import {Divider} from "@heroui/divider"

export const Article = ({img, name, tags, description, liveURL}:{img:string,name:string,tags:string,description:string,liveURL:string,githubURL:string,articleURL:string,tech:string,children:string}) => {

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
                <Link href={liveURL}><Chip className="" color="secondary">demo</Chip></Link>
                <Chip className="ml-2" color="secondary" variant="bordered">code</Chip>
              </div>
              </div>
            <div className="flex flex-row">
              <p className="text-xs uppercase text-default-500 font-bold py-2 pb-4">{tags}</p>
            </div>





            <div className="flex-column items-between">
              <span className="text-default-600">{description}</span>

          </div>
          <div className="flex justify-center items-end h-[60px]">

          <Link href="#" className="flex"><Chip>built with: [express.js, fly.io, psql]</Chip></Link>
            </div>
          </div>

        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-0 px-2 flex-column">
        <div className="pt-4 flex-row">
          I first stumbled upon saltybet during my time at CodeCore Bootcamp in Vancouver, BC in 2017. It was a simple distraction that I would turn my attention to while waiting for bundler to fetch rubygems (particularly nokogiri at the time), or just to take a break from digesting the algorithm lesson of the day. Suffice to say, in spite of the mild enjoyment of making a wager on what was essentially a coin-toss, I didn&apos;t have the bandwidth to memorize the sheer volume of combinations of fighter attributes and statistics. The obvious solution was to create Saltybot.
<br /><br /><ArticleImage
          alt="Saltybet interface: wager table on the left, gameplay stream in center, twitch chat on the right."
          className="object-cover rounded-xl"
          src="/saltybet.jpg"
          // isLoading
        /><br />
          Saltybot had remained a fever-dream up until December 2024. I&apos;m glad I didn&apos;t dive deeply into it sooner. Sure, writing a bot to scrape the data from either twitch chat or the saltybet site itself was not a novel or insurmountable task by any means, but reading through others&apos; research into similar projects has lead to some interesting discoveries. Notably of which is the suspicion of [https://github.com/odderaser/msu-writing-project/] (who wrote a lovely thesis on deriving probabilities of saltybet outcomes), who posited that the algorithm that selects the fighters for each contest is likely to be at an even skill level to one-another [reference]. Fine-tuning my own iterations of Saltybot seem to correlate this, as any sort of basic metric I implemented (elo, winstreaks, perceived strength based on audience favouritism) did not have a high rate of reliability.
        </div>

      </CardBody>
      <Divider />
      <CardFooter>
        <ArticleFooter>

        </ArticleFooter>
      </CardFooter>




    </Card>
  );
};
