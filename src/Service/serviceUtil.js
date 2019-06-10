import axios from 'axios';

const ServiceUtil = {
    async triggerServerRequest(options, res) {
        const method = options.method.toUpperCase();
        const url = options.url;
        if (method.toUpperCase() === 'GET') {
            const data = await axios.get(url).then(resp=>resp.data)
            return data;
        }
    }
};

export default ServiceUtil;



// if (method.toUpperCase() === 'GET') {
//     const _return = new Promise((resolve, reject) => {
//         axios.get(url)
//             .then((response) => {
//                 if (response) {
//                     return resolve(response.data);
//                 }
//             })
//             .catch(function (error) {
//                 return reject(error.response.data);
//             });
//     })
//     return Promise.all(_return)
//         .then((res) => {
//             console.log('>>>>>>>', res);
//         });
// }