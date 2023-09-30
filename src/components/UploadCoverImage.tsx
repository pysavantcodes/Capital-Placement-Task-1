import { UploadOutlined } from "@ant-design/icons";
import { useRef, useState, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";

const UploadCoverImage = () => {
  const pickRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState({
    data: { attributes: { coverImage: "" }, id: "", type: "" },
  });

  const fetchData = async () => {
    const url = `http://127.0.0.1:4010/api/303.4527468734814/programs/inventore/application-form`;
    try {
      await fetch(url, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const upload = async (file: File) => {
    const url = `http://127.0.0.1:4010/api/620.3055990009163/programs/molestiae/application-form`;

    try {
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            attributes: {
              ...data.data.attributes,
              coverImage: URL.createObjectURL(file),
            },
            id: data.data.id,
            type: data.data.type,
          },
        }),
      }).then(() => {
        setData({
          data: {
            attributes: {
              ...data.data.attributes,
              coverImage: URL.createObjectURL(file),
            },
            id: data.data.id,
            type: data.data.type,
          },
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUpload = async () => {
    const url = `http://127.0.0.1:4010/api/620.3055990009163/programs/molestiae/application-form`;

    try {
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            attributes: {
              ...data.data.attributes,
              coverImage: "http://example.com",
            },
            id: data.data.id,
            type: data.data.type,
          },
        }),
      }).then(() => {
        setData({
          data: {
            attributes: {
              ...data.data.attributes,
              coverImage: "http://example.com",
            },
            id: data.data.id,
            type: data.data.type,
          },
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      upload(file);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="upload container">
      {data.data.attributes.coverImage === "" ||
      data.data.attributes.coverImage === "http://example.com" ? (
        <>
          <div className="head">
            <h3>Upload Cover Image</h3>
          </div>
          <div
            onClick={() => {
              if (pickRef.current) {
                pickRef.current.click();
              }
            }}
            className="area"
          >
            <UploadOutlined style={{ fontSize: "50px" }} />
            <h4>Upload cover image</h4>
            <p>16:9 ratio is recommended. Max image size 1mb</p>
            <input
              ref={pickRef}
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileUpload}
            />
          </div>
        </>
      ) : (
        <>
          <img src={data.data.attributes.coverImage} />
          <button onClick={deleteUpload}>
            <CloseOutlined size={20} /> <p>Delete & Re-upload</p>
          </button>
        </>
      )}
    </div>
  );
};

export default UploadCoverImage;
