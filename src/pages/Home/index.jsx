import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
      <div class='container'>
            <div>You will need to Sign Up first before seeing Memes</div>
              <br/>
              <div>
                <Link to="/signup" >
                    Click here to signup now!!!
                </Link>
            </div>
        </div> 
    );
}

export default Home;