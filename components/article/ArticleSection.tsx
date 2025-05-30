import React from "react";
import { Image } from "@heroui/image";
// import { Link } from "@heroui/link";

interface TextSection {
  subheader?: string;
  text: string;
}

interface ArticleSectionProps {
  type: 'text' | 'image' | 'code' | 'quote';
  content: string | TextSection[];
  header?: string;
  imageProps?: {
    src: string;
    alt: string;
    width?: number;
    position?: 'left' | 'right' | 'full';
    showCaption?: boolean;
  };
  links?: Array<{
    text: string;
    url: string;
  }>;
}

export const ArticleSection: React.FC<ArticleSectionProps> = ({ type, content, header, imageProps, links }) => {
  const processText = (text: string) => {
    let processedText = text;
    links?.forEach(link => {
      const regex = new RegExp(`\\[${link.text}\\]`, 'g');
      processedText = processedText.replace(
        regex,
        `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">${link.text}</a>`
      );
    });
    return processedText;
  };

  const renderContent = () => {
    switch (type) {
      case 'text':
        return (
          <div className="prose prose-lg max-w-none">
            {header && (
              <h2 className="text-2xl font-bold mb-4 text-default-900">{header}</h2>
            )}
            {Array.isArray(content) ? (
              content.map((section, index) => (
                <div key={index} className="mb-6">
                  {section.subheader && (
                    <h3 className="text-xl font-semibold mb-3 text-default-800">
                      {section.subheader}
                    </h3>
                  )}
                  {section.text.split('\n').map((paragraph, pIndex) => (
                    <p
                      key={`${index}-${pIndex}`}
                      className="mb-4"
                      dangerouslySetInnerHTML={{ __html: processText(paragraph) }}
                    />
                  ))}
                </div>
              ))
            ) : (
              content.split('\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: processText(paragraph) }}
                />
              ))
            )}
          </div>
        );
      
      case 'image':
        if (!imageProps) return null;
        
        let imageContainerClass = '';
        let imageClass = 'rounded-lg';
        let imageWidth = imageProps.width;
        
        switch (imageProps.position) {
          case 'left':
            imageContainerClass = 'float-left mr-6 mb-4';
            break;
          case 'right':
            imageContainerClass = 'float-right ml-6 mb-4';
            break;
          case 'full':
          default:
            imageContainerClass = 'w-full mb-6 text-center';
            imageClass = 'rounded-lg w-full h-auto object-cover';
            imageWidth = undefined; // Let the image fill the container width
        }
        
        return (
          <div className={imageContainerClass}>
            {header && (
              <h2 className="text-2xl font-bold mb-4 text-default-900">{header}</h2>
            )}
            <Image
              src={imageProps.src}
              alt={imageProps.alt}
              width={imageWidth}
              className={imageClass}
            />
            {imageProps.showCaption !== false && imageProps.alt && (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic">
                {imageProps.alt}
              </p>
            )}
          </div>
        );
      
      case 'quote':
        const quoteContent = typeof content === 'string' ? content : content[0]?.text || '';
        return (
          <div>
            {header && (
              <h2 className="text-2xl font-bold mb-4 text-default-900">{header}</h2>
            )}
            <blockquote className="border-l-4 border-primary pl-4 italic my-6">
              {quoteContent}
            </blockquote>
          </div>
        );
      
      case 'code':
        const codeContent = typeof content === 'string' ? content : content[0]?.text || '';
        return (
          <div>
            {header && (
              <h2 className="text-2xl font-bold mb-4 text-default-900">{header}</h2>
            )}
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6">
              <code>{codeContent}</code>
            </pre>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="my-6">
      {renderContent()}
    </div>
  );
}; 