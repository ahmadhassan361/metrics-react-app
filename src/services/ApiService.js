// src/services/APIService.js

import Papa from 'papaparse';
import axios from 'axios';

class APIService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://example-base-url.com',
            timeout: 10000,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
                'Content-Type': 'application/json'
            }
        });
    }

    // Method to parse CSV file
    parseCSV(file) {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    resolve(results.data);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    }
}

export default new APIService();
