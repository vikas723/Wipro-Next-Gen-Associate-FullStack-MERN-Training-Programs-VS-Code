import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Table, Alert, Badge, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';


function Loans() {
    const [activeTab, setActiveTab] = useState('apply');
    const [loanTypes, setLoanTypes] = useState([
        { value: 'personal', label: 'Personal Loan', rate: 10.5 },
        { value: 'home', label: 'Home Loan', rate: 8.5 },
        { value: 'car', label: 'Car Loan', rate: 9.5 },
        { value: 'education', label: 'Education Loan', rate: 8.0 },
        { value: 'business', label: 'Business Loan', rate: 12.0 }
    ]);
    
    const [formData, setFormData] = useState({
        loanType: 'personal',
        amount: '',
        rate: 10.5,
        tenure: '',
        emiAmount: 0
    });

    const [emiResult, setEmiResult] = useState(null);
    const [myLoans, setMyLoans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        fetchMyLoans();
        fetchAccount();
    }, []);

    const fetchAccount = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/account');
            setAccount(response.data);
        } catch (err) {
            console.log('No account found');
        }
    };

    const fetchMyLoans = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/loans/my-loans');
            setMyLoans(response.data);
        } catch (err) {
            console.log('Failed to fetch loans');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'loanType') {
            const selected = loanTypes.find(t => t.value === value);
            setFormData({
                ...formData,
                loanType: value,
                rate: selected.rate
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const calculateEMI = async () => {
        if (!formData.amount || !formData.rate || !formData.tenure) {
            toast.error('Please fill all fields');
            return;
        }

        if (formData.amount < 1000) {
            toast.error('Minimum loan amount is ₹1000');
            return;
        }

        if (formData.tenure < 6 || formData.tenure > 360) {
            toast.error('Tenure must be between 6 and 360 months');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/loans/calculate-emi', {
                amount: parseFloat(formData.amount),
                rate: parseFloat(formData.rate),
                months: parseInt(formData.tenure)
            });
            setEmiResult(response.data);
            setFormData({ ...formData, emiAmount: response.data.emi });
            toast.success('EMI calculated successfully');
        } catch (error) {
            toast.error('Failed to calculate EMI');
        } finally {
            setLoading(false);
        }
    };

    const applyLoan = async () => {
        if (!account) {
            toast.error('Please create a bank account first');
            return;
        }

        if (!formData.amount || !formData.tenure || !formData.emiAmount) {
            toast.error('Please calculate EMI first');
            return;
        }

        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/loans/apply', {
                loanType: formData.loanType,
                amount: parseFloat(formData.amount),
                interestRate: parseFloat(formData.rate),
                tenure: parseInt(formData.tenure),
                emiAmount: formData.emiAmount
            });
            
            toast.success('Loan application submitted successfully!');
            setFormData({
                loanType: 'personal',
                amount: '',
                rate: 10.5,
                tenure: '',
                emiAmount: 0
            });
            setEmiResult(null);
            fetchMyLoans();
            setActiveTab('history');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to apply for loan');
        } finally {
            setLoading(false);
        }
    };

    const getStatusBadge = (status) => {
        const colors = {
            pending: 'warning',
            approved: 'success',
            rejected: 'danger'
        };
        return <Badge bg={colors[status]}>{status.toUpperCase()}</Badge>;
    };

    return (
        <Container>
            <Row className="mb-4">
                <Col>
                
                    <h2 className="fw-bold">Loan Services</h2>
                   

                    <p className="text-muted">Apply for loans and calculate EMI</p>
                </Col>
            </Row>

            {!account && (
                <Alert variant="info" className="mb-4">
                    <Alert.Heading>No Bank Account Found</Alert.Heading>
                    <p>
                        You need to create a bank account before applying for a loan. 
                        <Button variant="primary" size="sm" href="/dashboard" className="ms-3">
                            Create Account
                        </Button>
                    </p>
                </Alert>
            )}

            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-4">
                <Tab eventKey="apply" title="Apply for Loan">
                    <Row>
                        <Col md={6}>
                            <Card className="shadow-sm border-0">
                                <Card.Body className="p-4">
                                    <Card.Title className="mb-3 fw-bold">Loan Application</Card.Title>
                                    
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Loan Type</Form.Label>
                                            <Form.Select 
                                                name="loanType"
                                                value={formData.loanType}
                                                onChange={handleInputChange}
                                                disabled={!account}
                                            >
                                                {loanTypes.map(type => (
                                                    <option key={type.value} value={type.value}>
                                                        {type.label} ({type.rate}% p.a.)
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Loan Amount (₹)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="amount"
                                                placeholder="Enter amount"
                                                value={formData.amount}
                                                onChange={handleInputChange}
                                                disabled={!account}
                                                min="1000"
                                            />
                                            <Form.Text className="text-muted">
                                                Minimum: ₹1,000
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Interest Rate (%)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="rate"
                                                value={formData.rate}
                                                onChange={handleInputChange}
                                                disabled={!account}
                                                step="0.1"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Tenure (Months)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="tenure"
                                                placeholder="Enter tenure in months"
                                                value={formData.tenure}
                                                onChange={handleInputChange}
                                                disabled={!account}
                                                min="6"
                                                max="360"
                                            />
                                            <Form.Text className="text-muted">
                                                Min: 6 months, Max: 360 months (30 years)
                                            </Form.Text>
                                        </Form.Group>

                                        <div className="d-grid gap-2">
                                            <Button 
                                                variant="secondary" 
                                                onClick={calculateEMI}
                                                disabled={loading || !account}
                                                size="lg"
                                            >
                                                {loading ? 'Calculating...' : 'Calculate EMI'}
                                            </Button>
                                            <Button 
                                                variant="primary" 
                                                onClick={applyLoan}
                                                disabled={loading || !account || !emiResult}
                                                size="lg"
                                            >
                                                {loading ? 'Applying...' : 'Apply for Loan'}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>

                        {emiResult && (
                            <Col md={6}>
                                <Card className="shadow-sm border-0 bg-light">
                                    <Card.Body className="p-4">
                                        <Card.Title className="mb-3 fw-bold text-primary">EMI Calculation Result</Card.Title>
                                        <Table borderless className="mb-4">
                                            <tbody>
                                                <tr>
                                                    <td className="fw-bold">Loan Amount:</td>
                                                    <td className="text-end">₹{emiResult.loanAmount.toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Interest Rate:</td>
                                                    <td className="text-end">{emiResult.interestRate}%</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Tenure:</td>
                                                    <td className="text-end">{emiResult.tenure} months</td>
                                                </tr>
                                                <tr className="border-top">
                                                    <td className="fw-bold fs-5">Monthly EMI:</td>
                                                    <td className="text-end fs-5 text-primary fw-bold">₹{emiResult.emi.toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Total Interest:</td>
                                                    <td className="text-end text-danger">₹{emiResult.totalInterest.toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Total Amount:</td>
                                                    <td className="text-end">₹{emiResult.totalAmount.toLocaleString()}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Alert variant="info">
                                            <small>
                                                <strong>Note:</strong> This is an estimated calculation. Actual EMI may vary based on bank policies.
                                            </small>
                                        </Alert>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Tab>

                <Tab eventKey="history" title="My Loan History">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="mb-3 fw-bold">My Loan Applications</Card.Title>
                            <Table responsive striped hover>
                                <thead>
                                    <tr>
                                        <th>Loan ID</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Interest</th>
                                        <th>Tenure</th>
                                        <th>EMI</th>
                                        <th>Status</th>
                                        <th>Applied Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myLoans.length > 0 ? (
                                        myLoans.map(loan => (
                                            <tr key={loan.id}>
                                                <td><small className="text-muted">#{loan.id}</small></td>
                                                <td className="text-capitalize">{loan.loan_type}</td>
                                                <td className="fw-bold">₹{parseFloat(loan.amount).toLocaleString()}</td>
                                                <td>{loan.interest_rate}%</td>
                                                <td>{loan.tenure} months</td>
                                                <td>₹{parseFloat(loan.emi_amount).toLocaleString()}</td>
                                                <td>{getStatusBadge(loan.status)}</td>
                                                <td>{new Date(loan.created_at).toLocaleDateString()}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="text-center text-muted py-4">
                                                No loan applications yet. Apply for your first loan!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Loans;