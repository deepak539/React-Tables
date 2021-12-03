import { connect } from "redux-bundler-react";
import ReactTables from "./ReactTables";
import BasicTable from "./BasicTable";

const UserContainers = (props) => {
  const UsersData = props.users;
  // console.log("UserData:- ", UsersData);

  if ("courses" in UsersData.users) {
    // console.log(
    //   "We found the course details in UsersContainers- ",
    //   UsersData.users.courses
    // );
    return <ReactTables courses={UsersData.users.courses} />;
  } else {
    // console.log("We did not get the courses yet in UsersContainers");
    return <BasicTable />;
  }
};

export default connect("doFetchUsers", "selectUsers", UserContainers);
