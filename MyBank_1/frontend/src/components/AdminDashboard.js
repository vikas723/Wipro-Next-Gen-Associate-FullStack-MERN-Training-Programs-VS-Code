import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Modal, Tabs, Tab, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

function AdminDashboard() {
    const [customers, setCustomers] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [pendingLoans, setPendingLoans] = useState([]);
    const [allLoans, setAllLoans] = useState([]);
    const [selectedLoan, setSelectedLoan] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('customers');
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setRefreshing(true);
            const [customersRes, accountsRes, pendingLoansRes, allLoansRes] = await Promise.all([
                axios.get('http://localhost:5000/api/admin/customers'),
                axios.get('http://localhost:5000/api/admin/accounts'),
                axios.get('http://localhost:5000/api/admin/loans/pending'),
                axios.get('http://localhost:5000/api/admin/loans/all')
            ]);
            
            setCustomers(customersRes.data.data || customersRes.data);
            setAccounts(accountsRes.data.data || accountsRes.data);
            setPendingLoans(pendingLoansRes.data.data || pendingLoansRes.data);
            setAllLoans(allLoansRes.data.data || allLoansRes.data);
        } catch (error) {
            console.error('Fetch error:', error);
            toast.error('Failed to fetch data: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const handleApproveLoan = async (loan) => {
        setActionLoading(true);
        try {
            const response = await axios.put(`http://localhost:5000/api/admin/loans/${loan.id}/approve`);
            
            // Show success message with details
            toast.success(
                <div>
                    <strong> Loan Approved!</strong><br />
                    Amount: ₹{parseFloat(loan.amount).toLocaleString()} credited to {loan.user_name}'s account<br />
                    <small>New Balance: ₹{response.data.data?.newBalance?.toLocaleString() || 'Updated'}</small>
                </div>, 
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                }
            );
            
            // Refresh all data
            await fetchData();
            setShowModal(false);
        } catch (error) {
            console.error('Approval error:', error);
            toast.error(
                <div>
                    <strong> Approval Failed</strong><br />
                    {error.response?.data?.message || 'Failed to approve loan'}<br />
                    <small className="text-muted">Please check if user has an account</small>
                </div>, 
                {
                    position: "top-right",
                    autoClose: 5000,
                }
            );
        } finally {
            setActionLoading(false);
        }
    };

    const handleRejectLoan = async (loan) => {
        if (!window.confirm(`Are you sure you want to reject ${loan.user_name}'s loan of ₹${parseFloat(loan.amount).toLocaleString()}?`)) {
            return;
        }
        
        setActionLoading(true);
        try {
            const response = await axios.put(`http://localhost:5000/api/admin/loans/${loan.id}/reject`);
            
            toast.info(
                <div>
                    <strong> Loan Rejected</strong><br />
                    Loan ID: #{loan.id} - {loan.user_name}
                </div>,
                {
                    position: "top-right",
                    autoClose: 4000,
                }
            );
            
            await fetchData();
            setShowModal(false);
        } catch (error) {
            console.error('Rejection error:', error);
            toast.error(error.response?.data?.message || 'Failed to reject loan');
        } finally {
            setActionLoading(false);
        }
    };

    const getStatusBadge = (status) => {
        const colors = {
            pending: 'warning',
            approved: 'success',
            rejected: 'danger'
        };
        return <Badge bg={colors[status] || 'secondary'}>{status?.toUpperCase() || 'UNKNOWN'}</Badge>;
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3">Loading dashboard data...</p>
            </div>
        );
    }

    return (
        <Container fluid>
            <Row className="mb-4">
                <Col>
                    <h2 className="fw-bold">Admin Dashboard</h2>
                    <p className="text-muted">
                        Manage customers, accounts, and loan applications
                        {refreshing && <Spinner animation="border" size="sm" className="ms-2" />}
                    </p>
                </Col>
            </Row>

            {/* Stats Cards */}
            <Row className="mb-4">
                <Col md={3}>
                    <Card className="shadow-sm border-0 bg-primary text-white">
                        <Card.Body>
                            <h5>Total Customers</h5>
                            <h2>{customers.length}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="shadow-sm border-0 bg-success text-white">
                        <Card.Body>
                            <h5>Total Accounts</h5>
                            <h2>{accounts.length}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="shadow-sm border-0 bg-warning text-white">
                        <Card.Body>
                            <h5>Pending Loans</h5>
                            <h2>{pendingLoans.length}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="shadow-sm border-0 bg-info text-white">
                        <Card.Body>
                            <h5>Total Loans</h5>
                            <h2>{allLoans.length}</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Refresh Button */}
            <Row className="mb-3">
                <Col className="text-end">
                    <Button 
                        variant="outline-primary" 
                        size="sm" 
                        onClick={fetchData}
                        disabled={refreshing}
                    >
                        {refreshing ? 'Refreshing...' : '↻ Refresh Data'}
                    </Button>
                </Col>
            </Row>

            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
                <Tab eventKey="customers" title="Customers">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="mb-3">Customer Management</Card.Title>
                            <Table responsive striped hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Account</th>
                                        <th>Balance</th>
                                        <th>Status</th>
                                        <th>Joined Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.length > 0 ? (
                                        customers.map(customer => (
                                            <tr key={customer.id}>
                                                <td>{customer.id}</td>
                                                <td className="fw-bold">{customer.name}</td>
                                                <td>{customer.email}</td>
                                                <td>
                                                    {customer.account_number ? 
                                                        <Badge bg="info">{customer.account_number}</Badge> : 
                                                        <Badge bg="secondary">No Account</Badge>
                                                    }
                                                </td>
                                                <td className="fw-bold">₹{customer.balance ? parseFloat(customer.balance).toLocaleString() : 0}</td>
                                                <td>
                                                    <Badge bg={customer.account_status === 'active' ? 'success' : 'secondary'}>
                                                        {customer.account_status || 'No Account'}
                                                    </Badge>
                                                </td>
                                                <td>{new Date(customer.created_at).toLocaleDateString()}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center text-muted py-4">
                                                No customers found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="accounts" title="Accounts">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="mb-3">All Bank Accounts</Card.Title>
                            <Table responsive striped hover>
                                <thead>
                                    <tr>
                                        <th>Account Number</th>
                                        <th>Customer</th>
                                        <th>Balance</th>
                                        <th>Status</th>
                                        <th>Created Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accounts.length > 0 ? (
                                        accounts.map(account => (
                                            <tr key={account.id}>
                                                <td><Badge bg="info">{account.account_number}</Badge></td>
                                                <td className="fw-bold">{account.user_name}</td>
                                                <td className="fw-bold text-primary">₹{parseFloat(account.balance).toLocaleString()}</td>
                                                <td>
                                                    <Badge bg={account.status === 'active' ? 'success' : 'secondary'}>
                                                        {account.status}
                                                    </Badge>
                                                </td>
                                                <td>{new Date(account.created_at).toLocaleDateString()}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center text-muted py-4">
                                                No accounts found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="pendingLoans" title="Pending Loans">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="mb-3">Loan Applications Pending Approval</Card.Title>
                            <Table responsive striped hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Customer</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Interest</th>
                                        <th>Tenure</th>
                                        <th>EMI</th>
                                        <th>Balance</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendingLoans.length > 0 ? (
                                        pendingLoans.map(loan => (
                                            <tr key={loan.id}>
                                                <td>{loan.id}</td>
                                                <td className="fw-bold">{loan.user_name}</td>
                                                <td className="text-capitalize">{loan.loan_type}</td>
                                                <td className="fw-bold">₹{parseFloat(loan.amount).toLocaleString()}</td>
                                                <td>{loan.interest_rate}%</td>
                                                <td>{loan.tenure} months</td>
                                                <td>₹{parseFloat(loan.emi_amount).toLocaleString()}</td>
                                                <td>₹{loan.balance ? parseFloat(loan.balance).toLocaleString() : 0}</td>
                                                <td>
                                                    <Button 
                                                        variant="primary" 
                                                        size="sm"
                                                        onClick={() => {
                                                            setSelectedLoan(loan);
                                                            setShowModal(true);
                                                        }}
                                                        disabled={actionLoading}
                                                    >
                                                        Review
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="9" className="text-center text-muted py-4">
                                                No pending loan applications
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="allLoans" title="All Loans">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="mb-3">All Loan Applications</Card.Title>
                            <Table responsive striped hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Customer</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Applied Date</th>
                                        <th>Approved Date</th>
                                        <th>Approved By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allLoans.length > 0 ? (
                                        allLoans.map(loan => (
                                            <tr key={loan.id}>
                                                <td>{loan.id}</td>
                                                <td className="fw-bold">{loan.user_name}</td>
                                                <td className="text-capitalize">{loan.loan_type}</td>
                                                <td>₹{parseFloat(loan.amount).toLocaleString()}</td>
                                                <td>{getStatusBadge(loan.status)}</td>
                                                <td>{new Date(loan.created_at).toLocaleDateString()}</td>
                                                <td>{loan.approved_date ? new Date(loan.approved_date).toLocaleDateString() : '-'}</td>
                                                <td>{loan.approver_name || '-'}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="text-center text-muted py-4">
                                                No loan applications found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>

            {/* Review Loan Modal */}
            <Modal show={showModal} onHide={() => !actionLoading && setShowModal(false)} size="lg" backdrop="static">
                <Modal.Header closeButton={!actionLoading}>
                    <Modal.Title>Review Loan Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedLoan && (
                        <div className="p-3">
                            <Row>
                                <Col md={6}>
                                    <p><strong>Customer:</strong> {selectedLoan.user_name}</p>
                                    <p><strong>Email:</strong> {selectedLoan.email}</p>
                                    <p><strong>Loan Type:</strong> <span className="text-capitalize">{selectedLoan.loan_type}</span></p>
                                    <p><strong>Amount:</strong> <span className="fw-bold text-primary">₹{parseFloat(selectedLoan.amount).toLocaleString()}</span></p>
                                </Col>
                                <Col md={6}>
                                    <p><strong>Interest Rate:</strong> {selectedLoan.interest_rate}%</p>
                                    <p><strong>Tenure:</strong> {selectedLoan.tenure} months</p>
                                    <p><strong>EMI Amount:</strong> ₹{parseFloat(selectedLoan.emi_amount).toLocaleString()}</p>
                                    <p><strong>Current Balance:</strong> ₹{selectedLoan.balance ? parseFloat(selectedLoan.balance).toLocaleString() : 0}</p>
                                </Col>
                            </Row>
                            
                            <hr />
                            
                            <div className="text-center">
                                <p className="fw-bold fs-5">Approve this loan?</p>
                                <p className="text-muted">Amount will be credited to customer's account immediately.</p>
                            </div>

                            {actionLoading && (
                                <div className="text-center mt-3">
                                    <Spinner animation="border" variant="primary" />
                                    <p className="mt-2">Processing...</p>
                                </div>
                            )}
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="danger" 
                        onClick={() => handleRejectLoan(selectedLoan)}
                        disabled={actionLoading}
                    >
                        {actionLoading ? 'Processing...' : 'Reject Loan'}
                    </Button>
                    <Button 
                        variant="success" 
                        onClick={() => handleApproveLoan(selectedLoan)}
                        disabled={actionLoading}
                    >
                        {actionLoading ? 'Processing...' : 'Approve Loan & Credit Amount'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default AdminDashboard;