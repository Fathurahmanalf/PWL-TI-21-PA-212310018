import React from 'react';
import MyBio from './MyBio';

const Profile = () => {
    const myData ={
        name : "Fathur",
        age : "21",
    };

    const ClickMe = ({children, onClickBtn}) =>{
        return (
          <button type='button'onClick={()=>onClickBtn()} className='btn btn-danger'>
            {children}
          </button>
        )
    };

    const HandlerHitme = () =>{
        alert("Anda telah mengetuk saya");
      }
      
      
    return (
        <div>
        <h1>Biodata:</h1>
        <MyBio name="Fathur" age= "80"/>
        <ClickMe onClickBtn={HandlerHitme}>
        Klik Saya!
        </ClickMe>

        </div>
  
    );
}

export default Profile;
