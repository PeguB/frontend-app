import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import  axios from "axios";
import { useNavigate} from "react-router-dom";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function validateForm() {
        return username.length > 0 && password.length > 0;
    }
    useEffect(() => {
        localStorage.clear();
    });

    async function handleSubmit(event) {
        event.preventDefault();;
        let user = {
            username,
            password,
        };
        await axios({
            method: 'post',
            data: user,
            url: 'http://localhost:8080/auth/login',
        }).then(function(response){
            if(response.status !== 200){
                console.log("Couldn't login")
            }else{
                let role = response.data.role
                const loggedUser ={
                    username,
                    role,
                    authenticated : true
                }
                localStorage.setItem("logged",JSON.stringify(loggedUser));
                navigate("/home")
            }
        })
            .catch((err)=> console.log(err));
    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label className = "label">Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>

        </div>
    );
}