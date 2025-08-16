import { CloseOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router";

type SidebarProps = {
  isMobile: boolean;
  closeDrawer: () => void;
  menuItems: {
    key: string;
    icon: JSX.Element;
    label: string;
  }[];
  logoImg: `./${string}.svg`;
};

export default function Sidebar({
  isMobile,
  closeDrawer,
  menuItems,
  logoImg,
}: SidebarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
    if (isMobile) closeDrawer();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: isMobile ? "0" : "10px",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 0",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logoImg}
            alt="logo"
            style={{
              width: "auto",
              height: "100%",
              maxHeight: "32px",
              objectFit: "contain",
            }}
          />
        </Link>
        {isMobile && (
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={closeDrawer}
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
              width: 32,
              height: 32,
            }}
          />
        )}
      </div>

      <Menu
        selectedKeys={[pathname]}
        onClick={handleMenuClick}
        items={menuItems}
        style={{
          backgroundColor: "transparent",
          flex: 1,
          border: "none",
          padding: isMobile ? "0 16px" : "0",
        }}
      />
    </div>
  );
}
