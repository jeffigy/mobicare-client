import Alert from "@/components/ui/Alert";
import User from "./User";
import UserListLoading from "./UserListLoading";
import { useFetchUsers } from "./userQueries";

const UsersList = () => {
  const { data: users, isLoading, isError, error } = useFetchUsers();

  if (isLoading) return <UserListLoading />;

  if (isError) return <Alert type="error" message={error.message} />;

  if (!users) return <Alert type="error" message={"No users found"} />;

  return (
    <div className="flex w-full flex-col items-center space-y-5">
      {users?.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};

export default UsersList;
