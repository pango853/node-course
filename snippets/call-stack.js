const listLocations = (locations) => {
    locations.forEach((location) => {
        console.log(location)
    })
}

const myLocations = ['Pilly', 'NYC']

listLocations(myLocations)

/**
 * == Call Stack ==
 * console.log(...)
 * anonymous('Pilly')
 * forEach(...)
 * listLocation([...])
 * main()
 */