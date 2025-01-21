import { useCart } from "@/Contexts/CartContext";
import Link from "next/link";
import { Modal } from "react-bootstrap";

function LoginConfirmationModel({
  showModel,
  setShowModel,
  setShow,
}: {
  showModel: boolean;
  setShowModel: React.Dispatch<React.SetStateAction<boolean>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { handleShowCart } = useCart();
  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModel}
      onHide={() => setShowModel(false)}
    >
      <div className="h-100 p-5 d-flex flex-column gap-4">
        <p className="font18 fontWeight500">You need to login first?</p>
        <div className="d-flex justify-content-center aign-items-center gap-2">
          <Link
            className="myButton myButtonColored px-4"
            href={"/login"}
            onClick={() => {
              handleShowCart(false);
              setShow(false);
              setShowModel(false);
            }}
          >
            Login
          </Link>
          <button
            className="myButton myButtonOutline"
            onClick={() => setShowModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default LoginConfirmationModel;
