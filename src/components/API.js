import toast from 'react-hot-toast';

export default class API {
  _baseUrl = "https://rickandmortyapi.com/api"

  async getData(url) {
    // console.log(url, this._baseUrl)
    try {
      const response = await fetch(`${this._baseUrl}` + url);
      if(!response.ok) {
        throw new Error(`Could not fetch, received ${response.status}`)
      } else {
        const data = await response.json();
        return data
      }
    }
    catch(err) {
      toast.error('Error')
      // console.log('ERRORRRRRRRRRRRRRRR' + err)
    }
  }

  async getAllCharacters() {
    const characters = await this.getData('/character')
    return characters.results.map(this._transformCharacter)
  }

  async getCharacter(id) {
    return await this.getData(`/character/` + id)
  }

  async getAllEpisodes() {
    return await this.getData('/episode')
  }

  async getEpisode(id) {
    return await this.getData('/episode/' + id)
  }

  async getAllLocations() {
    return await this.getData('/location')
  }

  async getLocation(id) {
    return await this.getData('/location/' + id)
  }

  async searchByCharacters(value) {
    return await this.getData('/character/?name=' + value)
  }

  async searchByLocation(value) {
    return await this.getData('/location/?name=' + value)
  }

  async searchByEpisode(value) {
    return await this.getData('/episode/?name=' + value)
  }

  _transformCharacter(character) {
    return {
      id: character.id,
      image: character.image || '',
      name: character.name,
    }
  }
}