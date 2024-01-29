import { createContext, useContext } from "react";

const ResourceContext = createContext();

export function useResourceContext() {
  return useContext(ResourceContext);
}

export default ResourceContext;
