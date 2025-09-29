import { Navigate } from "react-router";

type Props = { children: React.ReactNode };

export default function ProtectedRoute({ children }: Props) {
  const token = null;
  return token ? <Navigate to="/dashboard" replace /> :<>{children}</>;
}