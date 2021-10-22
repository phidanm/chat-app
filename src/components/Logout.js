import { Button } from "react-bootstrap";
import {useHistory } from "react-router-dom";


function Logout() {
  const history = useHistory();
 

  function handleLogout() {
    history.push("/login");
  }

  return (
    <>
      <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%',  top: 0,  zIndex: '10'
        }}>
        <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
export default Logout;
