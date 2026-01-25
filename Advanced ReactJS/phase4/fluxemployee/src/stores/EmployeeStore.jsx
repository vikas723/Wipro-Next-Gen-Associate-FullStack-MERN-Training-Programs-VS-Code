
import dispatcher from "../dispatcher/AppDispatcher";
let _employees = [];
let listeners = [];
const EmployeeStore = {
  getAllEmployees() {
    return _employees;
  },
  addChangeListener(callback) {
    listeners.push(callback);
  },
  removeChangeListener(callback) {
    listeners = listeners.filter(cb => cb !== callback);
  },
  emitChange() {
    listeners.forEach(cb => cb());
  }
};
// Register with dispatcher
dispatcher.register((action) => { 
  switch (action.type) {
    case "ADD_EMPLOYEE": // If employee is added
      _employees.push(action.payload); //  Pushing it to the Employee array, ONLY place where state changes
      EmployeeStore.emitChange(); // Notifies View to Update 
      break; 
    default:
      break;
  }
});
export default EmployeeStore;