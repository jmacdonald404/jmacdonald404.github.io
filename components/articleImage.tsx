import { Image } from "@heroui/image";

export const ArticleImage = ({src, alt, ...rest}) => {
  return(
    <div style={{ textAlign: "center" }}> {/* Centers text under the image */}
      <Image
        src={src}
        alt={alt}
        {...rest} // Pass down all remaining props
      />
      <p style={{ marginTop: "8px", fontSize: "14px", color: "#888", fontStyle:"italic" }}>
        {alt}
      </p>
    </div>
  );
};