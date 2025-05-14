interface SkillProps {
  image: string;
  tech: string;
  bgColor: string;
  ShadowColor: string;
}

export default function SkillComponent({
  image,
  tech,
  bgColor,
  ShadowColor,
}: SkillProps) {
  return (
    <div className="flex flex-col place-items-center gap-3">
      <div
        className={`${bgColor} h-16 w-16 flex rounded-3xl shadow-lg ${ShadowColor} p-2`}
      >
        <img src={image} loading="lazy" />
      </div>
      <p className="font-medium text-lg">{tech}</p>
    </div>
  );
}
