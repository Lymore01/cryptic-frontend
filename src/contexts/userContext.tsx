import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type UserDataProps = {
  accountBalance: number;
  assetsBalance: number;
  apy: number;
  privateKey: string;
  publicAddress: string;
  totalDepositAmount: number;
  totalWithdrawAmount: number;
};

type UserContextType = {
  user: string | null;
  data: UserDataProps | null;
  loading: boolean;
  error: string | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [data, setData] = useState<UserDataProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const authData: string | null = localStorage.getItem("cryptAuth");
    const user = authData ? JSON.parse(authData) : null;
    setUser(user);

    if (!user) {
      console.log("no user");
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await fetch(`/api/user/${user}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          console.log("Error fetching user");
          setError("Error fetching user");
          setLoading(false);
          return;
        }

        const results = await res.json();
        setData(results);
      } catch (error) {
        console.log("error fetching data", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
