import { Checkbox, Switch } from "antd";
import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import Question from "./Question";

interface Values {
  internalUse: boolean;
  show: boolean;
}

const Profile = () => {
  const [data, setData] = useState<any>(null);
  const [education, setEducation] = useState<Values>({
    internalUse: false,
    show: false,
  });
  const [experience, setExperience] = useState<Values>({
    internalUse: false,
    show: false,
  });
  const [resume, setResume] = useState<Values>({
    internalUse: false,
    show: false,
  });

  const [showQuestion, setShowQuestion] = useState(false);

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
          setEducation(data.data.attributes.profile.education);
          setExperience(data.data.attributes.profile.experience);
          setResume(data.data.attributes.profile.resume);

          setData(data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const update = async () => {
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
              profile: {
                ...data.data.attributes.profile,
                education,
                experience,
                resume,
              },
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
              profile: {
                ...data.data.attributes.profile,
                education,
                experience,
                resume,
              },
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

  useEffect(() => {
    if (data) {
      update();
    }
  }, [education, experience, resume]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container personal_info">
      <div className="head">
        <h3>Profile</h3>
      </div>
      <div className="area">
        <div className="group">
          <p>Education</p>
          <div className="selectors">
            <Checkbox
              onChange={(e) => {
                setEducation({
                  ...education,
                  internalUse: e.target.checked,
                });
                // update();
              }}
              checked={education.internalUse}
            >
              Mandatory
            </Checkbox>
            <label htmlFor="Switch">
              <Switch
                onChange={(e) =>
                  setEducation({
                    ...education,
                    show: e,
                  })
                }
                checked={education.show}
                id="switch"
              />
              {education.show ? "Show" : "Hide"}
            </label>
          </div>
        </div>
        <div className="group">
          <p>Experience</p>
          <div className="selectors">
            <Checkbox
              onChange={(e) =>
                setExperience({
                  ...experience,
                  internalUse: e.target.checked,
                })
              }
              checked={experience.internalUse}
            >
              Mandatory
            </Checkbox>
            <label htmlFor="Switch">
              <Switch
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    show: e,
                  })
                }
                checked={experience.show}
                id="switch"
              />
              {experience.show ? "Show" : "Hide"}
            </label>
          </div>
        </div>
        <div className="group">
          <p>Resume</p>
          <div className="selectors">
            <Checkbox
              onChange={(e) =>
                setResume({
                  ...resume,
                  internalUse: e.target.checked,
                })
              }
              checked={resume.internalUse}
            >
              Mandatory
            </Checkbox>
            <label htmlFor="Switch">
              <Switch
                onChange={(e) =>
                  setResume({
                    ...resume,
                    show: e,
                  })
                }
                checked={resume.show}
                id="switch"
              />
              {resume.show ? "Show" : "Hide"}
            </label>
          </div>
        </div>

        {showQuestion ? (
          <Question onDelete={() => setShowQuestion(false)} onSave={() => {}} />
        ) : (
          <button
            onClick={() => setShowQuestion(!showQuestion)}
            className="add"
          >
            <PlusOutlined />
            <p>Add Question</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
