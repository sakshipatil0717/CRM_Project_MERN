import React from 'react'

function Dashboard() {
    return (
        <>
            {/* <h1>Dashboard</h1> */}

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}


                <div class="container py-4">
                    {/* <!-- Summary Cards --> */}
                    <div class="row mb-4">
                        <div class="col-md-3">
                            <div class="card shadow-sm h-100">
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h4 class="mb-1 fw-bold text-muted">Leads</h4>
                                        <h5 class="mb-0">124</h5>
                                    </div>
                                    <i class="fas fa-user-plus fa-2x "></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card shadow-sm h-100">
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h4 class="mb-1 fw-bold text-muted">Customers</h4>
                                        <h5 class="mb-0">87</h5>
                                    </div>
                                    <i class="fas fa-users fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card shadow-sm h-100">
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h4 class="mb-1 fw-bold text-muted">Revenue</h4>
                                        <h5 class="mb-0">₹ 24,600</h5>
                                    </div>
                                    <i class="fas fa-dollar-sign fa-2x "></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card shadow-sm h-100">
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div>
                                        <h4 class="mb-1 fw-bold text-muted">Order Closed</h4>
                                        <h5 class="mb-0">12</h5>
                                    </div>
                                    <i class="fas fa-ticket-alt fa-2x text-dark"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Tables Row --> */}
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Recent Leads</h5>
                                    <div class="table-responsive" style={{ maxHeight: '300px' }}>
                                        <table class="table table-striped table-sm">
                                            <thead><tr><th>Name</th><th>Email</th><th>Status</th></tr></thead>
                                            <tbody>
                                                <tr><td>John Doe</td><td>john@example.com</td><td><span class="badge bg-info">New</span></td></tr>
                                                <tr><td>Jane Smith</td><td>jane@example.com</td><td><span class="badge bg-warning text-dark">Contacted</span></td></tr>
                                                <tr><td>Mike Ross</td><td>mike@example.com</td><td><span class="badge bg-success">Qualified</span></td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Top Customers</h5>
                                    <div class="table-responsive" style={{ maxHeight: '300px' }}>
                                        <table class="table table-hover table-sm">
                                            <thead><tr><th>Name</th><th>Revenue</th><th>Location</th></tr></thead>
                                            <tbody>
                                                <tr><td>Acme Corp</td><td>₹ 8,000</td><td>Kolhapur</td></tr>
                                                <tr><td>Beta LLC</td><td>₹ 6,500</td><td>Pune</td></tr>
                                                <tr><td>Delta Inc.</td><td>₹ 5,200</td><td>Mumbai</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Meetings and Activities --> */}
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Upcoming Meetings</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item"><i class="fas fa-calendar-alt me-2 text-primary"></i>Team Sync – July 11, 10:00 AM</li>
                                        <li class="list-group-item"><i class="fas fa-calendar-check me-2 text-success"></i>Client Demo – July 12, 2:00 PM</li>
                                        <li class="list-group-item"><i class="fas fa-user-clock me-2 text-warning"></i>Follow-up with Jane – July 13, 1:30 PM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Recent Activities</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item"><i class="fas fa-plus-circle text-success me-2"></i>Added new lead: John Doe</li>
                                        <li class="list-group-item"><i class="fas fa-edit text-info me-2"></i>Updated customer profile: Acme Corp</li>
                                        <li class="list-group-item"><i class="fas fa-times-circle text-danger me-2"></i>Closed ticket #4521</li>
                                        <li class="list-group-item"><i class="fas fa-phone-alt text-primary me-2"></i>Logged call with Beta LLC</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Tasks and Performance --> */}
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Tasks</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="checkbox" />
                                            Call back: Mike Ross
                                        </li>
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="checkbox" checked />
                                            Prepare sales report
                                        </li>
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="checkbox" />
                                            Schedule follow-up email
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Sales Performance</h5>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-success" style={{ width: '70%' }}>Q1</div>
                                    </div>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-warning text-dark" style={{ width: '50%' }}>Q2</div>
                                    </div>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-danger" style={{ width: '30%' }}>Q3</div>
                                    </div>
                                    <p class="text-muted mt-3">Charts coming soon...</p>
                                </div>
                            </div>
                        </div>


                        <div class="row mt-4">
                            <div class="col-md-12">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title">Employee Performance</h5>
                                        <table class="table table-bordered table-hover">
                                            <thead class="table-light">
                                                <tr>
                                                    <th>Employee</th>
                                                    <th>Leads Generated</th>
                                                    <th>Closed Deals</th>
                                                    <th>Response Time</th>
                                                    <th>Customer Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Amit Sharma</td>
                                                    <td>45</td>
                                                    <td>18</td>
                                                    <td>2 hrs</td>
                                                    <td>4.7 ⭐</td>
                                                </tr>
                                                <tr>
                                                    <td>Raj Patel</td>
                                                    <td>39</td>
                                                    <td>15</td>
                                                    <td>3 hrs</td>
                                                    <td>4.5 ⭐</td>
                                                </tr>
                                                <tr>
                                                    <td>Ravi Singh</td>
                                                    <td>51</td>
                                                    <td>22</td>
                                                    <td>1.5 hrs</td>
                                                    <td>4.8 ⭐</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row mb-4">
                            <div class="col-md-12">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title">Notifications</h5>
                                        <ul class="list-group">
                                            <li class="list-group-item"><i class="fas fa-envelope text-primary me-2"></i>New message from Sarah Lee</li>
                                            <li class="list-group-item"><i class="fas fa-bell text-warning me-2"></i>Follow-up task due today</li>
                                            <li class="list-group-item"><i class="fas fa-check-circle text-success me-2"></i>Lead converted: Delta Inc.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>







                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard