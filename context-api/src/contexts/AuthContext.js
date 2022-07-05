import React, {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setISLoggedIn] = useState(false);

    const changeAuthStatus = () => {
        setISLoggedIn(!isLoggedIn);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, changeAuthStatus}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;


// class AuthContextProvider extends React.Component {
//     state = {
//         isLoggedIn: false
//     }

//     changeAuthStatus = () => {
//         this.setState({isLoggedIn: !this.state.isLoggedIn});
//     }

//     render() {
//         return (
//             <AuthContext.Provider value={{...this.state, changeAuthStatus: this.changeAuthStatus}}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         );
//     }
// }