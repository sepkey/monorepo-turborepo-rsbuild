import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout as AntdLayout, Button, Drawer, theme } from "antd";
import { useState } from "react";
import { Outlet } from "react-router";
import { useMediaQuery } from "../../hooks/use-media-query";
import Sidebar from "./sidebar";

const { Header, Sider, Content } = AntdLayout;

type DashboardLayoutProps = {
  menuItems: {
    key: string;
    icon: JSX.Element;
    label: string;
  }[];
  logoImg: `./${string}.svg`;
};

export function DashboardLayout({ menuItems, logoImg }: DashboardLayoutProps) {
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
