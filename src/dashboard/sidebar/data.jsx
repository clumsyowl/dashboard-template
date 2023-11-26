import { DocIcon } from "./icons/DocIcon";
import { MonitoringIcon } from "./icons/MonitoringIcon";
import { DemographicIcon } from "./icons/DemographicIcon";
import DashboardIcon from "./icons/DashboardIcon";
import ScheduleIcon from "./icons/ScheduleIcon";
import AnalyticsIcon from "./icons/AnalyticsIcon";
import CalendarIcon from "./icons/CalendarIcon";
import SettingsIcon from "./icons/SettingsIcon";

export const data = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon />,
    link: "/admin/analytics",
  },
  {
    title: "Schedule",
    icon: <ScheduleIcon />,
    link: "/admin/bills",
  },
  {
    title: "Calendar",
    icon: <CalendarIcon />,
    link: "/admin/applications",
  },
  {
    title: "Monitoring",
    icon: <MonitoringIcon />,
    link: "/admin/monitoring",
  },
  {
    title: "Demographics",
    icon: <DemographicIcon />,
    link: "/admin/demographics",
  },
  {
    title: "Documentation",
    icon: <DocIcon />,
    link: "/admin/documentation",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/admin/test",
  },
];
