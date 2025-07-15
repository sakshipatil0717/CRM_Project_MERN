import React from 'react'

function QuotationDetails() {
    return (
        <>
            {/* <h1>Quotation Details</h1> */}
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Quotation Details</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Quotation Details</li>
                        </ol>
                    </nav>
                </div>
                <form class="p-4 shadow rounded bg-light">
                    <div class="row g-3">
                        <div class="col-md-4">
                            <label for="quotationId" class="form-label fw-bold">
                                Quotation ID <span class="text-danger">*</span>
                            </label>
                            <input type="text" class="form-control" id="quotationId" name="quotationId" placeholder="Enter Quotation ID" required />
                        </div>

                        <div class="col-md-2">
                            <label for="srNo" class="form-label fw-bold">
                                Sr No <span class="text-danger">*</span>
                            </label>
                            <input type="number" class="form-control" id="srNo" name="srNo" placeholder="0" required />
                        </div>

                        <div class="col-md-6">
                            <label for="item" class="form-label fw-bold">
                                Item <span class="text-danger">*</span>
                            </label>
                            <input type="text" class="form-control" id="item" name="item" placeholder="Item name" required />
                        </div>

                        <div class="col-12">
                            <label for="description" class="form-label fw-bold">Description</label>
                            <textarea class="form-control" id="description" name="description" rows="3" placeholder="Enter item description..."></textarea>
                        </div>

                        <div class="col-md-4">
                            <label for="subTotal" class="form-label fw-bold">Sub Total</label>
                            <input type="number" step="0.01" class="form-control" id="subTotal" name="subTotal" placeholder="0.00" />
                        </div>

                        <div class="col-md-4">
                            <label for="discount" class="form-label fw-bold">Discount</label>
                            <input type="number" step="0.01" class="form-control" id="discount" name="discount" placeholder="0.00" />
                        </div>

                        <div class="col-md-4">
                            <label for="total" class="form-label fw-bold">Total</label>
                            <input type="number" step="0.01" class="form-control" id="total" name="total" placeholder="0.00" />
                        </div>

                        <div class="col-md-6">
                            <label for="gstAmount" class="form-label fw-bold">GST Amount</label>
                            <input type="number" step="0.01" class="form-control" id="gstAmount" name="gstAmount" placeholder="0.00" />
                        </div>

                        <div class="col-md-6">
                            <label for="billAmount" class="form-label fw-bold">Bill Amount</label>
                            <input type="number" step="0.01" class="form-control" id="billAmount" name="billAmount" placeholder="0.00" />
                        </div>

                        <div class="col-12 mt-3 text-end">
                            <button type="submit" class="btn btn-success btn-sm me-2 rounded-pill btn-sm px-4 py-2">Submit</button>
                            <button type="reset" class="btn btn-danger btn-sm rounded-pill btn-sm px-4 py-2">Cancel</button>
                        </div>
                    </div>
                </form>


            </main>

        </>
    )
}

export default QuotationDetails