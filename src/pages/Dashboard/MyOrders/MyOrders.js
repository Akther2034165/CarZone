import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders, user.email]);
  const cancelTour = (id) => {
    swal({
      title: "Are you sure?",
      text: "Cancel this spot booking.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/orders/${id}`, {
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
      <div className="container myOrder">
        <h2 className="text-center my-4">
          My <span style={{ color: "#ED1C24" }}>Orders</span>
        </h2>
        <Table striped bordered hover size="sm" responsive="sm">
          <thead>
            <tr>
              <th>SL.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Order Date</th>
              <th>Address</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.date}</td>
                  <td>{order.address}</td>
                  <td>{order.title}</td>
                  <td>{order.charge}</td>
                  {order.status === "Pending" ? (
                    <td className="text-danger fw-bold">{order.status}</td>
                  ) : (
                    <td className="text-success fw-bold">{order.status}</td>
                  )}
                  <td>
                    <button
                      onClick={() => cancelTour(order._id)}
                      className="btn btn-sm btn-danger"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;
