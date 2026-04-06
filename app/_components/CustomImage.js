import Image from "next/image";

export default function CustomImage({
  src,
  alt = "image",
  height = "h-[300px] md:h-[600px]",
  className = "",
  priority = false,
}) {
  return (
    <div className={`relative w-full ${height}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${className}`}
      />
    </div>
  );
}
