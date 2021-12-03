const INITIAL_STATE = {
    data:{
    "coord": {
        "lon": 67.0822,
        "lat": 24.9056
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 301.05,
        "feels_like": 299.69,
        "temp_min": 301.05,
        "temp_max": 301.05,
        "pressure": 1014,
        "humidity": 12
    },
    "visibility": 6000,
    "wind": {
        "speed": 6.17,
        "deg": 60
    },
    "clouds": {
        "all": 0
    },
    "dt": 1638445359,
    "sys": {
        "type": 1,
        "id": 7576,
        "country": "PK",
        "sunrise": 1638410423,
        "sunset": 1638448927
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