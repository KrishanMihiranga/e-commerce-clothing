import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Card } from "../ui/card";
import testImage from "/images/products/gp5.webp";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";

const BagSheet = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="z-[101] !max-w-[25%] !w-full bg-[#f8f8f8] !p-10 flex flex-col justify-between">
                
                <SheetHeader>
                    <SheetTitle className="text-[3rem]">Your Bag (2)</SheetTitle>
                    <SheetDescription className="text-[1.5rem]">
                        Your selected items will appear here. Ready to checkout?
                    </SheetDescription>
                </SheetHeader>

               
                <div className="flex-1 overflow-auto">
                    <Card className="flex flex-row !mb-2 w-full items-center justify-between !p-4 bg-transparent shadow-none">
                        <img src={testImage} alt="Address Product" width={70} className="rounded-2xl" />
                        <div className="w-full flex flex-col gap-2">
                            <div className="text-[1.5rem] font-normal flex items-center justify-between">
                                <span className="max-w-[35ch]">Project Address Pique Crewneck</span>
                                <span>2500 LKR</span>
                            </div>
                            <span className="text-[1.3rem] text-gray-500">Mint Green, L</span>

                            <div className="flex items-center gap-5 justify-between">
                                <div className="flex items-center border border-gray-600 rounded-lg">
                                    <button onClick={decreaseQty} className="!px-4 !py-4">
                                        <FaMinus size={15} />
                                    </button>
                                    <span className="!px-4 text-[1.7rem]">{quantity}</span>
                                    <button onClick={increaseQty} className="!px-4 !py-4">
                                        <FaPlus size={15} />
                                    </button>
                                </div>
                                <div>
                                    <RiDeleteBin7Fill />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="flex flex-row w-full items-center justify-between !p-4 bg-transparent shadow-none">
                        <img src={testImage} alt="Address Product" width={70} className="rounded-2xl" />
                        <div className="w-full flex flex-col gap-2">
                            <div className="text-[1.5rem] font-normal flex items-center justify-between">
                                <span className="max-w-[35ch]">Project Address Pique Crewneck</span>
                                <span>2500 LKR</span>
                            </div>
                            <span className="text-[1.3rem] text-gray-500">Mint Green, L</span>

                            <div className="flex items-center gap-5 justify-between">
                                <div className="flex items-center border border-gray-600 rounded-lg">
                                    <button onClick={decreaseQty} className="!px-4 !py-4">
                                        <FaMinus size={15} />
                                    </button>
                                    <span className="!px-4 text-[1.7rem]">{quantity}</span>
                                    <button onClick={increaseQty} className="!px-4 !py-4">
                                        <FaPlus size={15} />
                                    </button>
                                </div>
                                <div>
                                    <RiDeleteBin7Fill />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

               
                <SheetFooter className="border-t pt-5 mt-5">
                    <div className="flex justify-between w-full text-[2.3rem] font-semibold">
                        <span>Total</span>
                        <span>5000 LKR</span>
                    </div>
                    <button className="w-full bg-[#000] cursor-pointer text-white !py-3 !mt-3 rounded-lg text-[1.5rem]">
                        Proceed to Checkout
                    </button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default BagSheet;
