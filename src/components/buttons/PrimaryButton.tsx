interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, onClick, className }: PrimaryButtonProps) {
  return (
    <button
      className={`links-button w-full flex cursor-pointer items-center justify-center gap-[7.25px] rounded-[7.25px] bg-[#808CFD] px-4 py-3 text-black hover:bg-black hover:text-white ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;