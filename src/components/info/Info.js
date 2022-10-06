import React from 'react';
import "./Info.css";
import s1 from "../../media/s1.png";
import s2 from "../../media/s2.png";
import s3 from "../../media/s3.png";
import s4 from "../../media/s4.png";
import s5 from "../../media/s5.png";
import s6 from "../../media/s6.png";

const info = () => {
  return (
    <div className='info-container'>
      <hr/>
        <div className='info'>
          
       

            <h2>Habilidades</h2>
            
</div>
            
				
            <div class="container">
		<div class="row mt-5">
			<div class="col">

        <img className="img-top" src={s1} alt=""/>

      </div>
      <div class="col">

        <img className="img-top" src={s2} alt=""/>
        </div>  

        <div class="col">

        <img className="img-top" src={s3} alt=""/>
        </div>  

        <div class="col">

        <img className="img-top" src={s4} alt=""/>
        </div>  

        <div class="col">

        <img className="img-top" src={s6} alt=""/>
        </div>  

        <div class="col">

        <img className="img-top" src={s5} alt=""/>
        </div>  

      

    </div>  
    </div>
				


    </div>
  );
};

export default info