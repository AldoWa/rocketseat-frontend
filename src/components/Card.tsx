import Image from "next/image";

interface CardProps {
  imageUrl: string;
  name: string;
  price: string;
}

export const Card = ({ imageUrl, name, price }: CardProps) => {
  return (
    <div className="bg-white rounded">
      <Image className="rounded-t" src={imageUrl} alt={name} width={256} height={300}/>
      <div className="px-3 py-2	">
        <p className="text-[#41414D] text-base">{name}</p>
        <div className="h-px w-full bg-[#DCE2E5] my-2"></div>
        <span className="font-semibold text-sm">{price}</span>
      </div>
    </div>
  )
}