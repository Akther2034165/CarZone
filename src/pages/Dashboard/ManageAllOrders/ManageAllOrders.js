import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [status, setStatus] = useState("");
  useEffect(() => {
    fetch("https://intense-stream-09981.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);

  const handleApproved = (id, data) => {
    const newStatus = { status: "shipped" };
    setStatus(newStatus);
    fetch(`https://intense-stream-09981.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Approved!", "Approved Successfully!", "success");
        }
      });
  };

  //delete order
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once you delete, you will not be able to rebook the spot!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://intense-stream-09981.herokuapp.com/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Deleted!", "Deleted Successfully!", "success");
            }
          });
      } else {
        swal("Delete Canceled!");
      }
    });
  };
  return (
    <div>
      <div className="allOrder">
        <div className="container">
          <h2 className="text-center my-4">
            MANAGE ALL <span style={{ color: "#ED1C24" }}>ORDERS</span>
          </h2>
          <Table striped bordered hover size="sm" responsive="sm">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Brand</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrders?.map((order, index) => (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.address}</td>
                    <td>{order.title}</td>
                    {order.status === "Pending" ? (
                      <td className="text-danger fw-bold">{order.status}</td>
                    ) : (
                      <td className="text-success fw-bold">{order.status}</td>
                    )}
                    <td>
                      <button
                        onClick={() => handleApproved(order._id)}
                        className="btn btn-sm btn-success"
                      >
                        Approved
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(order._id)}
                        title="Delete"
                        className="btn btn-sm btn-danger"
                      >
                        <i class="fas fa-trash-alt"></i>Remove
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
