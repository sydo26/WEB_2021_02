import React from "react";

import "./Arena.css";

export const Arena = ({ children, arena }) => {
  return (
    <div className="arena">
      <h3>Arena - {arena}</h3>
      <div className="arena-body">
        {React.Children.map(children, (e) =>
          React.cloneElement(e, { arena: arena })
        )}
      </div>
    </div>
  );
};

// {
//   /* <div className="arena-vs">
//           <img src={`${process.env.PUBLIC_URL}/images/vs.png`} alt="vs" />
//         </div> */
// }
