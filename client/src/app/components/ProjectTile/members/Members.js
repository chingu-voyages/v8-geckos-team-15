import React from "react";

const maxMembers = 5;

const createFilled = num => {
  const elem = <i className="fas fa-user" />;
  const createArray = Array(num);
  createArray.fill(elem);

  return createArray;
};

const createNonFilled = num => {
  const elem = <i className="far fa-user" />;
  const createArray = Array(num);
  createArray.fill(elem);

  return createArray;
};

const Members = ({ members }) => {
  const adjustedMembers = members < 6 ? members : 5;
  const noFill = createNonFilled(maxMembers - adjustedMembers);
  const filled = createFilled(adjustedMembers);

  return (
    <div className="members">
      {filled}
      {noFill}
    </div>
  );
};

export default Members;
