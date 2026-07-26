import logoAsset from "@/assets/sygnet3.png.asset.json";

interface LogoProps {
  height?: number;
  className?: string;
  alt?: string;
  showText?: boolean;
}

export function Logo({ height = 36, className = "", alt = "3dmodele.pl", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoAsset.url}
        alt={alt}
        height={height}
        className="h-auto w-auto object-contain"
        style={{ height }}
      />
      {showText && (
        <span className="whitespace-nowrap text-lg font-bold tracking-tight text-foreground">
          3dmodele.pl
        </span>
      )}
    </div>
  );
}
