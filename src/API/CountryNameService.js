import axios from "axios";

export default class CountryNameService {
  static async getAll() {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name')
    return [response.data, response]
  }
}