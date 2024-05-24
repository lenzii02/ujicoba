import { icons } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

export type NavIconProps = {
  icon: keyof typeof icons;
  label: string;
  href: string;
};

export const NavIcon = ({ icon, label, href }: NavIconProps) => {
  return (
    <Link href={href}>
      <Tooltip>
        <TooltipTrigger>
          <Icon name={icon} className="w-5 h-5" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </Link>
  );
};
