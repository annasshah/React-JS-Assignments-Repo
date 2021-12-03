const INITIAL_STATE = {
    data: {
        "coord": {
            "lon": 67.0822,
            "lat": 24.9056
        },
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 301.05,
            "feels_like": 299.76,
            "temp_min": 301.05,
            "temp_max": 301.05,
            "pressure": 1017,
            "humidity": 17
        },
        "visibility": 5000,
        "wind": {
            "speed": 5.14,
            "deg": 60
        },
        "clouds": {
            "all": 0
        },
        "dt": 1638517180,
        "sys": {
            "type": 1,
            "id": 7576,
            "country": "PK",
            "sunrise": 1638496865,
            "sunset": 1638535331
        },
        "timezone": 18000,
        "id": 1174872,
        "name": "Karachi",
        "cod": 200
    }
}


const reducer = (state = INITIAL_STATE, action) => {
    console.log(action);

    if (action.type === "DATAFROMAPI") {
        state.data = action.data;
        return { ...state, ...action };
    }
    return state;
};


export default reducer