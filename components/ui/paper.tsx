import { ReactNode } from "react";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  shadow?: string;
};

export default function Paper(props: Props) {
  const size = props.size || "md";
  const shadow = props.shadow || "shadow-sm";
  return (
    <div className={`paper ${size} ${props.className} ${shadow}`}>
      {props.children}
    </div>
  );
}
