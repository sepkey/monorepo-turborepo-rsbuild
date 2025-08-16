import {
  CloseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout as AntdLayout, Button, Drawer, Menu, theme } from "antd";
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { useMediaQuery } from "../../hooks/use-media-query";

type SidebarProps = {
  isMobile: boolean;
  closeDrawer: () => void;
  menuItems: {
    key: string;
    icon: JSX.Element;
    label: string;
  }[];
  logoImg:`./${string}.svg`
};

function Sidebar({ isMobile, closeDrawer, menuItems,logoImg }: SidebarProps) {
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

const { Header, Sider, Content } = AntdLayout;

type DashboardLayoutProps={
  menuItems: {
    key: string;
    icon: JSX.Element;
    label: string;
  }[];  logoImg:`./${string}.svg`
}

export default function DashboardLayout({
  menuItems,logoImg
}: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      {isMobile ? (
        <>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Drawer
            placement="left"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            width={250}
            closable={false}
            styles={{
              body: {
                padding: 0,
                backgroundColor: "white",
              },
            }}
          >
            <Sidebar
              menuItems={menuItems}
              isMobile={isMobile}
              logoImg={logoImg}
              closeDrawer={() => setDrawerVisible(false)}
            />
          </Drawer>
        </>
      ) : (
        <Sider
          style={{ backgroundColor: "white" }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={250}
        >
          <Sidebar
            menuItems={menuItems}
            isMobile={isMobile}
            logoImg={logoImg}
            closeDrawer={() => setDrawerVisible(false)}
          />
        </Sider>
      )}
      <AntdLayout>
        {!isMobile && (
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
        )}
        <Content
          style={{
            margin: "24px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
}
