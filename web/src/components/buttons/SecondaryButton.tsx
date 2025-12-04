interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function SecondaryButton({ children, onClick }: SecondaryButtonProps) {
  return (
    <button
      className="links-button flex cursor-pointer items-center justify-center gap-[7.25px] rounded-[7.25px] bg-[#E9ECFF] px-4 py-3 text-black hover:bg-black hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;