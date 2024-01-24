import Button from "../Button/Button";
import "./CreationModal.css";

interface Modalprops {
  setIsModalOpen: () => void;
  handleSubmit: () => void;
}

function CreationModal(props: Modalprops) {
  const { setIsModalOpen, handleSubmit } = props;
  return (
    <div className="container-modal">
      <div className="content-modal">
        <div className="flex gap-8">
          <button
            className="w-[258px] rounded-[19px] button-cancel"
            onClick={() => {
              setIsModalOpen();
            }}
          >
            X
          </button>
          <Button onClick={handleSubmit}> Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default CreationModal;
