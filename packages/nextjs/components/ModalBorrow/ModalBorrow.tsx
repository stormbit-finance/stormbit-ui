import Button from "../Button/Button";

function ModalBorrow() {
  return (
    <div>
      <span>Borrow</span>
      <div>
        <input type="text"></input>
        <div>Dai</div>
      </div>
      <div>
        <span>Payment Schedule</span>
        <div>
          <input type="text"></input>
        </div>
      </div>
      <div>
        <span>Penalty</span>
        <input type="text"></input>
      </div>
      <div>
        <span>Agreement Settings</span>
        <div>Select Agreement</div>
      </div>
      <Button>Borrow Dai</Button>
    </div>
  );
}

export default ModalBorrow;
