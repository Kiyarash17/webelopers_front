import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";
import SpinnerSimple from "./spinner/simple";

type Props = {
  href?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  color?: "primary" | "secondary" | "gray";
  variant?: "outlined" | "contained";
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
};

export default function Button(props: Props) {
  const variant = props.variant || "contained";
  return (
    <>
      {props.href ? (
        <Link
          href={props.href}
          target={props.target}
          className={`btn ${props.color} ${props.className} ${variant} ${
            props.fullWidth ? "fullWidth" : ""
          } ${props.size}`}
        >
          {props.children}
        </Link>
      ) : (
        <button
          className={`btn ${props.color} ${props.className} ${variant} ${
            props.fullWidth ? "fullWidth" : ""
          } ${props.size}`}
          onClick={props.onClick}
          type={props.type}
          disabled={props.disabled || props.loading}
        >
          {props.children}
          {props.loading && <SpinnerSimple />}
        </button>
      )}
    </>
  );
}
