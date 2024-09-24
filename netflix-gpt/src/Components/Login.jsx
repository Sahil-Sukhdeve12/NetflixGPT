import Header from "./Header";
// import './src/App.css';

const Login=()=>{
    return(
        <div>
            <Header/>
            <div style={{position:'absolute'}}>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg"
                alt="bg-img" />
            </div>

            <form style={{width:'25%',position:'relative',padding:'12px',backgroundColor:'black'}}>
                <input type="text" placeholder="Email or mobile number" style={{padding:2,margin:2}}></input>
                <input type="text" placeholder="Password" style={{padding:2,margin:2}}/>
                <br/>
                <button style={{padding:4,margin:4}}>Sign In</button>
            </form>

        </div>
    )
}

export default Login;