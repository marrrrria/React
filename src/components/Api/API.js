
export default class API {

  _apiBase = 'https://randomfox.ca/floof/'
  // _apiKey = '567c585b87e24753a86cf7564baf73b4'
  // _apiAdditional = '&keywords=fun'

  async getPicture() {
    let result = await fetch(`${this._apiBase}`)
    .then(res => res.json())
    .then(res => res)
    console.log(result.image)
    return result.image;
  }
}