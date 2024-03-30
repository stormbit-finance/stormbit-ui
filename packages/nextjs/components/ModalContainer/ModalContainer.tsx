import React, { ReactNode, useEffect } from "react";

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="container-modal items-center">
      <div className="content-modal">{children}</div>
    </div>
  );
};

export default ModalContainer;
