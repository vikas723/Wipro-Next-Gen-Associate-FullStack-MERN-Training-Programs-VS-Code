import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Form, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

function Dashboard({ user }) {
  const [account, setAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/account');
      setAccount(response.data);
      // Fetch transactions after getting account
      fetchTransactions();
    } catch (err) {
      if (err.response?.status !== 404) {
        setError('Failed to fetch account details');
      }
      setLoading(false);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/account/transactions');
      console.log('Transactions fetched:', response.data); // Debug log
      setTransactions(response.data);
    } catch (err) {
      console.error('Error fetching transactions:', err);
    } finally {
      setLoading(false);
    }
  };

  const createAccount = async () => {
    setActionLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/account/create');
      setAccount(response.data);
      setMessage('Account created successfully with ₹1000 welcome bonus!');
      toast.success('Account created successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create account');
      toast.error('Failed to create account');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeposit = async () => {
    if (!amount || amount <= 0) {
      setError('Please enter a valid amount');
      toast.error('Please enter a valid amount');
      return;
    }

    setActionLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/account/deposit', {
        amount: parseFloat(amount)
      });
      
      // Update account balance
      setAccount({ ...account, balance: response.data.balance });
      setMessage(`₹${amount} deposited successfully!`);
      toast.success(`₹${amount} deposited successfully!`);
      setAmount('');
      
      // Fetch updated transactions
      await fetchTransactions();
      
    } catch (err) {
      console.error('Deposit error:', err);
      setError(err.response?.data?.message || 'Deposit failed');
      toast.error(err.response?.data?.message || 'Deposit failed');
    } finally {
      setActionLoading(false);
    }
  };

  const handleWithdraw = async () => {
    if (!amount || amount <= 0) {
      setError('Please enter a valid amount');
      toast.error('Please enter a valid amount');
      return;
    }

    setActionLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/account/withdraw', {
        amount: parseFloat(amount)
      });
      
      // Update account balance
      setAccount({ ...account, balance: response.data.balance });
      setMessage(`₹${amount} withdrawn successfully!`);
      toast.success(`₹${amount} withdrawn successfully!`);
      setAmount('');
      
      // Fetch updated transactions
      await fetchTransactions();
      
    } catch (err) {
      console.error('Withdraw error:', err);
      setError(err.response?.data?.message || 'Withdrawal failed');
      toast.error(err.response?.data?.message || 'Withdrawal failed');
    } finally {
      setActionLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold">Welcome back, {user?.name}!</h2>
        </Col>
      </Row>

      {message && (
        <Alert variant="success" onClose={() => setMessage('')} dismissible>
          {message}
        </Alert>
      )}
      
      {error && (
        <Alert variant="danger" onClose={() => setError('')} dismissible>
          {error}
        </Alert>
      )}

      {!account ? (
        <Row>
          <Col md={6} className="mx-auto">
            <Card className="text-center shadow-lg border-0">
              <Card.Body className="p-5">
                <Card.Title as="h3" className="mb-4">Welcome to MyFin Bank</Card.Title>
                <Card.Text className="mb-4 text-muted">
                  You don't have a bank account yet. Create one now and get a ₹1000 welcome bonus!
                </Card.Text>
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={createAccount}
                  disabled={actionLoading}
                  className="px-5"
                >
                  {actionLoading ? 'Creating...' : 'Create Account'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <>
          <Row>
            <Col md={4}>
              <Card className="mb-3 shadow-sm border-0 bg-primary text-white">
                <Card.Body className="text-center p-4">
                  <Card.Title className="text-white-50 mb-3">Account Balance</Card.Title>
                  <h1 className="text-white mb-3 display-4">
                    ₹{parseFloat(account.balance).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </h1>
                  <Card.Text className="text-white-50">
                    Account: {account.account_number}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={8}>
              <Card className="mb-3 shadow-sm border-0">
                <Card.Body className="p-4">
                  <Card.Title className="mb-3 fw-bold">Quick Transactions</Card.Title>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="number"
                          placeholder="Enter amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          disabled={actionLoading}
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Button 
                        variant="success" 
                        className="w-100 mb-2 py-2 fw-bold"
                        onClick={handleDeposit}
                        disabled={actionLoading || !amount}
                      >
                        {actionLoading ? 'Processing...' : 'Deposit'}
                      </Button>
                    </Col>
                    <Col md={3}>
                      <Button 
                        variant="warning" 
                        className="w-100 mb-2 py-2 fw-bold"
                        onClick={handleWithdraw}
                        disabled={actionLoading || !amount}
                      >
                        {actionLoading ? 'Processing...' : 'Withdraw'}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                  <Card.Title className="mb-3 fw-bold">Recent Transactions</Card.Title>
                  {transactions.length > 0 ? (
                    <Table responsive striped hover className="align-middle">
                      <thead className="bg-light">
                        <tr>
                          <th>Transaction ID</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Date & Time</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map(tx => (
                          <tr key={tx.id || tx.transaction_id}>
                            <td>
                              <small className="text-muted">{tx.transaction_id}</small>
                            </td>
                            <td>
                              <span className={`badge bg-${
                                tx.type === 'deposit' ? 'success' : 
                                tx.type === 'withdrawal' ? 'danger' : 
                                tx.type === 'loan_credit' ? 'info' : 'secondary'
                              } bg-opacity-10 text-${
                                tx.type === 'deposit' ? 'success' : 
                                tx.type === 'withdrawal' ? 'danger' : 
                                tx.type === 'loan_credit' ? 'info' : 'secondary'
                              } px-3 py-2`}>
                                {tx.type.toUpperCase()}
                              </span>
                            </td>
                            <td className={
                              tx.type === 'deposit' || tx.type === 'loan_credit' 
                                ? 'text-success fw-bold' 
                                : 'text-danger fw-bold'
                            }>
                              {tx.type === 'deposit' || tx.type === 'loan_credit' ? '+' : '-'} 
                              ₹{parseFloat(tx.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                            </td>
                            <td>{formatDate(tx.created_at)}</td>
                            <td>
                              <span className="badge bg-success bg-opacity-10 text-success px-3 py-2">
                                Completed
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <div className="text-center text-muted py-4">
                      <p className="mb-0">No transactions yet. Make your first deposit!</p>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Dashboard;