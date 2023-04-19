export const languages = [
  { text: 'English', value: 'en_IN' },
];

export const flagData = (strings: any) => {
  return [
    { name: strings.ticket_text_yes, id: 'Yes' },
    { name: strings.ticket_text_no, id: 'No' },
  ];
};

export const dataFlag = (strings: any) => {
  return [
    { id: true, name: strings.dropdown_yes_text },
    { id: false, name: strings.dropdown_no_text },
  ];
};
export const dataFlagDropdown = (strings: any) => {
  return [
    { value: 'true', label: strings.dropdown_yes_text },
    { value: 'false', label: strings.dropdown_no_text },
  ];
};

export const sortData = () => {
  return [
    { id: 'default', name: 'Default' },
    { id: 'aging', name: 'Aging' },
    { id: 'latest', name: 'Latest' },
  ];
};
export const Roles = [
  { id: 1, name: "USERS" },
  { id: 2, name: "TICKETS" },
  { id: 3, name: "ROLES" },
  { id: 4, name: "AGENTS" },
  { id: 5, name: "TICKET_SOURCE" },
  { id: 6, name: "TICKET_SUB_SOURCE" },
  { id: 7, name: "KEY_ATTRIBUTES" },
  { id: 8, name: "CHILD_ATTRIBUTES" },
  { id: 9, name: "TICKET_STATUS" },
  { id: 10, name: "ASSIGN_GROUPS" },
  { id: 11, name: "TICKET_CATEGORIES" },
  { id: 12, name: "TICKET_SUB_CATEGORIES" },
  { id: 13, name: "ISSUE_TYPES" },
  { id: 14, name: "TICKET_TYPES" },
];
