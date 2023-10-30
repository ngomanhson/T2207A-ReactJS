// import { useContext, useState } from "react";
// import api from "../../service/api";
// import url from "../../service/url";
// import Context from "../../context/context";
// import ACTION from "../../context/action";

// function Login() {
//     const [user, setUser] = useState({ email: "", password: "" });
//     const [state, dispatch] = useContext(Context);

//     const handleInput = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const formSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const rs = await api.post(url.USER.LOGIN, user);
//             const u = rs.data;
//             const token = u.token;
//             dispatch({ type: ACTION.LOGIN, payload: { token: token, user: u } });
//             setTimeout(() => {
//                 // setState({...state,loading:false});
//                 dispatch({ type: ACTION.HIDE_LOADING });
//             }, 2000);
//             api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return (
//         <form method="POST" action="#" onSubmit={formSubmit}>
//             <div className="row">
//                 <div className="col-6 mx-auto">
//                     <div class="form-group">
//                         <label htmlFor="exampleInputEmail1">Email address</label>
//                         <input type="email" name="email" onChange={handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                     </div>
//                     <div class="form-group">
//                         <label htmlFor="exampleInputPassword1">Password</label>
//                         <input type="password" name="password" class="form-control" onChange={handleInput} id="exampleInputPassword1" />
//                     </div>

//                     <button type="submit" class="btn btn-primary">
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         </form>
//     );
// }
// export default Login;

import { useContext, useState } from "react";
import api from "../../service/api";
import url from "../../service/url";
import Context from "../../context/context";
import ACTION from "../../context/action";

function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const { state, dispatch } = useContext(Context);
    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const rs = await api.post(url.USER.LOGIN, user);
            const u = rs.data;
            const token = u.token;
            dispatch({ type: ACTION.LOGIN, payload: { token: token, user: u } });
            setTimeout(() => {
                // setState({...state,loading:false});
                dispatch({ type: ACTION.HIDE_LOADING });
            }, 2000);
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="row">
            <form className="col-6 mx-auto" method="POST" action="#" onSubmit={formSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={handleInput} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={handleInput} type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
export default Login;
