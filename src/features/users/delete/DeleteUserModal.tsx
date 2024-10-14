import Modal from "@/components/ui/Modal";
import { UserType } from "@/types/User";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDeleteUserMutation } from "../userMutations";
import { toast } from "sonner";
import { AxiosApiResponse } from "@/types/ServerResponse";

const DeleteUserModal = ({ user }: { user: UserType }) => {
  const {
    mutate: deleteUser,
    isPending,
    isSuccess,
    isError,
    error,
  } = useDeleteUserMutation();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    deleteUser(user.id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Success", {
        description: "User successfully deleted",
      });
      router.back();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Error", {
        description: (error as AxiosApiResponse).response?.data.message,
      });
    }
  }, [isError, error]);

  return (
    <>
      <button
        className="btn btn-neutral border-none"
        onClick={() => setShowModal(true)}
      >
        <Trash2 />
      </button>
      <Modal onClose={handleCloseModal} visible={showModal} title="Delete User">
        <p>
          are you sure on deleting user{" "}
          <span className="text-error">{user.name}</span> with email{" "}
          <span className="text-error">{user.email}</span> ? this action caanot
          be undone.
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-outline btn-error border-none"
            onClick={handleDelete}
          >
            {isPending ? (
              <>
                <span className="loading loading-spinner"></span> Deleting...
              </>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteUserModal;
