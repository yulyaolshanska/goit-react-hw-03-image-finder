import { Component } from 'react';
import { Overlay, ModalBox } from './modal.styled';

export class Modal extends Component {
  state = {};

  render() {
    const { imgSrc } = this.props;
    // console.log(this.props);
    return (
      <Overlay>
        <ModalBox>
          hghghgh
          <img src={imgSrc} alt="" />
        </ModalBox>
      </Overlay>
    );
  }
}
