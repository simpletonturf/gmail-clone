import {
	ArrowDropDown,
	ChevronLeft,
	ChevronRight,
	Inbox,
	KeyboardHide,
	LocalOffer,
	MoreVert,
	People,
	Redo,
	Settings,
} from "@material-ui/icons";
import { IconButton, Checkbox } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		db.collection("emails")
			.orderBy("timeStamp", "desc")
			.onSnapshot((snapshot) =>
				setEmails(
					snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
				)
			);
	}, []);

	return (
		<div className="emailList">
			<div className="emailList__settings">
				<div className="emailList__settings__left">
					<Checkbox />
					<IconButton>
						<ArrowDropDown />
					</IconButton>
					<IconButton>
						<Redo />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className="emailList__settings__right">
					<IconButton>
						<ChevronLeft />
					</IconButton>
					<IconButton>
						<ChevronRight />
					</IconButton>
					<IconButton>
						<KeyboardHide />
					</IconButton>
					<IconButton>
						<Settings />
					</IconButton>
				</div>
			</div>

			<div className="emailList__sections">
				<Section Icon={Inbox} title="Primary" color="red" selected />
				<Section Icon={People} title="Social" color="#1A73E8" />
				<Section Icon={LocalOffer} title="Promotions" color="green" />
			</div>

			<div className="emailList__list">
				{emails.map(({ id, data: { to, subject, message, timeStamp } }) => (
					<EmailRow
						id={id}
						key={id}
						title={to}
						subject={subject}
						description={message}
						time={new Date(timeStamp?.seconds * 1000).toUTCString()}
					/>
				))}
			</div>
		</div>
	);
}

export default EmailList;
