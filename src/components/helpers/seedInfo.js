// const todosTest = [
//   {
//     name: "kill ma self",
//     info: "just that",
//     status: "done",
//     category: "life",
//   },
//   {
//     name: "kill ma self",
//     info: "just that",
//     status: "doing",
//     category: "life",
//   },
//   {
//     name: "kill ma self",
//     info:
//       "just that dasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasddasdasdasdasasasassssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssss",
//     status: "pending",
//     category: "aa",
//   },
// ];

const checkLocalStorage = () => {
  if (window.localStorage.getItem("todos") === "null") return [];
  return JSON.parse(window.localStorage.getItem("todos"));
};

export default checkLocalStorage;
