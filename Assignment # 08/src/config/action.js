import axios from "axios";

const getData = (dispatch) => {
    const apiHandle = axios.create({
        baseURL: "http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2",
    });

    apiHandle.get().then((e) => {
        let data = e.data
        dispatch({
            type: "DATAFROMAPI",
            data: data,
        });
    })

};

export { getData };