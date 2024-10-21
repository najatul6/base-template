import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";
export const Menus = [
  {
    name: "Home",
    path: "/", // Define the path for the Home menu item
  },
  {
    name: "Features",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Design",
        desc: "Responsive design",
        icon: PanelsTopLeft,
        path: "/features/design", // Define the path for this submenu item
      },
      {
        name: "Management",
        desc: "Site control",
        icon: Bolt,
        path: "/features/management",
      },
      {
        name: "Navigation",
        desc: "Link pages",
        icon: PanelTop,
        path: "/features/navigation",
      },
      {
        name: "CMS",
        desc: "Management content",
        icon: Database,
        path: "/features/cms",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    subMenuHeading: ["Get started", "Programs", "Recent"],
    subMenu: [
      {
        name: "Marketplace",
        desc: "Browse templates",
        icon: ShoppingBag,
        path: "/resources/marketplace",
      },
      {
        name: "Meetups",
        desc: "Upcoming events",
        icon: MapPin,
        path: "/resources/meetups",
      },
      {
        name: "Updates",
        desc: "Changelog",
        icon: BellDot,
        path: "/resources/updates",
      },
      {
        name: "Academy",
        desc: "Watch lessons",
        icon: Play,
        path: "/resources/academy",
      },
      {
        name: "Blog",
        desc: "Posts",
        icon: BookOpenText,
        path: "/resources/blog",
      },
      {
        name: "Figma",
        desc: "Plugin",
        icon: Figma,
        path: "/resources/figma",
      },
      {
        name: "Experts",
        desc: "Jobs",
        icon: BriefcaseBusiness,
        path: "/resources/experts",
      },
      {
        name: "Gallery",
        desc: "Images",
        icon: Images,
        path: "/resources/gallery",
      },
    ],
    gridCols: 3,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
        path: "/support/help",
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
        path: "/support/community",
      },
      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: TriangleAlert,
        path: "/support/emergency",
      },
    ],
    gridCols: 1,
  },
  {
    name: "Enterprise",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: ShieldPlus,
        path: "/enterprise",
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: Users,
        path: "/enterprise/collaboration",
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: Dessert,
        path: "/enterprise/customers",
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: Lock,
        path: "/enterprise/security",
      },
    ],
    gridCols: 2,
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
