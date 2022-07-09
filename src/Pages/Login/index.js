import React from 'react';


import { AreaLogin } from './styled';
import { AreaMeio } from './styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';




import { BtnDefaultIcons } from '../../Components/styled';

export default ({onReceiveGoogle}) => {

    
    return(
      <>
       <AreaMeio> 
       <div className="logo">
                {/* <img src="../../../logo.png"></img> */}
        </div>
       </AreaMeio>
            <AreaLogin>
           
                <h1> Login</h1>
                
                    
                       <div >
                        <Button color="#fff" class="center">Conta do Google</Button>
                        </div>
            </AreaLogin>
            
        </>
    );
   

}