import React from "react";
import API from "../API";
import AdditionalInfo from "./AdditionalInfo";
// import './cards/ModalCard'
// import AddTask from "./AddTask";


export default class Modal extends React.Component {
  state = {
    isOpen: false,
    info: this.props.info,
    additionalInfo: {},
  }
  _api = new API()

  getAdditional(id) {
    this._api.getCharacter(id).then(data => this.setState({additionalInfo: data}))
  }

  close(e) {
    if(e.target.className === 'modal' || e.target.className === 'cancel-button')
    {this.setState({isOpen: false})}
  }

  render() {
    const card = <>
            <img className="card__character-photo" src={this.state.info.image} alt="character"/>
            <p>{this.state.info.name}</p>
          </>
    return (
      <React.Fragment>
        {/* <button className="new-task-button" onClick={() => this.setState({isOpen: true})}>New...</button> */}
          <div className='card' onClick={() => {
                                                this.setState({isOpen: true})
                                                this.getAdditional(this.state.info.id)}}>{card}</div>
        { this.state.isOpen && (
            <div className="modal" onClick={(e) => this.close(e)}>
              <div className="modal-body">
                <button className="cancel-button" onClick={(e) => this.close(e)}>&times;</button>
                {/* {card} */}
                {this.state.additionalInfo.name ? <AdditionalInfo info={this.state.additionalInfo}/> : null}
              </div>
            </div>
          )
        }
      </React.Fragment>
    )
  }
}