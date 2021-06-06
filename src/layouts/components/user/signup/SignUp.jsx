import "./SignUp.css"

const SignUp=()=>{
    return(
        <div className="crate-user-container">
            <div className="create-user-header">
                <h4>
                   SignUp 
                </h4>
                <hr></hr>
            </div>
            <div className="create-user-form">
                <form action="">
                    <label for="user_otp">OTP</label>
                    <input type="text" name="user_otp" id="user-otp" />
                    <label for="user_password">Password</label>
                    <input type="password" name="user_password" id="user-password" />
                    <label for="conf_password">Confirm Password</label>
                    <input type="text" name="conf_password" id="conf-password" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default SignUp