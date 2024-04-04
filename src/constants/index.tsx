export const MenuItems = [
  {
    name: "Home",
    url: "/",
  },
  // Admin
  {
    name: "Create new account",
    url: "/web/admin/account",
    roleId: "admin",
  },
  {
    name: "Maintain system data",
    url: "/web/admin/system",
    roleId: "admin",
  },
  {
    name: "Create annual event",
    url: "/web/admin/event",
    roleId: "admin",
  },
  // Student
  {
    name: "Submit to event",
    url: "/web/student/event",
    roleId: "student",
  },
  // {
  //   name: "View all contribution",
  //   url: "/web/student/system",
  //   roleId: "student",
  // },
  {
    name: "Student profile",
    url: "/web/student/profile",
    roleId: "student",
  },
  // Manager
  {
    name: "View events",
    url: "/web/manager/event",
    roleId: "manager",
  },
  {
    name: "View statistics",
    url: "/web/manager/statistics",
    roleId: "manager",
  },
  // Coordinator
  {
    name: "Contributions",
    url: "/web/coordinator/event",
    roleId: "coordinator",
  },
  {
    name: "Selected contribution",
    url: "/web/coordinator/selected",
    roleId: "coordinator",
  },
  // Guest
  {
    name: "View selected report",
    url: "/web/guest/event",
    roleId: "guest",
  },
];
