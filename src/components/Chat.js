import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";

function Chat({scroll}) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg('') // empty the input box
    scroll.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <div className="mb-2 pb-5 justify-content: space-between;">
      <form onSubmit={sendMessage}>
        <Input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type..."
        />
        <Button type="submit" style={{ fontSize: '15px', borderRadius: '0', fontWeight: '600' }}>Send</Button>
      </form>
    </div>
  );
}

export default Chat;
