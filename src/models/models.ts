export interface IAirport {
    id: string
    type: string
    attributes: {
        name: string
        city: string
        country: string
        iata: string
        icao: string
        latitude: string
        longitude: string
        altitude: string
        timezone: string
    }
}

export interface ServerResponse{
    data:IAirport[]
    links:{
        first: string
        last: string
        next: string
        prev: string
        self: string
    }
}


export interface IAirportDataForPage {
    data: {
        attributes: {
            altitude: number,
            city: string,
            country: string,
            iata: string,
            icao: string,
            id: number,
            latitude: string,
            longitude: string,
            name: string,
            timezone: string,

        },
        id: string,
        type: string
    }
    
}