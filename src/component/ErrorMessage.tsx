import { ReactNode } from "react";

type ErrorProps = {
  children: ReactNode;
};
export const ErrorMessage = ({ children }: ErrorProps) => {
  return (
    <p className="bg-red-500 p-4 rounded-lg text-white font-bold text-lg text-center shadow-md animate-pulse">
      {children}
    </p>
  );
};
