import React, { Component } from 'react'
import PaymentModal from '../PaymentModal/PaymentModal';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }
    }
    _handleModal = (val) => {
        this.setState({ modal: val })
    }
    _returnModal = (val) => {
        this.setState({ modal: val })
    }
    render() {
        console.log(this.state.modal)
        return (
            <>
                {!this.state.modal ?
                    <div class="modal-dialog modal-dialog-centered" >
                        <div class="modal-content" style={{ backgroundColor: "#00C569" }}>
                            <div class="modal-header" style={{ border: "1px solid #00C569" }}>
                                <h5 class="modal-title" id="exampleModalLabel">Payment Alert!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body" style={{ border: "1px solid #00C569" }}>
                                <div>
                                    Continue Payment?
                                                </div>
                                <div>
                                    (Press YES to continue)
                                                </div>
                            </div>
                            <div class="modal-footer" style={{ border: "1px solid #00C569" }}>
                                <button type="button" class="btn" data-dismiss="modal" style={{ color: "#F7FE31" }}>LATER</button>
                                <button type="button"
                                    class="btn"
                                    style={{ color: "#F7FE31" }}
                                    onClick={() => this._handleModal(true)}
                                >YES</button>
                            </div>
                        </div>
                    </div>

                    : <PaymentModal _returnModal={this._returnModal} />}
            </>

        )
    }
}
