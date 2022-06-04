/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <p className="text-dark custom-font-1"><span className="font-weight-bold text-dark">Dashboard &gt; </span>Dashboard</p>
                </div>
            </div>

            <h6 className="font-weight-bold custom-font-2">Dashboard</h6>
            <div className="my-5">
                <h6 className="font-weight-bold custom-font-3 custom-border-left">&nbsp;List Order</h6>
                <table className="table custom-font-3" id="topTable">
                    <thead className="thead-secondary custom-color">
                        <tr>
                            <th scope="col" className="text-center">No</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Car</th>
                            <th scope="col">Start Rent</th>
                            <th scope="col">Finish Rent</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="text-center">1</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">2</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">3</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">4</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">5</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">6</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">7</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">8</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">9</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center">10</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                    </tbody>
                </table>
            
                <div className="row">
                    <div className="col-md-1 custom-font-1">
                    <span>Limit</span>
                    </div>
                    <div className="col-md-11 custom-font-1">
                    <span>Jump To Page</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                    <select className="form-select w-75 custom-height-40 rounded px-1 border custom-font-1" aria-label="Default select example">
                        <option defaultValue={{ value: "10" }}>10</option>
                        <option value="1">15</option>
                        <option value="2">20</option>
                        <option value="3">25</option>
                    </select>
                    </div>
                    <div className="col-md-2">
                        <select className="form-select custom-width-100 custom-height-40 rounded px-1 border custom-font-1" aria-label="Default select example">
                            <option defaultValue={{ value: "1" }}>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        <span><button className="custom-knock">Go</button></span>
                    </div>
                    <div className="col-md-9 custom-font-1">
                        <section>
                            <div className="d-flex justify-content-end">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link text-dark" to="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link text-dark custom-active-page" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link text-dark" href="#">...</a></li>
                                        <li className="page-item"><a className="page-link text-dark" href="#">9</a></li>
                                        <li className="page-item">
                                            <a className="page-link text-dark" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <h6 className="font-weight-bold custom-font-3 custom-border-left">&nbsp;List Car</h6>
            <table className="table custom-font-3" id="botTable">
                <thead className="thead-secondary custom-color">
                    <tr>
                        <th scope="col" className="text-center">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Start Rent</th>
                        <th scope="col">Finish Rent</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Uploaded at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="text-center">1</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>-</td>
                        <td>-</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">2</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Start Rent</td>
                        <td>Finish Rent</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">3</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Start Rent</td>
                        <td>Finish Rent</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">3</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Start Rent</td>
                        <td>Finish Rent</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">4</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>-</td>
                        <td>-</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">5</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Start Rent</td>
                        <td>Finish Rent</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">6</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Start Rent</td>
                        <td>Finish Rent</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">7</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Start Rent</td>
                        <td>Finish Rent</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">8</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Start Rent</td>
                        <td>Finish Rent</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">9</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Start Rent</td>
                        <td>Finish Rent</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">10</th>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Start Rent</td>
                        <td>Finish Rent</td>
                        <td>Created at</td>
                        <td>Updated at</td>
                    </tr>
                </tbody>
            </table>
            
            <div className="row">
                <div className="col-md-1 custom-font-1">
                    <span>Limit</span>
                </div>
                <div className="col-md-11 custom-font-1">
                    <span>Jump To Page</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                    <select className="form-select w-75 custom-height-40 rounded px-1 border custom-font-1" aria-label="Default select example">
                        <option defaultValue={{ value: "50" }}>50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                        <option value="125">125</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-select custom-width-100 custom-height-40 rounded px-1 border custom-font-1" aria-label="Default select example">
                        <option defaultValue={{ value: "1" }}>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <span><button className="custom-knock">Go</button></span>
                </div>
                <div className="col-md-9 custom-font-1">
                    <section>
                        <div className="d-flex justify-content-end">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link text-dark" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-dark custom-active-page" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link text-dark" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link text-dark" href="#">9</a></li>
                                    <li className="page-item">
                                        <a className="page-link text-dark" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
