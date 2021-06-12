import './App.css';
import firebase from 'firebase/app'
import SignIn from './Components/Auth/SignIn';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

const handelSignOut = async () => {
    await firebase.auth().signOut();
    window.location.reload();
}

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/* <LoginContainer /> */}
                <SignIn>
                    <div>lololololol</div>
                    <button onClick={() => { handelSignOut() }}>SignOut</button>
                </SignIn>
            </div>
        </Provider>
    );
}

export default App;