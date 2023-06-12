import { useFirebase } from "src/hooks/useFirebase";
import { NotSignedIn } from "../NotSignedIn/NotSignedIn";

export const NotSignedInWrapper = ({ children }: { children: any }) => {
  const { user } = useFirebase();
  return user ? children : <NotSignedIn />;
};
