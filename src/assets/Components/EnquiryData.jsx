import React from 'react'

export default function EnquiryData({ userInformation }) {
    return (
        <>
            {/* Dummy Table */}
            <table className="table table-striped table-hover align-middle text-center">
                <thead className="table-primary">
                    <tr>
                        <th>#</th>
                        <th>Student Name</th>
                        <th>Course</th>
                        {/* <th>Qualification</th>
                        <th>Mode</th> */}
                        <th>Fee Status</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        userInformation.map((v,i) => {

                            return (

                                <tr key={i}>
                                    <td> { i +1}</td>
                                    <td>{v.name}</td>
                                    <td>{v.subject}</td>
                                    <td>
                                        <span className="badge bg-success">
                                            Paid
                                        </span>
                                    </td>
                                </tr>



                            )

                        })
                    }

                </tbody>
            </table>
        </>
    );
};

