import { FileTextOutlined, HomeOutlined } from "@ant-design/icons";
import DashboardLayout from "@repo/ui/components/layout/index";

function App() {
  return (
    <div >
      <DashboardLayout
      logoImg="./logo-two.svg"
        menuItems={[
          {
            key: "./",
            icon: <HomeOutlined />,
            label: "App two home",
          },
          {
            key: "./app-two-2",
            icon: <FileTextOutlined />,
            label: "Order",
          },
        ]}
      />
    </div>
  );
}

export default App;
