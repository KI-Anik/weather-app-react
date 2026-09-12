import { CircleX } from "lucide-react";

const LocationModal = ({onClose}) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
            <div className="w-100 h-75 p-5 bg-gray-100 shadow-2xl rounded-2xl">
                <div className="flex justify-between items-center">
                    <h2 className="font-medium text-xl">Where are you from?</h2>
                    <button onClick={onClose} className="cursor-pointer"><CircleX /></button>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;