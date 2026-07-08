import { useEffect } from "react";
import axios from "axios";

const Home = () => {

    const getData = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products");
            console.log(res.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="min-h-screen pt-24 px-6">
            <button
                onClick={getData}
                className="px-5 py-2 border border-black rounded hover:bg-gray-200"
            >
                Get Data
            </button>
        </div>
    );
};

export default Home;