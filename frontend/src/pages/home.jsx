import React from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../App.css";

import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';



function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`);
    }


    return (
        <>
            <div className="navBar">
                <div style ={{display:"flex", alignItems:"center"}}>

                    <h3>Pratayaksh</h3>
                </div>
                <div style ={{display:"flex", alignItems:"center"}}>
                    <IconButton onClick={
                        () => {
                            navigate("/history")
                        }
                    }>
                        <RestoreIcon />
                        <p>History</p>
                    </IconButton>
                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>Logout</Button>
                </div>
            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call just Like Quality Education</h2>

                        <div style={{display: "flex", gap:"10px"}}>
                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant='outlined'/>
                        </div>
                        <Button onClick={handleJoinVideoCall} variant="contained">Join</Button>
                    </div>
                </div>
                <div className="rightPanel">
                    <img srcSet= "/logo_3.png" alt="" height={400} width={500}/>
                </div>
            </div>

        </>
    )
}


export default withAuth(HomeComponent);