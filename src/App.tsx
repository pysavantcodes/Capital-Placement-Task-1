import {
  HomeOutlined,
  VideoCameraOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import "./App.css";
import UploadCoverImage from "./components/UploadCoverImage";
import PersonalInformation from "./components/PersonalInformation";
import Profile from "./components/Profile";

const { Header, Sider } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Sider
        className="menu"
        style={{ background: "white" }}
        trigger={null}
        collapsible
        collapsed={true}
      >
        <div className="demo-logo-vertical" />
        <Button
          type="text"
          icon={<MenuOutlined />}
          style={{
            fontSize: "18px",
            width: "100%",
            height: 64,
            marginBottom: 20,
          }}
        />
        <Menu
          style={{ borderRight: "none" }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          color="#D0F7FA"
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "NewsLetter",
            },
          ]}
        />
        <span className="user">
          <p id="user">NT</p>
        </span>
      </Sider>
      <Layout className="layout" style={{ marginLeft: "80px" }}>
        <Header style={{ padding: 0, background: "white" }}></Header>
        <nav>
          <ul>
            <li>Program Details</li>
            <li>Application Form</li>
            <li>Workflow</li>
            <li>Preview</li>
          </ul>
        </nav>
        <section className="content">
          <UploadCoverImage/>
          <PersonalInformation/>
          <Profile/>
        </section>
      </Layout>
    </Layout>
  );
};

export default App;
