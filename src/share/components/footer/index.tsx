import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div>
        <section id="footer" className='mt-5'>
		<div className="container">
		
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 ">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.facebook.com/tsiresy.rbkt/"><i className="fa fa-facebook"></i></a></li>
					
					</ul>
				</div>
				<hr />
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 text-center text-white">
					<p className="h6">©Aldo Janny | 2022</p>
				</div>
				<hr />
			</div>	
		</div>
	</section>
    </div>
  )
}

export default Footer