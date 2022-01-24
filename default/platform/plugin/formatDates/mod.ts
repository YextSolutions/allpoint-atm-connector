export function formatDate(dateString: string) {
    var formattedDate = ""
    if (dateString != "") {
        var date = new Date(dateString)
        
        var year = date.getFullYear()
        
        var numMonth = date.getMonth() + 1
        var month = String(numMonth)
        if (numMonth < 10) month = '0' + month

        var numDay = date.getDate()
        var day = String(numDay)
        if (numDay < 10) day = '0' + day

        var numHour = date.getHours()
        var hour = String(numHour)
        if (numHour < 10) hour = '0' + hour

        var numMins = date.getMinutes()
        var minutes = String(numMins)
        if (numMins < 10) minutes = '0' + minutes

        formattedDate = year + "-" + month + "-" + day + "T" + hour + ":" + minutes

        console.log(date.toLocaleTimeString())

    }

    return formattedDate
}