const APIAuth = async () => {
    const response = await fetch("http://20.244.56.144/train/auth", {
        method: "POST",
        body: JSON.stringify({
            companyName: "Train Central",
            clientID: "dffd5f9b-e8d6-4005-af8d-5e0c78833bcf",
            clientSecret: "ohRNmyShmBjjcTju",
            ownerName: "Arjun",
            ownerEmail: "arjun@drs.com",
            rollNo: "20VE1A6718"
        })
    })
    const JSONData = await response.json();
    return JSONData;
}

const getTrains = async (authToken) => {
    const response = await fetch("http://20.244.56.144/train/trains", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + authToken
        }
    })
    const JSONData = await response.json();
    return JSONData;
}

const filterTrains = (trains) => {
    const now = new Date();
    return trains.filter(train => {
        const hoursDifference = train.departureTime.Hours - now.getHours();
        const minutesDifference = train.departureTime.Minutes - now.getMinutes();
        return hoursDifference < 12 && (hoursDifference === 0 ? minutesDifference > 30 : true);
    });
}

const sortTrains = (trains) => {
    return trains.sort((train1, train2) => train1.price.sleeper - train2.price.sleeper).sort((train1, train2) => train2.seatsAvailable.sleeper - train1.seatsAvailable.sleeper).sort((train1, train2) => {
        const train1Departure = new Date(0, 0, 0, train1.departureTime.Hours, train1.departureTime.Minutes + train1.delayedBy, train1.departureTime.Seconds, 0);
        const train2Departure = new Date(0, 0, 0, train2.departureTime.Hours, train2.departureTime.Minutes + train2.delayedBy, train2.departureTime.Seconds, 0);
        return train2Departure - train1Departure;
    });
}

module.exports = { APIAuth, getTrains, filterTrains, sortTrains }