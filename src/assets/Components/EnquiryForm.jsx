import React from 'react'

export default function EnquiryForm({ userInformation, setUserInformation }) {

    const [errors, setErrors] = React.useState([]);
   

    const formHandling = (e) => {
        e.preventDefault();

        //console.log(e.target);

           
        let form = event.target;
        let fields = form.querySelectorAll('input, select, textarea');


        var errorNmaes = [];

        fields.forEach((v, i) => {
            if (v.value == '') {
                errorNmaes.push(v.name);
            }
        });

        setErrors(errorNmaes);

        // fields.forEach((v,i) => {
        //     console.log(v);

        //     if(v.value ==''){
        //         setErrors([...errors])
        //     }
        // });

        if (errors.length == 0) {

            const data = {
                name: event.target.full_name.value,
                email: event.target.email.value,
                phone_number: event.target.phone_number.value,
                subject: event.target.subject.value,
                message: event.target.message.value
            }

             var finalData = [data, ...userInformation];

                setUserInformation(finalData);

                localStorage.setItem('user_infos', JSON.stringify(finalData));
        }

      
        event.target.reset();


    }

    const errorHandler = (e) => {
        if (e.target.value != '') {
            var newErrors = errors.filter((v, i) => {
                if (v != e.target.name) {
                    return v;
                }
            });
            setErrors(newErrors);
        }
    }

    return (
        <>
            {/* Enquiry Form */}
            <form onSubmit={formHandling} >
                <div className="row">
                    <div className="col-md-4 ms-4 mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            onKeyUp={errorHandler}
                            name="full_name"
                            className={errors.includes('name') ? 'form-control border-danger' : 'form-control'}

                            placeholder="Enter Full Name"
                        />
                        {
                            errors.includes('full_name')
                                ?
                                <p className="text-danger">Name is required</p>
                                :
                                ''
                        }
                    </div>

                    <div className="col-md-4 ms-4 mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            onKeyUp={errorHandler}
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                        />
                        {
                            errors.includes('email')
                                ?
                                <p className="text-danger">Email is required</p>
                                :
                                ''
                        }
                    </div>

                    <div className="col-md-4 ms-4 mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="text"
                            onKeyUp={errorHandler}
                            name="phone_number"
                            className="form-control"
                            placeholder="Enter Mobile Number"
                        />
                        {
                            errors.includes('phone_number')
                                ?
                                <p className="text-danger">Phone number is required</p>
                                :
                                ''
                        }
                    </div>

                    <div className="col-md-4 ms-4 mb-3">
                        <label className="form-label">Course</label>
                        <select className="form-select" onChange={errorHandler} name="subject">
                            <option>Select Course</option>
                            <option>Web Development</option>
                            <option>React JS</option>
                            <option>Python</option>
                            <option>Java</option>
                            <option>Data Science</option>
                        </select>
                        {
                            errors.includes('subject')
                                ?
                                <p className="text-danger">Subject is required</p>
                                :
                                ''
                        }
                    </div>

                    <div className="col-md-4 ms-4 mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            onKeyUp={errorHandler}
                            className="form-control"
                            placeholder="Write Your Query"
                        ></textarea>
                        {
                            errors.includes('message')
                                ?
                                <p className="text-danger">Message is required</p>
                                :
                                ''
                        }
                    </div>

                    <div className=" col-12 ms-4 mb-3 d-flex align-items-end">
                        <button className="btn btn-primary px-4">
                            Submit Enquiry
                        </button>
                    </div>
                </div>
            </form>
        </>
    );

}
