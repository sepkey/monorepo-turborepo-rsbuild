import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import DashboardLayout from "@repo/ui/components/layout/index";

function App() {
  return (
    <div>
      <DashboardLayout logoImg="./logo-one.svg"
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
