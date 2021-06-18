import './App.css';
import SignIn from './Components/Auth/SignIn';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
import { BrowserRouter, Route } from "react-router-dom";
import MainPageContsiner from './Components/MainPage/MainPageContainer';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import SignUp from './Components/Registration/SignUp';

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Route exact path="/" render={() => (
                        <MainPageContsiner />
                    )} />
                    <Route path='/signUp' render={() => (
                        <SignUp />
                    )} />
                    <Route path='/signIn' render={() => (
                        <SignIn />
                    )} />

                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;