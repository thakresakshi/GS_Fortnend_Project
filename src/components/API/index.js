export const getTotalPendinghod = () => {
  return fetch("http://localhost:8082/grievance/getAllGrivance").then((res) =>
    res.json()
  );
};
export const getTotalResolvedhod = () => {
  return fetch("").then((res) => res.json());
};

export const getTotalAccepthod = () => {
  return fetch("").then((res) => res.json());
};

export const getTotalForwardhod = () => {
  return fetch("").then((res) => res.json());
};

export const getTotalRejecthod = () => {
  return fetch("").then((res) => res.json());
};
export const getCommentshod = () => {
  return fetch("").then((res) => res.json());
};
// export const getTotalPendingprm = () => {
//   return fetch("http://localhost:8082/grievance/getAllGrivance").then((res) =>
//     res.json()
//   );
// };

export const getTotalResolvedprm = () => {
  return fetch("http://localhost:8082/prm/grievances/status").then((res) =>
    res.json()
  );
};

export const getTotalForwardedprm = () => {
  return fetch("http://localhost:8082/prm/grievances/getAll").then((res) =>
    res.json()
  );
};

export const getTotalRejectprm = () => {
  return fetch("http://localhost:8082/prm/grievances/").then((res) =>
    res.json()
  );
};
export const getCommentsprm = () => {
  return fetch("http://localhost:8082/prm/grievances/").then((res) =>
    res.json()
  );
};

export const getTotalPendingemp = () => {
  return fetch("").then((res) => res.json());
};

export const getTotalResolvedemp = () => {
  return fetch("").then((res) => res.json());
};

export const getTotalAcceptemp = () => {
  return fetch("").then((res) => res.json());
};

export const getTotalRejectemp = () => {
  return fetch("").then((res) => res.json());
};
export const getCommentsemp = () => {
  return fetch("").then((res) => res.json());
};
