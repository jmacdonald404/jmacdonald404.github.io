import React from "react";
import { Card, CardHeader } from "@heroui/react";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

// Use the same constants as Article component
const HEADER_IMAGE_WIDTH = 350;
const HEADER_IMAGE_HEIGHT = 250;

// Mobile breakpoint classes
const MOBILE_CONTAINER_CLASS = "w-full md:w-[960px]";
const CONTENT_LAYOUT_CLASS = "flex flex-col md:flex-row items-center md:items-start gap-6";
const CONTENT_CONTAINER_CLASS = "w-full md:w-[560px] px-4 md:px-0";

interface ProjectCardProps {
  title: string;
  tags: string;
  description: string;
  headerImage: {
    src: string;
    alt: string;
  };
  liveURL?: string;
  githubURL?: string;
  articleURL: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tags,
  description,
  headerImage,
  liveURL,
  githubURL,
  articleURL,
}) => {
  return (
    <Card className={`${MOBILE_CONTAINER_CLASS} space-y-5 p-4 md:p-6`} radius="lg" style={{ maxWidth: '960px' }}>
      <CardHeader className="pb-0 pt-0 px-0 flex-row items-start w-full" style={{ maxWidth: '100%' }}>
        <div className={CONTENT_LAYOUT_CLASS}>
          <div style={{ 
            width: '100%',
            maxWidth: HEADER_IMAGE_WIDTH, 
            height: HEADER_IMAGE_HEIGHT, 
            overflow: 'hidden',
            flexShrink: 0
          }} className="rounded-xl">
            <Image
              alt={headerImage.alt}
              className="object-cover w-full h-full min-w-full"
              style={{ 
                objectPosition: 'center',
                width: '100%',
                height: '100%'
              }}
              width={HEADER_IMAGE_WIDTH}
              height={HEADER_IMAGE_HEIGHT}
              src={headerImage.src}
            />
          </div>
          <div className={`${CONTENT_CONTAINER_CLASS} flex`} style={{ flexFlow: 'column', position: 'relative', height: 'auto', minHeight: HEADER_IMAGE_HEIGHT }}>
            <div className="flex-row flex flex-wrap justify-between gap-2">
              <span className="font-bold text-2xl md:text-3xl">{title}</span>
              <div className="flex gap-2 mt-1">
                {liveURL && (
                  <Link isExternal href={liveURL}>
                    <Chip color="secondary">demo</Chip>
                  </Link>
                )}
                {githubURL && (
                  <Link isExternal href={githubURL}>
                    <Chip color="secondary" variant="bordered">code</Chip>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-row">
              <p className="text-xs uppercase text-default-500 font-bold py-2 pb-4">{tags}</p>
            </div>
            <div className="flex-1 overflow-hidden">
              <span className="text-default-600 line-clamp-4">{description}</span>
            </div>
            <div className="flex justify-center items-end h-[60px] mt-auto">
              <Link 
                href={articleURL} 
                className=""
              >
                <Chip className="px-6">Read More -&gt;</Chip>
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}; 