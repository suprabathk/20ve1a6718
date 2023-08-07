import { useEffect, useState } from "react"
import { Train } from "../types";
import { useParams } from "react-router";

const fetchTrain = async (id: number) => {
    return await fetch(`http://localhost:8080/train/${id}`, {
        method: "GET"
    })
}

export default function Trains() {

    const [train, setTrain] = useState<Train | undefined>(undefined);
    const { id } = useParams();
    const idF = parseInt(id ? id : "-1");
    useEffect(() => {
        fetchTrain(idF).then(
            data => data.json().then(finalData => setTrain(finalData)
            )
        )
    }, [idF]);

    return (
        <div className="p-6">
            <h1 className="text-5xl font-extrabold mb-2 text-center">Indian Railway Service</h1>
            {train &&
                <div className="px-52">
                    <div>
                        <h3 className="text-4xl font-extrabold mt-6">{train.trainName}</h3>
                        <p className="text-2xl font-semibold mt-2">Train number: {train.trainNumber}</p>
                    </div>
                    <div className="mt-6">
                        <p><span className="text-xl font-semibold">Departure time: </span>{`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}</p>
                        <p><span className="text-xl font-semibold">Delayed by: </span>{train.delayedBy}</p>
                    </div>
                    <div></div>
                </div>}
        </div>
    )
}