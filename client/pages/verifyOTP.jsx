import React from 'react'

function verifyOTP() {
    return (
        <div>
            <form method='post' action="/verify_otp">
                <input type="text" />
                <button>Sumbit</button>
            </form>
        </div>
    )
}

export default verifyOTP