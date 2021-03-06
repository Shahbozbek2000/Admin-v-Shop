import React from 'react'
import Card from '@material-ui/core/Card';
import  {Editable}  from './Table';
import Charts from './Charts'

const Books = () => {
    return (
        <>
            <div className="card-part">
                <Card className="card">
                    <div className="card-wrapper">
                        <div>
                            <h3>Users</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <h1>13</h1>
                        </div>
                    </div>
                </Card>
                <Card className="card">
                    <div className="card-wrapper">
                        <div>
                            <h3>Users</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <h1>13</h1>
                        </div>
                    </div>
                </Card>
                <Card className="card">
                    <div className="card-wrapper">
                        <div>
                            <h3>Users</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <h1>13</h1>
                        </div>
                    </div>
                </Card>
                <Card className="card">
                    <div className="card-wrapper">
                        <div>
                            <h3>Users</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <h1>13</h1>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="chart-part">
                <div className="chart-part-wrapper">
                    <Card className="card-chart">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa velit, sequi incidunt perferendis minima aut tempore nihil distinctio blanditiis minus nemo unde. Recusandae, reiciendis? Numquam ad unde perspiciatis quo neque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa velit, sequi incidunt perferendis minima aut tempore nihil distinctio blanditiis minus nemo unde. Recusandae, reiciendis? Numquam ad unde perspiciatis quo neque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa velit, sequi incidunt perferendis minima aut tempore nihil distinctio blanditiis minus nemo unde. Recusandae, reiciendis? Numquam ad unde perspiciatis quo neque.
                    </Card>
                    <Card className="card-chart">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa velit, sequi incidunt perferendis minima aut tempore nihil distinctio blanditiis minus nemo unde. Recusandae, reiciendis? Numquam ad unde perspiciatis quo neque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa velit, sequi incidunt perferendis minima aut tempore nihil distinctio blanditiis minus nemo unde. Recusandae, reiciendis? Numquam ad unde perspiciatis quo neque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa velit, sequi incidunt perferendis minima aut tempore nihil distinctio blanditiis minus nemo unde. Recusandae, reiciendis? Numquam ad unde perspiciatis quo neque.
                    </Card>
                </div>
            </div>
            <div>
                <Editable/>
            </div>
            <div>
                <Charts/>
            </div>
        </>
    )
}

export default Books
