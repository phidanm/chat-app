import React, { useState, useEffect, useRef } from "react";
import Logout from "./Logout";
import Chat from "./Chat";
import { db, auth } from "../firebase";

function Dashboard() {
  const scroll=useRef()
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <>
      <div className="msgs">
        {" "}
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            {" "}
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>

      <Chat scroll={scroll}/>
      <div ref={scroll}></div>
      <Logout />
    </>
  );
}

export default Dashboard;
