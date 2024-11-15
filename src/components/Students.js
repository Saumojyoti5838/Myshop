import React, { useEffect, useState } from "react";
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

function Customer() {
    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        Load();
    }, []);

    async function Load() {
        try {
            const result = await axios.get("http://localhost:8000/customer/");
            setCustomers(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function addCustomer(event) {
        event.preventDefault();
        try {
            const csrfToken = getCookie('csrftoken');
            await axios.post("http://localhost:8000/customer/", {
                name: name,
                address: address,
                phone: phone,
                gender: gender
            }, {
                headers: {
                    'X-CSRFTOKEN': csrfToken
                }
            });
            alert("Customer Registration Successfully");
            setId("");
            setName("");
            setAddress("");
            setPhone("");
            setGender("");
            Load();
        } catch (err) {
            alert("Customer Registration Failed");
        }
    }

    async function editCustomer(customer) {
        setName(customer.name);
        setAddress(customer.address);
        setPhone(customer.phone);
        setGender(customer.gender);
        setId(customer.id);
    }

    async function deleteCustomer(id) {
        try {
            await axios.delete(`http://localhost:8000/customer/${id}/`);
            alert("Customer deleted Successfully");
            setId("");
            setName("");
            setAddress("");
            setPhone("");
            setGender("");
            Load();
        } catch (error) {
            console.error("Failed to delete customer:", error);
            alert("Customer deletion failed");
        }
    }

    async function update(event) {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8000/customer/${id}/`, {
                name: name,
                address: address,
                phone: phone,
                gender: gender
            });
            alert("Customer Updated");
            setId("");
            setName("");
            setAddress("");
            setPhone("");
            setGender("");
            Load();
        } catch (err) {
            alert("Customer Update Failed");
        }
    }

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    return (
        <div>
            <h1  style={{ textAlign: 'center' }}>Customer Details</h1>
            <div className="container mt-4">
                <form>
                    <div className="form-group">
                        <label>Customer Name</label>
                        <input type="text" className="form-control" id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" id="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" id="phone"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select className="form-control" id="gender"
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                            required
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <button className="btn btn-primary mt-4" onClick={addCustomer}>Login</button>
                        <button className="btn btn-warning mt-4" onClick={update}>Update</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Customer;
