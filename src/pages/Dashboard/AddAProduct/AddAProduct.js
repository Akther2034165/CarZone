import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./AddAProduct.css";
const AddAProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://intense-stream-09981.herokuapp.com/cars`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Great!", "You Added a New Place!", "success");
          reset();
        }
      });
  };
  return (
    <div className="container mb-4 mt-5 adding-product">
      <h2 className="text-center m-2">Add a new Product</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="carsfrom">
          <input
            placeholder="Car Brand"
            defaultValue=""
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
          <br />

          <input
            placeholder="Image URL"
            {...register("img", { required: true })}
          />
          <br />
          {errors.image && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <input
            placeholder="Description"
            defaultValue=""
            {...register("desc", { required: true })}
          />
          <br />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <textarea
            placeholder="Details of Car"
            {...register("details", { required: true })}
          />
          <br />
          {errors.description && (
            <span className="text-danger">This field is required</span>
          )}
          <br />

          <input
            placeholder="Price"
            type="number"
            {...register("price", { required: true })}
          />
          <br />
          {errors.charge && (
            <span className="text-danger">This field is required</span>
          )}
          <br />

          <button className="btn btn-danger placeBtn" type="submit">
            Add a Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
