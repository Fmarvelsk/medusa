const userRoles = [
  {
    id: 1,
    name: "Superadmin",
    type: "DEFAULT",
    date: "Jan 1, 2023",
    status: "Active",
    users: [
      "https://avatars.githubusercontent.com/u/20971850?v=4",
      "https://avatars.githubusercontent.com/u/50866431?v=4",
      "https://avatars.githubusercontent.com/u/124599?v=4",
      "https://avatars.githubusercontent.com/u/69650754?v=4",
      "https://avatars.githubusercontent.com/u/40583749?v=4",
    ],
    totalUser: 7,
  },
  {
    id: 2,
    name: "Merchantadmin",
    type: "DEFAULT",
    date: "Feb 1, 2023",
    status: "Active",

    users: [
      "https://avatars.githubusercontent.com/u/20971850?v=4",
      "https://avatars.githubusercontent.com/u/50866431?v=4",
      "https://avatars.githubusercontent.com/u/124599?v=4",
      "https://avatars.githubusercontent.com/u/69650754?v=4",
      "https://avatars.githubusercontent.com/u/40583749?v=4",
    ],
    totalUser: 6,
  },
  {
    id: 3,
    name: "Supportadmin",
    type: "DEFAULT",
    date: "Feb 1, 2023",
    status: "Active",
    users: [
      "https://avatars.githubusercontent.com/u/20971850?v=4",
      "https://avatars.githubusercontent.com/u/50866431?v=4",
      "https://avatars.githubusercontent.com/u/124599?v=4",
      "https://avatars.githubusercontent.com/u/69650754?v=4",
      "https://avatars.githubusercontent.com/u/40583749?v=4",
    ],
    totalUser: 0,
  },

  {
    id: 4,
    name: "Sales personnel",
    type: "CUSTOM",
    date: "Mar 1, 2023",
    status: "Active",
    users: [
      "https://avatars.githubusercontent.com/u/20971850?v=4",
      "https://avatars.githubusercontent.com/u/124599?v=4",
      "https://avatars.githubusercontent.com/u/69650754?v=4",
    ],
    totalUser: 0,
  },
  {
    id: 5,
    name: "Deputy sales personnel",
    type: "CUSTOM",
    date: "Apr 1, 2023",
    status: "In Active",
    users: [
      "https://avatars.githubusercontent.com/u/20971850?v=4",
      "https://avatars.githubusercontent.com/u/124599?v=4",
      "https://avatars.githubusercontent.com/u/69650754?v=4",
    ],
    totalUser: 0,
  },
  {
    id: 6,
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    date: "May 1, 2023",
    status: "Active",
    users: [
      "https://avatars.githubusercontent.com/u/20971850?v=4",
      "https://avatars.githubusercontent.com/u/124599?v=4",
      "https://avatars.githubusercontent.com/u/69650754?v=4",
      "https://avatars.githubusercontent.com/u/40583749?v=4",
    ],
    totalUser: 0,
  },
  {
    id: 7,
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    date: "Jun 1, 2023",
    status: "Active",
    users: [
      "https://avatars.githubusercontent.com/u/20971850?v=4",
      "https://avatars.githubusercontent.com/u/124599?v=4",
      "https://avatars.githubusercontent.com/u/69650754?v=4",
    ],
    totalUser: 0,
  },
];

module.exports = {
  userRoles,
};
