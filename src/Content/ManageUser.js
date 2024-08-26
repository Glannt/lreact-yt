import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <ModalCreateUser />
        </div>
        <div>Table user</div>
      </div>
    </div>
  );
};

export default ManageUser;
