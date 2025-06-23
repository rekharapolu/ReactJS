import React, { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const url = "https://fakestoreapi.com/users";

    const getUsers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
    };

    // Call the getUsers function when the component mounts
    useEffect(() => {
        getUsers();
    }, []);

    // Render the users or show a loading message if users is empty
    return (
        <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-50">
            {users.length === 0 ? (
                <h2 className="text-center text-gray-500 mt-5">Loading...</h2>
            ) : (
                users.map(({ id, email, username, name: { firstname, lastname } }) => {
                    return (
                        <div key={id} className="bg-purple-100 border border-gray-300 rounded-lg w-64 p-6 text-center 
                        shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">{firstname} {lastname}</h2>
                            <p className="text-gray-600 mb-2"><strong>Username:</strong> {username}</p>
                            <p className="text-gray-600 mb-2"><strong>Email:</strong> {email}</p>
                            <p className="text-gray-600"><strong>ID:</strong> {id}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Users;
