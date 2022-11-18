import React from "react";
import './personal-data.css'

export default class PersonalData extends React.Component {

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.showPicture = this.props.showPicture
    this.state = {
      errors: {
      },
      isStart: false,
      error: ''

    }
    this.errors = ''
  }

  validation() {
    const res = {
          name: this._name.value.split('').length <= 3,
          birthday: !this._date.value || new Date(this._date.value) > Date.now() ? true : false,
          isAgree: !this._isAgree.checked,
          picture: this.fileInput.current.files[0] ? false : true,
        }

    this.setState((state) => {
      return {
        errors:{
          ...state.errors,
          ...res,
        }
      }
    })
    this.error = this._name.value.split('').length <= 3
    console.log(this.state)
    return res
  }

  submit(e) {
    e.preventDefault()
    
    
    // console.log(Object.values(this.state.errors))
    if(!Object.values(this.validation()).includes(true)) {
      this.sendResult(e)
    }
    this.setState({error: 'Не корректные данные'})
    // this.sendResult(e)
  }

  sendResult(e) {
    e.preventDefault()
    this.setState({isStart: false})
    
    console.log(this.state)
    const name = this._name.value
    const date = this._date.value
    const city = this._city.value
    const isAgree = this._isAgree.checked
    const gender = this._gender.value
    const profilePicture = this.fileInput.current.files[0]

    // if(name.split().length < 3) {
    //   alert('Your name is too short')
    //   this.setState(({state}) => {
    //     console.log(state)
    //     return {
    //       ...state,
    //       errors: {
    //         name: 'ABGDG',
    //         picture: state.errors.picture,
    //       }
    //       // ...state,
    //       // errors: {
    //       //   ...state.errors,
    //       // name: 'Your name is too small',
    //       // },
    //     }
    //   })
    //   this._name.value = ''
    // } else {


    

    console.log(this.fileInput.current.files)

    this._name.value = ''
    this._date.value = ''
    this._city.value = 'Minsk'
    this._isAgree.checked = false
    this._gender.value = 'Male'
    this.fileInput.current.value = ''
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


    setTimeout(() => alert (`Data has successfully sent`),1)
    // }

    
    
  }

  render() {
    return (
  <div className="form-profile">
    <form onSubmit={(e) => this.submit(e)}>

      <label style={{color: "red"}}>{this.state.errors.name ? this.state.error : ''}</label>
      <input type="text" placeholder="Enter your name" ref={input => this._name = input} onChange={() => !this.state.isStart && this.setState({isStart: true})}/>
      {/* <label>{this.state.error}</label> */}

      <label style={{color: "red"}}>{this.state.errors.birthday ? this.state.error : ''}</label>
      <label>Enter your birthday <input type="date" ref={input => this._date = input}/></label>
      <select ref={select => this._city = select}>
        <option>Minsk</option>
        <option>Brest</option>
        <option>Mohiloy</option>
        <option>Grodno</option>
      </select>
      <label style={{color: "red"}}>{this.state.errors.isAgree ? this.state.error : ''}</label>
      <label><input type="checkbox" ref={input => this._isAgree = input}/> I agree to get some messages</label>
      <label>Gender
        <select ref={select => this._gender = select}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </label>
      <label style={{color: "red"}}>{this.state.errors.picture ? this.state.error : ''}</label>
      <label>Profile Picture <input type="file" ref={this.fileInput} multiple/></label>
      <button disabled={!this.state.isStart}>Send</button>
    </form>
  </div>
  )
  }
  
}