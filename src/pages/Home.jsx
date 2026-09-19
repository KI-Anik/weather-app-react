import { useState } from "react";
import LocationModal from "../components/LocationModal";

const Home = () => {
    const [click, setClick] = useState(false)

    return (
        <div>
            <div className="text-center">
                <h1 className="text-6xl text-blue-200 font-extrabold">
                    Titan <span className="text-blue-400">Weather</span>
                </h1>
                <p className="py-4 text-xl  text-gray-400">Check your Weather today</p>
            </div>

            <div className="text-center">
                <button type="button"
                    onClick={() => setClick(true)}
                    className="text-lg text-gray-100 bg-blue-500 px-5 py-1 font-medium hover:scale-105 transition-all delay-500 rounded-4xl">
                    Check weather
                </button>
            </div>

            {
                click && <LocationModal onClose={() => setClick(false)}></LocationModal>
            }
        </div>
    );
};

export default Home;