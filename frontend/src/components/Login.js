import React, { useState } from 'react';

const Login = ({ handleUsernameSubmit, isActive }) => {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        handleUsernameSubmit(username);
    };

    return (
        <>
            {
                isActive && (<div>
                    <h2>Login</h2>
                    <form>
                        <label>
                            Username:
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>
                        <br />
                        <button type="button" onClick={handleLogin}>
                            Login
                        </button>
                    </form>
                </div>)
            }

        </>
    );
};

export default Login;