import axios from 'axios'

const instance = axios.create({           //se crea una instancia  
    baseURL: 'https://api-php-fullstack.herokuapp.com/api'
})


const SendEmail = async (DataConsole) => {
    const respuesta = await instance({
        method: 'post',
        url: 'contact/store',
        data: DataConsole,
    });
    return respuesta
}

export {
    SendEmail
}