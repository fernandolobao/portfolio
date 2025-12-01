import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Fernando Camilotti",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/fernandocamilotti/?locale=en_US",
  },
  {
    name: "Gmail",
    username: "fernandocamilotti",
    icon: Icons.gmail,
    link: "mailto:fernando@fernandocamilotti.com",
  },
];
