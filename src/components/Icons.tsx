interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  id?: string;
}

const BarsIcon = ({ size, color, className, id }: IconProps) => (
  <svg
    width={size || 18}
    height={size ? (size * 14) / 18 : 14}
    viewBox="0 0 18 14"
    fill="none"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7ZM0 13C0 12.4477 0.447715 12 1 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H1C0.447715 14 0 13.5523 0 13Z"
      fill={color || "#000"}
    />
  </svg>
);

const CloseIcon = ({ size, color, className }: IconProps) => (
  <svg
    width={size || 14}
    height={size || 14}
    viewBox="0 0 14 14"
    fill="none"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
      fill={color || "#000"}
    />
  </svg>
);

export { BarsIcon, CloseIcon };
