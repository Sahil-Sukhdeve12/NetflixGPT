import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom"; // router-provider is a component which provide 
//routing config to our app

import Browse from "./Browse";
import Header from "./Header";
import Login from "./Login";

const Body=()=>{

    //creating routing route 
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;