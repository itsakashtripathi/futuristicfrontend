import axios from 'axios';

module.exports = {
    saveRecepie: async (url) => {
        try {
            return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/recepie`, { url });
        } catch (error) {
            console.log("error in saveRecepie: ", error);
        }
    }
}