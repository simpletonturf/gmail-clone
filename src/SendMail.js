import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";
import "./SendMail.css";

function SendMail() {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (formData) => {
		db.collection("emails").add({
			to: formData.to,
			subject: formData.subject,
			message: formData.message,
			timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		dispatch(closeSendMessage());
	};
	const dispatch = useDispatch();

	return (
		<div className="sendMail">
			<div className="sendMail__header">
				<h3>New Message</h3>
				<Close
					onClick={() => dispatch(closeSendMessage())}
					className="sendMail__close"
				/>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="to"
					placeholder="To"
					type="email"
					ref={register({ required: true })}
				/>
				{errors.to && (
					<p className="sendMail__errors">Please Enter Receipient!</p>
				)}
				<input
					name="subject"
					placeholder="Subject"
					type="text"
					ref={register({ required: true })}
				/>
				{errors.subject && (
					<p className="sendMail__errors">Please Enter Subject!</p>
				)}
				<textarea
					name="message"
					className="sendMail__message"
					type="text"
					ref={register({ required: true })}
				/>
				{errors.message && <p className="sendMail__errors">Body is empty.</p>}

				<div className="sendMail__options">
					<Button
						variant="contained"
						color="primary"
						type="submit"
						className="sendMail__send">
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
