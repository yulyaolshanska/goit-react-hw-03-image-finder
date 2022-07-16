import { Component } from 'react';
import { Overlay, ModalBox } from './modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { imgSrc, imgAlt } = this.props;
    console.log(imgAlt);
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBox>
          <img src={imgSrc} alt={imgAlt} />
        </ModalBox>
      </Overlay>
    );
  }
}
