/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function AddNewCar() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const navigate = useHistory();

  const onChangeName = (element) => {
    const name = element.target.value;
    setName(name);
  };

  const onChangeCategory = (element) => {
    const category = element.target.value;
    setCategory(category);
  };

  const onChangePrice = (element) => {
    const price = element.target.value;
    setPrice(price);
  };

  const onChangeStatus = (element) => {
    const status = element.target.value;
    setStatus(status);
  };

  const onChangeImage = (element) => {
    const image = element.target.value;
    setImage(image);
  };

  const onPostData = async (element) => {
    element.preventDefault();
    const AddNewCar = { name, category, price, status, image };
    console.log("addNewCar:", AddNewCar);
    await Axios.post("https://rent-cars-api.herokuapp.com/admin/car", AddNewCar)
      .then((res) => {
        if (res.status === 201) {
          console.log("Dara Berhasil Ditambahkan!", res.data);
          navigate.push({
            pathname: "/list-car-admin",
            state: { status: true },
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <p className="text-dark custom-font-1">
            <span className="font-weight-bold text-dark">
              Cars &gt; List Car &gt;{" "}
            </span>
            Add New Car
          </p>
        </div>
      </div>

      <h6 className="font-weight-bold custom-font-2 mb-4">Add New Car</h6>

      <div className="row">
        <div className="col-md-12 bg-white pt-4 pb-3">
          <Form onSubmit={onPostData}>
            <div className="form-group row">
              <label
                htmlFor="name"
                className="col-sm-2 col-form-label custom-font-1"
              >
                Name<span className="custom-red">*</span>
              </label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  className="form-control custom-font-1 w-25"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={onChangeName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="category"
                className="col-sm-2 col-form-label custom-font-1"
              >
                Category<span className="custom-red">*</span>
              </label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  className="form-control custom-font-1 w-25"
                  id="category"
                  name="category"
                  placeholder="Category"
                  onChange={onChangeCategory}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="price"
                className="col-sm-2 col-form-label custom-font-1"
              >
                Price<span className="custom-red">*</span>
              </label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  className="form-control custom-font-1 w-25"
                  id="price"
                  name="price"
                  placeholder="Price"
                  onChange={onChangePrice}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="status"
                className="col-sm-2 col-form-label custom-font-1"
              >
                Status<span className="custom-red">*</span>
              </label>
              <div className="col-sm-10">
                <div className="row">
                  <div className="col-md-1">
                    <Input
                      type="radio"
                      className="form-control custom-font-1 w-50"
                      id="true"
                      value="true"
                      onChange={onChangeStatus}
                    />
                  </div>
                  <div className="col-md-11">
                    <label htmlFor="true" className="custom-font-1">
                      True
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1">
                    <Input
                      type="radio"
                      className="form-control custom-font-1 w-50"
                      id="false"
                      value="false"
                      onChange={onChangeStatus}
                    />
                  </div>
                  <div className="col-md-11">
                    <label htmlFor="false" className="custom-font-1">
                      False
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="image"
                className="col-sm-2 col-form-label custom-font-1"
              >
                Photo<span className="custom-red">*</span>
              </label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  className="form-control custom-font-1 w-25"
                  id="image"
                  name="image"
                  placeholder="Image"
                  onChange={onChangeImage}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputStart"
                className="col-sm-2 col-form-label custom-font-1"
              >
                Start Rent
              </label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  readonly
                  className="form-control-plaintext custom-font-1"
                  id="inputStart"
                  value="-"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputFinsih"
                className="col-sm-2 col-form-label custom-font-1"
              >
                Finish Rent
              </label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  readonly
                  className="form-control-plaintext custom-font-1"
                  id="inputFinish"
                  value="-"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputCreated"
                className="col-sm-2 col-form-label custom-font-1"
              >
                Created at
              </label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  readonly
                  className="form-control-plaintext custom-font-1"
                  id="inputCreated"
                  value="-"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputUpdated"
                className="col-sm-2 col-form-label custom-font-1"
              >
                Updated at
              </label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  readonly
                  className="form-control-plaintext custom-font-1"
                  id="inputUpdated"
                  value="-"
                />
              </div>
            </div>
            <div className="d-flex justify-content-start mt-5 pt-5">
              <button
                type="submit"
                className="btn btn-outline-primary mr-2 custom-font-4"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary custom-font-4">
                Save
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
