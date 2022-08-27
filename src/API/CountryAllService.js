import axios from "axios";

export default class CountryAllService {
  static async getAll(country) {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
    return response.data
  }
}