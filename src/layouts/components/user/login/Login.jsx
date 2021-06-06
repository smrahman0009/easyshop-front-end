import "./Login.css"
import {useHistory } from "react-router";

const Login =()=>{
    const history = useHistory()
    const accountCrate=()=>{
        document.querySelector(".login-container").classList.toggle("login-container-show")
        return history.push("/account/create/")
    }
    return(
        <div className="login-container">
            <div className="login-header"><h5>Login</h5></div>
            <div className="login-form">
            <form>
                <label for="mail_phone_num">Email/Phone Number</label>
                <input type="text" id="mail-phone-num" name="mail_phone_num"/>
                <label for="user-password">Password</label>
                <input type="password" id="user-password" name="user_password"/>
                <input type="submit" value="Submit"/>
            </form>
            <div className="login-extra">
                <p>
                Don't have an account? <a href=""onClick={accountCrate}>Sign up</a>
                </p>
                <p>
                    <a href="">
                    Forgot Password
                    </a>
                </p>
            </div>   
            </div>
        </div>
    )
}

export default Login