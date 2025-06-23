import React, { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]); // Initialize as an empty array
    const url = "https://fakestoreapi.com/users"; // Use `https` instead of `http`

    // Fetch users from API
    const getUsers = async () => {
        try {
            const result = await fetch(url);
            const data = await result.json();
            setUsers(data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {users.length > 0 ? (
                users.map((user) => {
                    const { email, id, username, name: { firstname, lastname } } = user;
                    return (
                        <div key={id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                            <h2>Name: {firstname} {lastname}</h2>
                            <p>Username: {username}</p>
                            <p>Email: {email}</p>
                            <p>ID: {id}</p>
                        </div>
                    );
                })
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default Users;
