import React from 'react'

function AmcContractsDetails() {
    return (
        <>
            {/* <h1>Amc Contracts Details</h1> */}

            <main id='main' className='main'>

                <div className="pagetitle">
                    <h1>AMC Contracts Details</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">AMC Contracts Details</li>
                        </ol>
                    </nav>
                </div>

                <div className="container">
                    <form className="card shadow p-4 rounded">
                        {/* First Row: Sr. No and AMC ID */}
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <label htmlFor="srNo" className="form-label fw-bold">
                                    Sr. No <span className="text-danger">*</span>
                                </label>
                                <input type="number" className="form-control" id="srNo" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="amcId" className="form-label fw-bold">
                                    AMC ID <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" id="amcId" required />
                            </div>
                        </div>

                        {/* Second Row: Term and Description */}
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <label htmlFor="term" className="form-label fw-bold">
                                    Term <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" id="term" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="description" className="form-label fw-bold">
                                    Description
                                </label>
                                <input type="text" className="form-control" id="description" />
                            </div>
                        </div>

                        {/* Financial Fields */}
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <label htmlFor="subtotal" className="form-label fw-bold">Subtotal</label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="number" className="form-control" id="subtotal" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="discount" className="form-label fw-bold">Discount</label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="number" className="form-control" id="discount" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="total" className="form-label fw-bold">Total</label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="text" className="form-control" id="total" value="0.00" />
                                </div>
                            </div>
                        </div>

                        {/* GST and Bill Amount */}
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <label htmlFor="gstAmount" className="form-label fw-bold">GST Amount</label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="number" className="form-control" id="gstAmount" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="billAmount" className="form-label fw-bold">Bill Amount</label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="text" className="form-control" id="billAmount" value="0.00" />
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-success me-2 rounded-pill btn-sm px-4 py-2">Save</button>
                            <button type="button" className="btn btn-danger rounded-pill btn-sm px-4 py-2">Cancel</button>
                        </div>
                    </form>
                </div>

            </main>





        </>
    )
}

export default AmcContractsDetails