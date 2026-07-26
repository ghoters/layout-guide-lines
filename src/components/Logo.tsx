import logoAsset from "@/assets/sygnet_logo.jpg.asset.json";

interface LogoProps {
  height?: number;
  className?: string;
  alt?: string;
}

export function Logo({ height = 36, className = "", alt = "3dmodele.pl" }: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      height={height}
      className={`h-auto w-auto object-contain ${className}`}
      style={{ height }}
    />
  );
}
