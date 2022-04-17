import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface RepositoryData {
  repository: RepositoryProps[];
}
const RepositoryContext = createContext<RepositoryData>({} as RepositoryData);

interface RepositoryProviderProps {
  children: ReactNode;
}

interface RepositoryProps {
  id: number;
  avatar_url: string;
  name: string;
  description: string;
  language: string;
  html_url: string;
}
export function RepositoryProvider({ children }: RepositoryProviderProps) {
  const [repository, setRepository] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    api.get("/repository").then(({ data }) => setRepository(data.repositories));
  }, []);
  return (
    <RepositoryContext.Provider value={{ repository }}>
      {children}
    </RepositoryContext.Provider>
  );
}

export function useRepository() {
  const context = useContext(RepositoryContext);

  return context;
}
