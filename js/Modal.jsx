import ModalStyle from "../css/Modal.css";
import React from "react/addons";
import classnames from "classnames";
import LayeredComponent from "./LayeredComponent";
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class Modal extends LayeredComponent {
  constructor(props) {
    super(props);
    this.renderLayer = this.renderLayer.bind(this);
    this.onOverlayClick = this.onOverlayClick.bind(this);
  }
  componentDidMount() {
    super.componentDidMount();
  }
  onOverlayClick() {
    if (this.props.overlayClosesModal) {
      this.props.onClose();
    }
  }
  renderLayer() {
    const modal = (
      <div className={ classnames("Modal", this.props.className) }>
        <div className="modal-overlay" onClick={ this.onOverlayClick } />
        <div className="modal-body">
          { this.props.children }
        </div>
      </div>
    )
    return (
      <ReactCSSTransitionGroup transitionName="ModalTransition" component="div">
        { this.props.opened && modal }
      </ReactCSSTransitionGroup>
    )
  }
  render() {
    return <div />
  }
}

Modal.defaultProps = {
  opened: false,
  overlayClosesModal: true,
}

Modal.propTypes = {
  opened: React.PropTypes.bool,
  onClose: React.PropTypes.func,
  overlayClosesModal: React.PropTypes.bool,
}