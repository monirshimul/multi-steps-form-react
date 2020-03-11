import React, { Component } from 'react'



class UserBasicDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values } = this.props;

        return (


            <div className="row d-flex justify-content-center align-items-center mt-3">

                <div className="col-sm-4" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                    <h3 className="text-center" style={{ borderBottom: "1px dashed #e2e0e0" }}>Enter User Details</h3>
                    <form >
                        <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input type="text" value={values.firstName} onChange={this.props.handleChange('firstName')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your First Name" />
                            <small className="form-text text-muted">Provide Your First Name</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text" value={values.lastName} onChange={this.props.handleChange('lastName')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Last Name" />
                            <small className="form-text text-muted">Provide Your Last Name</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" value={values.email} onChange={this.props.handleChange('email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                            <small className="form-text text-muted">Provide Your Email</small>
                        </div>

                        <div className="d-flex justify-content-center" >

                            <button className="btn btn-primary mb-3" onClick={this.continue} style={{ borderRadius: "50px", minWidth: "100px" }}>Next Page</button>
                        </div>

                    </form>
                </div>



            </div>
        )
    }
}

export default UserBasicDetails;
