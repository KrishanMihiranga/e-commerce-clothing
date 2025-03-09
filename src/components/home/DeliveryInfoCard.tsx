import { IconType } from "react-icons";

const DeliveryInfoCard = ({ icon: Icon, title, subTitle }: { icon: IconType, title: string, subTitle: string }) => {
    return (
        <div className="flex items-center justify-between gap-5">
            <Icon size={50} /> 
            <div className="flex flex-col items-start leading-[1.5rem]">
                <span className="font-medium">{title}</span>
                <span className="text-[1.3rem]">{subTitle}</span>
            </div>
        </div>
    )
}

export default DeliveryInfoCard;
