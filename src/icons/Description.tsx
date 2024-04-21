import { IconProps } from "./IconProps.types";

export default function Description({ className, size = 44 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M334.627 16H48v480h424V153.373ZM440 166.627V168H320V48h1.373ZM80 464V48h208v152h152v264Z"
      />
      <path fill="currentColor" d="M136 296h224v32H136zm0 80h224v32H136z" />
    </svg>
  );
}
