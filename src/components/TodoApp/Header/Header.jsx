import {userLogoutAC} from "../../../action-creators/form-action-creator";
import {connect} from "react-redux";

const Header = ({userLogout}) => {
    return (
        <div className="title-wrapper">
            <h3 className="title">Your todo list</h3>
            <button
                className="btn__logout"
                onClick={()=> {userLogout()}}
            >
                Log out
            </button>
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => {
            dispatch(userLogoutAC())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Header)


