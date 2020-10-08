import React, { useEffect, useState, useContext } from 'react';
import API from '../../lib/API';
import AuthContext from "../../contexts/AuthContext";

function PostForm() {
    const auth = useContext(AuthContext);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [link, setLink] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState();
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState();

    useEffect(() => {
        API.Subjects.getAll(auth.authToken)
            .then(response => {
                console.log(response.data);
                setSubjects(response.data);
            })

    }, []);


    function handleFormSubmit(e) {
        e.preventDefault();

        API.Posts.create(auth.authToken, title, content, time, selectedSubject, date, link)
            .then(response => response.data)
            .then(user => console.log(user))
            .catch(err => console.log(err.message));

        alert("Your post has been created!");
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <form onSubmit={handleFormSubmit}>
                        <div className='form-group mt-5'>
                            <label>What is the title of your post?</label>
                            <input className="form-control" type="text" placeholder="Post Title" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Tell me what you're posting about!</label>
                            <textarea className="form-control" rows="3" type="text" placeholder="Post Body" name="content" value={content} onChange={e => setContent(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>What subject is this for?</label>
                            <select className="form-control" name="selectedSubject" onChange={e => setSelectedSubject(e.target.value)} defaultValue="1">
                            {subjects.map(subject => (
                            <>
                                <option key={"Subject-" + subject.id} value={subject.id}>{subject.subject}</option>
                            </>
                            ))}
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>Where are you hosting this event?</label>
                            <input className="form-control" type="text" placeholder="URL for meeting" name="link" value={link} onChange={e => setLink(e.target.value)} />
                        </div>
                        <div className="form-group">
                        <label>What day are you hosting this event?</label>
                        <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>What time is this event starting?</label>
                            <select className="form-control" name="time" onChange={e => setTime(e.target.value)} defaultValue="12">
                                <option value="0">12:00am</option>
                                <option value="1">1:00am</option>
                                <option value="2">2:00am</option>
                                <option value="3">3:00am</option>
                                <option value="4">4:00am</option>
                                <option value="5">5:00am</option>
                                <option value="6">6:00am</option>
                                <option value="7">7:00am</option>
                                <option value="8">8:00am</option>
                                <option value="9">9:00am</option>
                                <option value="10">10:00am</option>
                                <option value="11">11:00am</option>
                                <option value="12">12:00pm</option>
                                <option value="13">1:00pm</option>
                                <option value="14">2:00pm</option>
                                <option value="15">3:00pm</option>
                                <option value="16">4:00pm</option>
                                <option value="17">5:00pm</option>
                                <option value="18">6:00pm</option>
                                <option value="19">7:00pm</option>
                                <option value="20">8:00pm</option>
                                <option value="21">9:00pm</option>
                                <option value="22">10:00pm</option>
                                <option value="23">11:00pm</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-info">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostForm;
