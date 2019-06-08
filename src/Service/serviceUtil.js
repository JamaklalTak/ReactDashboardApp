import axios from 'axios';

const ServiceUtil = {
    async triggerServerRequest(options, res) {
        const method = options.method.toUpperCase();
        const url = options.url;
        if (method.toUpperCase() === 'GET') {
            return axios.get(url)
                .then((response) => {
                    return response.data
                })
                .catch(function (error) {

                    return error.response.data;

                });
        }
    }
};

export default ServiceUtil;