const baseRoles = [
  {
    name: "Superadmin",
    type: "DEFAULT",
    status: "Active",
    totalUser: 7,
  },
  {
    name: "Merchantadmin",
    type: "DEFAULT",
    status: "Active",
    totalUser: 6,
  },
  {
    name: "Supportadmin",
    type: "DEFAULT",
    status: "Active",
    totalUser: 0,
  },
  {
    name: "Sales personnel",
    type: "CUSTOM",
    status: "Active",
    totalUser: 0,
  },
  {
    name: "Deputy sales personnel",
    type: "CUSTOM",
    status: "In Active",
    totalUser: 0,
  },
  {
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    status: "Active",
    totalUser: 0,
  },
  {
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    status: "Active",
    totalUser: 0,
  },
];

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/20971850?v=4",
  "https://avatars.githubusercontent.com/u/50866431?v=4",
  "https://avatars.githubusercontent.com/u/124599?v=4",
  "https://avatars.githubusercontent.com/u/69650754?v=4",
  "https://avatars.githubusercontent.com/u/40583749?v=4",
];

const userRoles = [];

for (let i = 0; i < 100; i++) {
  const base = baseRoles[i % baseRoles.length];
  userRoles.push({
    id: i + 1,
    name: `${base.name} ${i + 1}`,
    type: base.type,
    date: new Date(2023, i % 12, 1).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    status: base.status,
    users: avatarUrls.slice(0, Math.floor(Math.random() * avatarUrls.length) + 1),
    totalUser: base.totalUser,
  });
}

module.exports = {
  userRoles,
};
