import { useEffect, useState } from "react";
import { getAllUser } from "../services/apiService";
const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchAllUser();
  }, []);
  const fetchAllUser = async () => {
    let res = await getAllUser();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
    return res;
  };
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <tr key={`table-user-${index}`}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td className="table-actions">
                  <button className="btn btn-secondary">View</button>
                  <button className="btn btn-warning mx-3">Update</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        {listUsers && listUsers.length === 0 && (
          <tr>
            <td colSpan={4}>Not Found User</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default TableUser;
