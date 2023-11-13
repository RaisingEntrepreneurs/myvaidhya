// AppointmentContext.js
import { createContext, useContext, useReducer } from 'react';

const AppointmentContext = createContext();

const initialState = {
  appointments: [],
};

function appointmentReducer(state, action) {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return { ...state, appointments: [...state.appointments, action.payload] };
    default:
      return state;
  }
}

function useAppointmentContext() {
  return useContext(AppointmentContext);
}

function AppointmentProvider({ children }) {
  const [state, dispatch] = useReducer(appointmentReducer, initialState);

  return (
    <AppointmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export { useAppointmentContext, AppointmentProvider };
