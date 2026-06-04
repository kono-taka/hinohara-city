import Image from "next/image";

export default function CityEmblem({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/emblem/emblem.png"
      alt="日野原市章"
      width={80}
      height={80}
      className={className}
      priority
    />
  );
}
