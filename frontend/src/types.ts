export type Train = {
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