import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { DashboardLayout } from "@repo/ui/components/layout/index";
import { useEffect } from "react";
import { getUsers } from "./services";

function App() {
  useEffect(() => {
    const fetchUsers = async () => {
      await getUsers({ page: 1, per_page: 10 }).then((data) =>
        console.log(data, "data")
      );
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <DashboardLayout
        logoImg="./logo-one.svg"
        menuItems={[
          {
            key: "./",
            icon: <HomeOutlined />,
            label: "App one home",
          },
          {
            key: "./app-one-2",
            icon: <UserOutlined />,
            label: "User",
          },
        ]}
      />
    </div>
  );
}

export default App;
