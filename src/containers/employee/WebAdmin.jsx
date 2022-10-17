import React from 'react'
import WebAdminLogin from '../../components/web-admin-form'

const WebAdmin = () => {
    return (
        <div className='web-admin'>
            <div className="if-statement if-open-statement">
                {"if ("}<p>web_admin</p>{") {"}
            </div>
            <WebAdminLogin />
            <p className="if-statement if-close-statement">
                {"}"}
            </p>
        </div>
    )
}

export default WebAdmin