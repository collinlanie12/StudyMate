import React, { useEffect, useState, useContext } from 'react';
import API from '../../lib/API';
import DefaultProfile from "../../assets/images/default-profile-picture.png";
import AuthContext from "../../contexts/AuthContext";

function UserSettings() {
    const auth = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [is_tutor, setIs_tutor] = useState(0);
    const [timezone, setTimezone] = useState(-5);
    const [user_bio, setUser_bio] = useState("");


    function handleFormSubmit(e) {
        e.preventDefault();

        API.Users.update(auth.authToken, username, parseInt(is_tutor), parseInt(timezone), user_bio)
            .then(response => response.data)
            .then(user => console.log(user))
            .catch(err => console.log(err.message));
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <form onSubmit={handleFormSubmit}>
                        <h1 className="mb-5">Hello {auth.user ? auth.user.email : "Loading..."}</h1>
                        <label>Avatar:</label>
                        <img src={DefaultProfile} className="img-fluid ml-5" alt="Avatar" style={{ width: "200px", height: "200px", borderRadius: "8px" }} />
                        <div className='form-group mt-5'>
                            <label>What's your name?</label>
                            <input className="form-control" type="text" placeholder="Username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Are you a Tutor?</label>
                            <select className="form-control" name="is_tutor" onChange={e => setIs_tutor(e.target.value)} defaultValue="0">
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>Timezone</label>
                            <select className="form-control" name="timezone" onChange={e => setTimezone(e.target.value)} defaultValue="-5">
                                <option value="-12">UTC -12 (Baker Island Time)</option>
                                <option value="-11">UTC -11 (Samoa Standard Time)</option>
                                <option value="-10">UTC -10 (Hawaiian Standard Time)</option>
                                <option value="-9">UTC -9 (Alaska Standard Time)</option>
                                <option value="-8">UTC -8 (US Pacific Standard Time)</option>
                                <option value="-7">UTC -7 (US Mountain Standard Time)</option>
                                <option value="-6">UTC -6 (US Central Standard Time)</option>
                                <option value="-5">UTC -5 (US Eastern Standard Time)</option>
                                <option value="-4">UTC -4 (Atlantic Standard Time)</option>
                                <option value="-3">UTC -3 (Argentina Standard Time)</option>
                                <option value="-2">UTC -2 (South Georgia Standard Time)</option>
                                <option value="-1">UTC -1 (Azores Standard Time)</option>
                                <option value="0">UTC ±0 (Greenwich Standard Time)</option>
                                <option value="1">UTC +1 (Central European Standard Time)</option>
                                <option value="2">UTC +2 (Central Africa Standard Time)</option>
                                <option value="3">UTC +3 (Moscow Standard Time)</option>
                                <option value="4">UTC +4 (Gulf Standard Time)</option>
                                <option value="5">UTC +5 (Pakistan Standard Time)</option>
                                <option value="6">UTC +6 (Bangladesh Standard Time)</option>
                                <option value="7">UTC +7 (Christmas Island Standard Time)</option>
                                <option value="8">UTC +8 (China Standard Time)</option>
                                <option value="9">UTC +9 (Japan Standard Time)</option>
                                <option value="10">UTC +10 (Australian Eastern Standard Time)</option>
                                <option value="11">UTC +11 (Bougainville Standard Time)</option>
                                <option value="12">UTC +12 (New Zealand Standard Time)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Tell us about yourself!</label>
                            <textarea className="form-control" rows="3" placeholder="Bio" name="user_bio" value={user_bio} onChange={e => setUser_bio(e.target.value)}></textarea>
                        </div>
                        <button type="submit" className="btn btn-info">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserSettings;
