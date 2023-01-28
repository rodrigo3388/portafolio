import React from 'react'
import app1 from "../../media/app5.jpg";
import app2 from "../../media/app6.png";
import app3 from "../../media/app4.png";
import app4 from "../../media/app1.png";
import app5 from "../../media/example.jpg";
import app6 from "../../media/app2.png";
import app7 from "../../media/app3.png";
import app8 from "../../media/example.jpg";
import app9 from "../../media/app7.png";
import app10 from "../../media/app8.png";
import app11 from "../../media/app9.png";



const projects = () => {
  return (
           <div className='project-container'>

        <div  className="project">
          <div className="container">
          <div className="row mt-3 justify-content-center">
            <div className="col">
              {/* <div className="card"> */}
                {/* <div className="card-body"> */}
                <h2>Proyectos</h2>


                {/* </div> */}

              {/* </div> */}
            
            </div>

          </div>
<hr/>
<div className="row mt-3">

          <div className="col-4">
				<div className="card bg-dark text-white">
					<img className="card-img-top" src={app10} alt=""/>
					<div className="card-body">
						<h5 className="card-title">Burger-App</h5>		

						<div class="col-12">
				<div class="d-flex gap-2 justify-content-center">
					
			
							<a href="https://burger-page-rouge.vercel.app/" class="btn btn-danger">Web</a>

						<a href="https://github.com/rodrigo3388/burger-page" class="btn btn-primary">GitHub</a>

				</div>
			</div>

					</div>
				</div>
			</div>

			<div className="col-4">
				<div className="card bg-dark text-white">
					<img className="card-img-top" src={app9} alt=""/>
					<div className="card-body">
						<h5 className="card-title">E-commerce</h5>		

						<div class="col-12">
				<div class="d-flex gap-2 justify-content-center">
					
			
							<a href="https://e-commerce-roan-two.vercel.app/" class="btn btn-danger">Web</a>

						<a href="https://github.com/rodrigo3388/e-commerce" class="btn btn-primary">GitHub</a>

				</div>
			</div>

					</div>
				</div>
			</div>

			<div className="col-4">
				<div className="card bg-dark text-white">
					<img className="card-img-top" src={app11} alt=""/>
					<div className="card-body">
						<h5 className="card-title">E-commerce</h5>		

						<div class="col-12">
				<div class="d-flex gap-2 justify-content-center">
					
			
							<a href="https://crypto-web-nine.vercel.app/" class="btn btn-danger">Web</a>

						<a href="https://github.com/rodrigo3388/crypto-web" class="btn btn-primary">GitHub</a>

				</div>
			</div>

					</div>
				</div>
			</div>



          </div>
          <div className="row mt-3">

          <div className="col-4">
				<div className="card">
					<img className="card-img-top" src={app1} alt=""/>
					<div className="card-body">
						<h5 className="card-title">ClimaApp</h5>
						<a href="https://github.com/rodrigo3388/clima" class="btn btn-outline-primary">GitHub</a>
					</div>
				</div>
			</div>

      <div className="col-4">
				<div className="card">
					<img className="card-img-top" src={app2} alt=""/>
					<div className="card-body">
						<h5 className="card-title">HeroesSearchApp</h5>
						<a href="https://github.com/rodrigo3388/HeroesSearchApp" class="btn btn-outline-primary">GitHub</a>
					</div>
				</div>
			</div>

      <div className="col-4">
				<div className="card">
					<img className="card-img-top" src={app3} alt=""/>
					<div className="card-body">
						<h5 className="card-title">JournalApp</h5>
						<a href="https://github.com/rodrigo3388/JournalApp" class="btn btn-outline-primary">GitHub</a>
					</div>
				</div>
			</div>



          </div>

          <div className="row mt-3">

          <div className="col-4">

				<div className="card">
					<img className="card-img-top" src={app4} alt=""/>
					<div className="card-body">
						<h5 className="card-title">CalendarApp</h5>
						<a href="https://github.com/rodrigo3388/CalendarApp" class="btn btn-outline-primary">GitHub</a>
					</div>
				</div>
			</div>


      <div className="col-4">
				<div className="card">
					<img className="card-img-top" src={app5} alt=""/>
					<div className="card-body">
						<h5 className="card-title">CalendarBackend</h5>
						<a href="https://github.com/rodrigo3388/CalendarBackend" class="btn btn-outline-primary">GitHub</a>
					</div>
				</div>
			</div>
      
      <div className="col-4">
				<div className="card">
					<img className="card-img-top" src={app6} alt=""/>
					<div className="card-body">
						<h5 className="card-title">TurnosApp</h5>
						<a href="https://github.com/rodrigo3388/TurnosApp" class="btn btn-outline-primary">GitHub</a>
					</div>
				</div>
			</div>

          </div>

          <div className="row mt-3">


          <div className="col-4">
				<div className="card">
					<img className="card-img-top" src={app7} alt=""/>
					<div className="card-body">
						<h5 className="card-title">Chat</h5>
						<a href="https://github.com/rodrigo3388/chatNode" class="btn btn-outline-primary">GitHub</a>
					</div>
				</div>
			</div>
      
      <div className="col-4">
				<div className="card">
					<img className="card-img-top" src={app8} alt=""/>
					<div className="card-body">
						<h5 className="card-title">ClimaNode</h5>
						<a href="https://github.com/rodrigo3388/ClimaNode" class="btn btn-outline-primary">GitHub</a>
					</div>
				</div>
			</div>

          </div>
          <div className="row mt-3">




          </div>

          </div>
        </div>
        </div> 

  );
};

export default projects