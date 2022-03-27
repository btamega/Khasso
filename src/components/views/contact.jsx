import React from 'react'

const contact = () => {
  return (
    <div>
        <section id="contact-us" className="contact-us section">
		<div className="container">
				<div className="contact-head">
					<div className="row">
						<div className="col-lg-8 col-12">
							<div className="form-main">
								<div className="title">
									{/* <h4>Get in touch</h4> */}
									<h3>Ecrivez nous !</h3>
								</div>
								<form className="form" action='#' >
									<div className="row">
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Nom<span>*</span></label>
												<input name="name" type="text" placeholder=""/>
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Objet<span>*</span></label>
												<input name="subject" type="text" placeholder=""/>
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Email<span>*</span></label>
												<input name="email" type="email" placeholder=""/>
											</div>	
										</div>
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Téléphone<span>*</span></label>
												<input name="company_name" type="text" placeholder=""/>
											</div>	
										</div>
										<div className="col-12">
											<div className="form-group message">
												<label>Message<span>*</span></label>
												<textarea name="message" placeholder=""></textarea>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group button">
												<button type="submit" className="btn ">Envoyer</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className="single-head">
								<div className="single-info">
									<i className="fa fa-phone"></i>
									<h4 className="title">Call us Now:</h4>
									<ul>
										<li><a href="tel:+33 (605) 703-920">+33 (605) 703-920</a></li>
										<li><a href="tel:+33 (605) 703-920">+212 620-783-837</a></li>
									</ul>
								</div>
								<div className="single-info">
									<i className="fa fa-envelope-open"></i>
									<h4 className="title">Email:</h4>
									<ul>
										<li><a href="mailto:info@yourwebsite.com">karecherif2000@gmail.com</a></li>
										<li><a href="mailto:info@yourwebsite.com">bougarytamega77@gmail.com</a></li>
									</ul>
								</div>
								<div className="single-info">
									<i className="fa fa-location-arrow"></i>
									<h4 className="title">Our Address:</h4>
									<ul>
										<li>France</li>
										<li>Maroc</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	</section>
    </div>
  )
}

export default contact