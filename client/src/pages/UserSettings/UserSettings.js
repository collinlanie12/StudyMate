import React, { Component } from 'react';

class UserSettings extends Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <form>
                            <label for="Avatar">Avatar:</label>
                            <img src="https://via.placeholder.com/350" className="img-fluid ml-5" alt="Avatar" />
                            <div className='form-group mt-5'>
                                <label for="Username">What's your name?</label>
                                <input className="form-control" type="text" placeholder="Username" />
                            </div>
                            <div className='form-group'>
                                <label for="Student-Or-Tutor">Are you a Student or a Tutor?</label>
                                <select className="form-control">
                                    <option selected>Student</option>
                                    <option>Tutor</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label for="Timezone">Timezone</label>
                                <select className="form-control">
                                    <option>UTC -12 (Baker Island Time)</option>
                                    <option>UTC -11 (Samoa Standard Time)</option>
                                    <option>UTC -10 (Hawaiian Standard Time)</option>
                                    <option>UTC -9 (Alaska Standard Time)</option>
                                    <option>UTC -8 (US Pacific Standard Time)</option>
                                    <option>UTC -7 (US Mountain Standard Time)</option>
                                    <option>UTC -6 (US Central Standard Time)</option>
                                    <option selected>UTC -5 (US Eastern Standard Time)</option>
                                    <option>UTC -4 (Atlantic Standard Time)</option>
                                    <option>UTC -3 (Argentina Standard Time)</option>
                                    <option>UTC -2 (South Georgia Standard Time)</option>
                                    <option>UTC -1 (Azores Standard Time)</option>
                                    <option>UTC ±0 (Greenwich Standard Time)</option>
                                    <option>UTC +1 (Central European Standard Time)</option>
                                    <option>UTC +2 (Central Africa Standard Time)</option>
                                    <option>UTC +3 (Moscow Standard Time)</option>
                                    <option>UTC +4 (Gulf Standard Time)</option>
                                    <option>UTC +5 (Pakistan Standard Time)</option>
                                    <option>UTC +6 (Bangladesh Standard Time)</option>
                                    <option>UTC +7 (Christmas Island Standard Time)</option>
                                    <option>UTC +8 (China Standard Time)</option>
                                    <option>UTC +9 (Japan Standard Time)</option>
                                    <option>UTC +10 (Australian Eastern Standard Time)</option>
                                    <option>UTC +11 (Bougainville Standard Time)</option>
                                    <option>UTC +12 (New Zealand Standard Time)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="Bio">Tell us about yourself!</label>
                                <textarea className="form-control" rows="3" placeholder="Bio"></textarea>
                            </div>
                            <button type="submit" className="btn btn-info">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserSettings;
