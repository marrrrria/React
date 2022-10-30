import React from "react";

export default class PersonalData extends React.Component {

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.showPicture = this.props.showPicture
  }

  sendResult(e) {
    e.preventDefault()
    
    const name = this._name.value
    const date = this._date.value
    const city = this._city.value
    const isAgree = this._isAgree.checked
    const gender = this._gender.value
    const profilePicture = this.fileInput.current.files[0]

    alert (`Data has successfully sent`)

    console.log(this.fileInput.current.files)

    this._name.value = ''
    this._date.value = ''
    this._city.value = 'Minsk'
    this._isAgree.checked = false
    this._gender.value = 'Male'
    // this.fileInput.
    console.log(this.fileInput)

    const fileReader = new FileReader()
    fileReader.readAsDataURL(profilePicture)
    fileReader.onload = () => {
      const personalData = {
        name: name,
        date: date,
        city: city,
        gender: gender,
        pictureUrl: fileReader.result
      } 
      this.showPicture(personalData)
    };
    
    
  }

  render() {
    return (
  
    <form onSubmit={(e) => this.sendResult(e)}>
      <input type="text" placeholder="Enter your name" ref={input => this._name = input}/>
      <label>Enter your birthday <input type="date" ref={input => this._date = input}/></label>
      <select ref={select => this._city = select}>
        <option>Minsk</option>
        <option>Brest</option>
        <option>Mohiloy</option>
        <option>Grodno</option>
      </select>
      <label><input type="checkbox" ref={input => this._isAgree = input}/> I agree to get some messages</label>
      <label>Gender
        <select ref={select => this._gender = select}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </label>
      <label>Profile Picture <input type="file" ref={this.fileInput} multiple/></label>
      <button>Send</button>
    </form>
    
  )
  }
  
}