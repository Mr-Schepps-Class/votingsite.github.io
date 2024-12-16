import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" exact component={Home}></Route>
                <Route exact component={NotFound} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;