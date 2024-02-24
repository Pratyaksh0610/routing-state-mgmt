import { atom, selector } from "recoil";

//Asynchronous Data queries
export const notifications = atom({
  key: "networkAtom",
  default: {
    network: 0,
    jobs: 0,
    messaging: 0,
    notifications: 0,
  },
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotification = get(notifications);
    return (
      allNotification.network +
      allNotification.jobs +
      allNotification.notifications +
      allNotification.messaging
    );
  },
});
// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 89,
// });
// export const jobsAtom = atom({
//   key: "jobsAtom",
//   default: 104,
// });
// export const notificationsAtom = atom({
//   key: "notificationsAtom",
//   default: 104,
// });
// export const messagingAtom = atom({
//   key: "messagingAtom",
//   default: 104,
// });
