import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";

const ForgotPage = () => {
   

    // $('#btn-resetPassword').click(function () {
    //     const auth = firebaseConfig.auth();
    //     var email = $('#email').val();
    //     if(email !== ""){
    //         auth.sendPasswordResetEmail(email).then(function (){
    //             window.alert("Email has been sent to you,Please check and verify.")
    //         })
    //         .catch(function(error){

    //         });
    //     }
    //     else{
    //         window.alert("Please write your email first");
    //     }
    // });

   
  
    return (
        <div>
             <div className="form-container">   
        <form  className="registration-form">
       
          <div className="input-container">
        <h4 className="account"><FcBusinessman style={{height: '150px', width:'150px', borderRadius:'50%'}}/></h4>

      

        <div className="inputWithIcon">
        <input type="text" className="input" name="email" id="email" placeholder="Your email here" required/>
        <i><HiOutlineMail className="email-icon" area-hidden="true"/></i>
         {/* < className="icon" area-hidden="true"/> */}
        </div>
        <input className="account" id="#btn-resetPassword" type="submit" value="Submit"/>
        
           </div>      
      </form>
         </div> 
        </div>
    );
};

export default ForgotPage;