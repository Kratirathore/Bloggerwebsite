import React, { useEffect, useState } from 'react'
import '../App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Profile() {
    const [data, setMydata] = useState([])
    const fetchuser = async () => {
        const response = await fetch('http://localhost:5000/api/userlogin/getuserdata', {
            method: "GET",
            headers: {
                "content-type": "application/json",
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json()
        setMydata(json)
    }
    useEffect(() => {
        fetchuser()
    }, [])
    return (
        <>
            <div className="card my-3" style={{width: "25rem"}}>
                {data.image ? <img src={data.image} alt="" className='img-fluid my-2' style={{height:'121px',width:'125px',borderRadius:"70px"}} /> : <AccountCircleIcon className='my-2' style={{ height: '14rem', width: '17rem' }} />}
                <div className="card-body" style={{borderTop:"inherit"}}>
                <div style={{width:'22.9rem',height:'16rem'}}>
                    <h3 className='text-center'>Your Info</h3>
                    <div className="container" >
                        <div className="row justify-content-between my-5">
                            <div className="col-4 details">
                                <h6>&nbsp;Name:</h6>
                                <span>&nbsp;{data.name}</span>
                            </div>
                            <div className="col-4 details">
                                <h6>&nbsp;Username:</h6>
                                <span>&nbsp;{data.username}</span>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between my-5">
                            <div className="col-4 details">
                                <h6>&nbsp;Email:</h6>
                                <span>&nbsp;{data.email}</span>
                            </div>
                            <div className="col-4 details">
                                <h6>&nbsp;Mobile Number :</h6>
                                <span>&nbsp;{data.mobile}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <div className='profilecard'>
                <div className="profilepic">
                    {data.image ? <img src={data.image} alt="" className='img-fluid' id='imagepic' /> : <AccountCircleIcon style={{ height: '14rem', width: '17rem' }} />}
                </div>
                <div className="profiledetails">
                    <h3 className='text-center'>Your Info</h3>
                    <div className="container" style={{ marginTop: "60px" }}>
                        <div className="row justify-content-between my-5">
                            <div className="col-4 details">
                                <h6>&nbsp;Name:</h6>
                                <span>&nbsp;{data.name}</span>
                            </div>
                            <div className="col-4 details">
                                <h6>&nbsp;Username:</h6>
                                <span>&nbsp;{data.username}</span>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{ marginTop: '135px' }}>
                        <div className="row justify-content-between my-5">
                            <div className="col-4 details">
                                <h6>&nbsp;Email:</h6>
                                <span>&nbsp;{data.email}</span>
                            </div>
                            <div className="col-4 details">
                                <h6>&nbsp;Mobile Number :</h6>
                                <span>&nbsp;{data.mobile}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Profile