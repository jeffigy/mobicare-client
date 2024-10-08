import Link from "next/link";
import React from "react";

type FabProps = {
  href: string;
  icon: React.ReactNode;
};

const Fab: React.FC<FabProps> = ({ href, icon }) => {
  return (
    <Link href={href}>
      <button className={`btn btn-circle btn-primary fixed bottom-6 right-6`}>
        <span className="absolute h-[35px] w-[35px] animate-ping rounded-full bg-primary"></span>
        {icon}
      </button>
    </Link>
  );
};
export default Fab;
