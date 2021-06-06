import "./Create.css"
import {useHistory} from "react-router-dom"

const Create=()=>{
    const history = useHistory()
    return(
        <div className="crate-user-container">
            <div className="create-user-header">
                <h4>
                    Create Your EasyShop Account
                </h4>
                <hr></hr>
            </div>
            <div className="create-user-form">
                <form action="">
                    <label for="mobile_number">Mobile Number</label>
                    <input type="text" name="mobile_number" id="mobile-number" />
                    <label for="first_name">First Name</label>
                    <input type="text" name="first_name" id="first-name" />
                    <label for="last_name">Last Name</label>
                    <input type="text" name="last_name" id="last-name" />
                    <input type="submit" value="Submit" onClick={()=>history.push("/user/auth/signup")} />
                </form>
            </div>
        </div>
    )
}

export default Create