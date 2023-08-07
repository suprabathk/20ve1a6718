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


module.exports = { APIAuth }