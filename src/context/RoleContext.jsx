import { createContext, useContext } from 'react';

const RoleContext = createContext('developer');

export const useRole = () => useContext(RoleContext);

export default RoleContext;
