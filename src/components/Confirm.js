import React, { Component } from 'react'

class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        console.log(values)

        return (
            <div className="row d-flex justify-content-center align-items-center mt-3">

                <div className="col-sm-4" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                    <h3 className="text-center" style={{ borderBottom: "1px dashed #e2e0e0" }}>Confirm User Details</h3>

                    <small className="form-text text-muted">First Name : {values.firstName}</small>
                    <small className="form-text text-muted">Last Name : {values.lastName}</small>
                    <small className="form-text text-muted">Email : {values.email}</small>
                    <small className="form-text text-muted">Occupation : {values.occupation}</small>
                    <small className="form-text text-muted">City : {values.city}</small>
                    <small className="form-text text-muted">Bio : {values.bio}</small>


                    <div className="d-flex justify-content-center" >

                        <button className="btn btn-secondary mb-3" onClick={this.back} style={{ borderRadius: "50px", minWidth: "100px" }}>Back</button>&nbsp; &nbsp;
                    <button className="btn btn-primary mb-3" onClick={this.continue} style={{ borderRadius: "50px", minWidth: "100px" }}>Confirm</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Confirm
