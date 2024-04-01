import { Fragment } from "react";
import { createPortal } from "react-dom";

const Backdrop = ({ modal }) => {
  const portalEl = document.getElementById("portal");

  return createPortal(
    <Fragment>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[1001]"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-transparent z-[1002] flex justify-center pt-[9rem]">
        {modal}
      </div>
    </Fragment>,
    portalEl
  );
};

export default Backdrop;
