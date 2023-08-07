import { useEffect, useState } from "react"

const fetchTrains = async () => {
    return await fetch("http://localhost:8080/trains", {
        method: "GET"
    })
}

type Train = {
    trainName: string,
    trainNumber: number,
    departureTime: {
        Hours: number,
        Minutes: number,
        Seconds: number
    },
    seatsAvailable: {
        sleeper: number,
        AC: number
    }
    price: {
        sleeper: number,
        AC: number
    },
    delayedBy: number
}

export default function Trains() {

    const [trains, setTrains] = useState<Train[]>([]);

    useEffect(() => {
        fetchTrains().then(
            data => data.json().then(finalData => setTrains(finalData)
            )
        )
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-5xl font-extrabold mb-2 text-center">Indian Railway Service</h1>
            <div className="px-52">
                <h3 className="text-3xl font-extrabold mt-6">Trains</h3>
                {
                    trains.map((train, id) => {
                        return (
                            <div key={id} className="bg-gray-200 my-2 p-2 rounded-md flex flex-col pr-6">
                                <div className="flex items-center gap-4 justify-between">
                                    <p className="text-xl font-bold">{train.trainName}</p>
                                    <p>Train number: <span className="font-bold">{train.trainNumber}</span></p>
                                </div>
                                <div>
                                    <span>Departure time: </span>
                                    <span>{train.departureTime.Hours}</span>:
                                    <span>{train.departureTime.Minutes}</span>:
                                    <span>{train.departureTime.Seconds}</span>
                                </div>
                                <p>Delayed by: {train.delayedBy}</p>
                                <div className="flex items-center mt-4 justify-between ">
                                    <div className="">
                                        <p className="font-semibold text-lg">Seats Available:</p>
                                        <div className="flex flex-col ml-4">
                                            <p><span className="font-semibold">Sleeper:</span> {train.seatsAvailable.sleeper} seats</p>
                                            <p><span className="font-semibold">AC:</span> {train.seatsAvailable.AC} seats</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Price:</p>
                                        <div className="flex flex-col ml-4">
                                            <p><span className="font-semibold">Sleeper:</span> {train.price.sleeper} rs</p>
                                            <p><span className="font-semibold">AC:</span> {train.price.AC} rs</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}