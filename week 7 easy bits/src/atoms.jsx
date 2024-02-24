import axios from "axios";
import { atom, selector } from "recoil";

//Asynchronous Data queries
export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
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
