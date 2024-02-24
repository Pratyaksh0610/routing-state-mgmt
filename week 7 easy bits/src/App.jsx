import { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setNetworkCount(res.data);
    });
  }, []);

  return (
    <>
      <button>
        My network {networkCount.network >= 100 ? "99+" : networkCount.network}{" "}
      </button>
      <button>Jobs {networkCount.jobs} </button>
      <button>Messaging {networkCount.messaging} </button>
      <button>Notifications {networkCount.notificatoins} </button>
      <button>Me {totalNotificationCount} </button>
    </>
  );
  // return (

  //   <>
  //     {/* <button>Home</button>

  //     <button>
  //       My network(
  //       {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
  //     </button>
  //     <button>Jobs()</button>
  //     <button>Notifications()</button>
  //     <button>Me()</button> */}
  //   </>
  // );
}

export default App;
