import React, { useState } from 'react'

const WebAdminLogin = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className='one-line'>
                <p className='anotate-web-admin'>web_admin</p>
                <p className='punctuation'>.</p>
                <p className='anotate-field'>email</p>
                <p className="punctuation">:</p>
                <input
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
            </label>
            <label className='one-line'>
                <p className='anotate-web-admin'>web_admin</p>
                <p className='punctuation'>.</p>
                <p className='anotate-field'>password</p>
                <p className="punctuation">:</p>
                <input
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                />
            </label>
            <label className="submit one-line">
                <p className='anotate-web-admin'>web_admin</p>
                <p className='punctuation'>.</p>
                <p className='anotate-field'>login</p>
                <p className="punctuation">=</p>
                <p className="punctuation">{"("}</p>
                <p className='anotate-web-admin'>event</p>
                <p className="punctuation">{")"}</p>
                <p className="punctuation">&#8658;</p>
                <input className="submit-btn" type="submit" value="submit" />
            </label>
        </form>
    )
}

export default WebAdminLogin