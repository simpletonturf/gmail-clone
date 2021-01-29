import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
	const dispatch = useDispatch();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then(({ user }) => {
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					})
				);
			})
			.catch((err) => alert(err.message));
	};
	return (
		<div className="login">
			<div className="login__container">
				<div className="login__img">
					<img src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80" />
					<p>R-Mail</p>
				</div>
				<Button variant="contained" color="primary" onClick={signIn}>
					Login
				</Button>
			</div>
		</div>
	);
}

export default Login;
