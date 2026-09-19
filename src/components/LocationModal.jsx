import { CircleX } from "lucide-react";
import { useState } from "react";
import { getGeolocation } from "../services/get-geolocation";

const LocationModal = ({ onClose }) => {
    const [city, setCity] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const value = city.trim()
        // console.log(value);
        try {
            const result = await getGeolocation(value)
            console.log(result);
        } catch (error) {
            console.log(error);

        }
    }

    const handleGeoLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            console.log(latitude, longitude);
        }, (error) => {
            console.log(error);
        }, {
            timeout: 10000
        })
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
            <div className="w-100 h-75 p-5 bg-gray-100 shadow-2xl rounded-2xl">
                <div className="flex justify-between items-center">
                    <h2 className="font-medium text-xl">Where are you from?</h2>
                    <button onClick={onClose} className="cursor-pointer"><CircleX /></button>
                </div>
                {/* form start */}
                <div className="pt-5">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5">
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            placeholder="Enter city name"
                            type="text"
                            className="border p-1 w-full rounded-2xl" />
                        {/* form end */}

                        {/* button start */}
                        <div className="">
                            <button type="submit"
                                className="w-full text-lg text-gray-100 bg-blue-500 px-5 py-1 font-medium hover:scale-105 transition-all delay-500 rounded-4xl">
                                Get weather
                            </button>
                        </div>
                    </form>
                </div>

                <div className="text-center text-xl py-1">or</div>

                <div className="">
                    <button type="button"
                        onClick={handleGeoLocation}
                        className="w-full text-lg text-gray-100 bg-blue-500 px-5 py-1 font-medium hover:scale-105 transition-all delay-500 rounded-4xl">
                        Use My Locations
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;