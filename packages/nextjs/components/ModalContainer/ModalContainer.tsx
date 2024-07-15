import React, { ReactNode, useEffect } from "react";

interface ModalContainerProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children, onClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="container-modal items-center" onClick={onClick}>
      <div className="content-modal">{children}</div>
    </div>
  );
};

export default ModalContainer;
