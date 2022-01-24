export async function allpoint_getAllpointATMs(inputString: string): string {
    const inputJson = JSON.parse(inputString)
    const pageToken = inputJson["pageToken"]
    
    let requestUrl = 'https://clsws.locatorsearch.net/Rest/LocationApi.svc/GetLocationsList'
    if (pageToken != null) {
        requestUrl = `${requestUrl}&pagination_token=${pageToken}`
    }

    const response = await fetch(requestUrl, {method: 'POST', headers: {"Content-Type": "application/json"}, body: '{"UserName": ${allpointUsername},"Password": ${allpointPassword},"Type": ""}'}).then(response => response.json())
    const outputString = JSON.stringify({"data": response})

    return outputString;
}
