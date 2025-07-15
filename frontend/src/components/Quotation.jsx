import React from 'react';
// import { Form, Input, DatePicker, Select, InputNumber, Button, Row, Col, Card } from 'antd';

// const { Option } = Select;

// function Quotation() {
//     const [form] = Form.useForm();
//     const [subtotal, setSubtotal] = useState(0);
//     const [discount, setDiscount] = useState(0);
//     const [gst, setGst] = useState(0);

//     const total = subtotal - discount;
//     const billAmount = total + gst;

//     const handleValuesChange = (_, allValues) => {
//         setSubtotal(allValues.subtotal || 0);
//         setDiscount(allValues.discount || 0);
//         setGst(allValues.gst || 0);
//     };

//     const onFinish = (values) => {
//         const finalData = {
//             ...values,
//             total: total.toFixed(2),
//             billAmount: billAmount.toFixed(2),
//         };
//         console.log('Submitted:', finalData);
//     };

//     return (
//         <>
//             <main id="main" className="main">
//                 <div className="pagetitle">
//                     <h1>Quotation</h1>
//                     <nav>
//                         <ol className="breadcrumb">
//                             <li className="breadcrumb-item"><a href="#">Home</a></li>
//                             <li className="breadcrumb-item">Forms</li>
//                             <li className="breadcrumb-item active">Quotation</li>
//                         </ol>
//                     </nav>
//                 </div>

//                 {/* Card wrapper for bordered form */}
//                 <Card title="Quotation Entry" bordered style={{ marginTop: 20, borderRadius: 8 }}>
//                     <Form
//                         form={form}
//                         layout="vertical"
//                         onFinish={onFinish}
//                         onValuesChange={handleValuesChange}
//                     >
//                         {/* Row 1: Quotation Date, Quotation No, Customer */}
//                         <Row gutter={16}>
//                             <Col span={8}>
//                                 <Form.Item label="Quotation Date" name="quotationDate" rules={[{ required: true }]}>
//                                     <DatePicker style={{ width: '100%' }} />
//                                 </Form.Item>
//                             </Col>
//                             <Col span={8}>
//                                 <Form.Item label="Quotation No" name="quotationNo" rules={[{ required: true }]}>
//                                     <Input placeholder="Enter quotation number" />
//                                 </Form.Item>
//                             </Col>
//                             <Col span={8}>
//                                 <Form.Item label="Customer" name="customer" rules={[{ required: true }]}>
//                                     <Select placeholder="Select customer">
//                                         <Option value="customer1">Customer 1</Option>
//                                         <Option value="customer2">Customer 2</Option>
//                                         <Option value="customer3">Customer 3</Option>
//                                     </Select>
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         {/* Row 2: Subtotal, Discount, Total */}
//                         <Row gutter={16}>
//                             <Col span={8}>
//                                 <Form.Item label="Subtotal" name="subtotal" rules={[{ required: true }]}>
//                                     <InputNumber
//                                         style={{ width: '100%' }}
//                                         min={0}
//                                         formatter={(val) => `₹ ${val}`}
//                                         parser={(val) => val.replace(/₹\s?|(,*)/g, '')}
//                                     />
//                                 </Form.Item>
//                             </Col>
//                             <Col span={8}>
//                                 <Form.Item label="Discount" name="discount">
//                                     <InputNumber
//                                         style={{ width: '100%' }}
//                                         min={0}
//                                         formatter={(val) => `₹ ${val}`}
//                                         parser={(val) => val.replace(/₹\s?|(,*)/g, '')}
//                                     />
//                                 </Form.Item>
//                             </Col>
//                             <Col span={8}>
//                                 <Form.Item label="Total">
//                                     <Input value={`₹ ${total.toFixed(2)}`} readOnly />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         {/* Row 3: GST Amount, Bill Amount */}
//                         <Row gutter={16}>
//                             <Col span={8}>
//                                 <Form.Item label="GST Amount" name="gst">
//                                     <InputNumber
//                                         style={{ width: '100%' }}
//                                         min={0}
//                                         formatter={(val) => `₹ ${val}`}
//                                         parser={(val) => val.replace(/₹\s?|(,*)/g, '')}
//                                     />
//                                 </Form.Item>
//                             </Col>
//                             <Col span={8}>
//                                 <Form.Item label="Bill Amount">
//                                     <Input value={`₹ ${billAmount.toFixed(2)}`} readOnly />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Form.Item>
//                             <Button type="primary" htmlType="submit">
//                                 Submit Quotation
//                             </Button>
//                         </Form.Item>
//                     </Form>
//                 </Card>
//             </main>
//         </>
//     );
// }

// export default Quotation;






function Quotation() {
    return (
        <>
            {/* <h1>Quotation</h1> */}

            <main id='main' className='main'>

                <div className="pagetitle">
                    <h1>Quotation</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Quotation</li>
                        </ol>
                    </nav>
                </div>

                <div className="container ">
                    <form className="card shadow p-4 rounded">
                        {/* First Row */}
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <label htmlFor="quotationDate" className="form-label fw-bold">
                                    Quotation Date <span className="text-danger">*</span>
                                </label>
                                <input type="date" className="form-control" id="quotationDate" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="quotationNo" className="form-label fw-bold">
                                    Quotation No <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="quotationNo"
                                    placeholder="Enter quotation number"
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="customer" className="form-label fw-bold">
                                    Customer <span className="text-danger">*</span>
                                </label>
                                <select className="form-select" id="customer" required>
                                    <option value="" disabled selected>
                                        Select customer
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <label htmlFor="subtotal" className="form-label fw-bold">
                                    Subtotal
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="number" className="form-control" id="subtotal" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="discount" className="form-label fw-bold">
                                    Discount
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="number" className="form-control" id="discount" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="total" className="form-label fw-bold">
                                    Total
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="text" className="form-control" id="total" value="0.00" />
                                </div>
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <label htmlFor="gstAmount" className="form-label fw-bold">
                                    GST Amount
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="number" className="form-control" id="gstAmount" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="billAmount" className="form-label fw-bold">
                                    Bill Amount
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="text" className="form-control" id="billAmount" value="0.00"  />
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

export default Quotation