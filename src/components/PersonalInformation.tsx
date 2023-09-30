import { Checkbox, Switch } from "antd";
import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import Question from "./Question";

interface Values {
  internalUse: boolean;
  show: boolean;
}

const PersonalInformation = () => {
  const [data, setData] = useState<any>(null);
  const [dateOfBirth, setDateOfBirth] = useState<Values>({
    internalUse: false,
    show: false,
  });
  const [currentResidence, setCurrentResidence] = useState<Values>({
    internalUse: false,
    show: false,
  });
  const [emailId, setEmailId] = useState<Values>({
    internalUse: false,
    show: false,
  });

  const [firstName, setFirstName] = useState<Values>({
    internalUse: false,
    show: false,
  });
  const [lastName, setLastName] = useState<Values>({
    internalUse: false,
    show: false,
  });
  const [nationality, setNationality] = useState<Values>({
    internalUse: false,
    show: false,
  });
  const [gender, setGender] = useState<Values>({
    internalUse: false,
    show: false,
  });
  const [phoneNumber, setPhoneNumber] = useState<Values>({
    internalUse: false,
    show: false,
  });
  const [idNumber, setIdNumber] = useState<Values>({
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
          setFirstName(data.data.attributes.personalInformation.firstName);
          setLastName(data.data.attributes.personalInformation.lastName);
          setEmailId(data.data.attributes.personalInformation.emailId);
          setPhoneNumber(data.data.attributes.personalInformation.phoneNumber);
          setNationality(data.data.attributes.personalInformation.nationality);
          setCurrentResidence(
            data.data.attributes.personalInformation.currentResidence
          );
          setIdNumber(data.data.attributes.personalInformation.idNumber);
          setDateOfBirth(data.data.attributes.personalInformation.dateOfBirth);
          setGender(data.data.attributes.personalInformation.gender);
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
              personalInformation: {
                ...data.data.attributes.personalInformation,
                firstName,
                lastName,
                emailId,
                phoneNumber,
                nationality,
                currentResidence,
                idNumber,
                dateOfBirth,
                gender,
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
              personalInformation: {
                ...data.data.attributes.personalInformation,
                firstName,
                lastName,
                emailId,
                phoneNumber,
                nationality,
                currentResidence,
                idNumber,
                dateOfBirth,
                gender,
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
  }, [
    idNumber,
    dateOfBirth,
    gender,
    phoneNumber,
    emailId,
    firstName,
    lastName,
    nationality,
    currentResidence,
  ]);

  useEffect(() => {
    fetchData();
    
  }, []);
  console.log(data);

  return (
    <div className="container personal_info">
      <div className="head">
        <h3>Personal Information</h3>
      </div>
      <div className="area">
        <div className="group">
          <p>First Name</p>
        </div>
        <div className="group">
          <p>Last Name</p>
        </div>
        <div className="group">
          <p>Email</p>
        </div>
        <div className="group">
          <p>
            Phone <span>(Without dial code)</span>
          </p>
          <div className="selectors">
            <Checkbox
              onChange={(e) => {
                setPhoneNumber({
                  ...phoneNumber,
                  internalUse: e.target.checked,
                });
                // update();
              }}
              checked={phoneNumber.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="Switch">
              <Switch
                onChange={(e) =>
                  setPhoneNumber({
                    ...phoneNumber,
                    show: e,
                  })
                }
                checked={phoneNumber.show}
                id="switch"
              />
              {phoneNumber.show ? "Show" : "Hide"}
            </label>
          </div>
        </div>
        <div className="group">
          <p>Nationality</p>
          <div className="selectors">
            <Checkbox
              onChange={(e) =>
                setNationality({
                  ...nationality,
                  internalUse: e.target.checked,
                })
              }
              checked={nationality.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="Switch">
              <Switch
                onChange={(e) =>
                  setNationality({
                    ...nationality,
                    show: e,
                  })
                }
                checked={nationality.show}
                id="switch"
              />
              {nationality.show ? "Show" : "Hide"}
            </label>
          </div>
        </div>
        <div className="group">
          <p>Current Residence</p>
          <div className="selectors">
            <Checkbox
              onChange={(e) =>
                setCurrentResidence({
                  ...currentResidence,
                  internalUse: e.target.checked,
                })
              }
              checked={currentResidence.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="Switch">
              <Switch
                onChange={(e) =>
                  setCurrentResidence({
                    ...currentResidence,
                    show: e,
                  })
                }
                checked={currentResidence.show}
                id="switch"
              />
              {currentResidence.show ? "Show" : "Hide"}
            </label>
          </div>
        </div>
        <div className="group">
          <p>ID Number</p>
          <div className="selectors">
            <Checkbox
              onChange={(e) =>
                setIdNumber({
                  ...idNumber,
                  internalUse: e.target.checked,
                })
              }
              checked={idNumber.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="Switch">
              <Switch
                onChange={(e) =>
                  setIdNumber({
                    ...idNumber,
                    show: e,
                  })
                }
                checked={idNumber.show}
                id="switch"
              />
              {idNumber.show ? "Show" : "Hide"}
            </label>
          </div>
        </div>
        <div className="group">
          <p>Date of Birth</p>
          <div className="selectors">
            <Checkbox
              onChange={(e) =>
                setDateOfBirth({
                  ...dateOfBirth,
                  internalUse: e.target.checked,
                })
              }
              checked={dateOfBirth.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="Switch">
              <Switch
                onChange={(e) =>
                  setDateOfBirth({
                    ...dateOfBirth,
                    show: e,
                  })
                }
                checked={dateOfBirth.show}
                id="switch"
              />
              {dateOfBirth.show ? "Show" : "Hide"}
            </label>
          </div>
        </div>
        <div className="group">
          <p>Gender</p>
          <div className="selectors">
            <Checkbox
              onChange={(e) =>
                setGender({
                  ...gender,
                  internalUse: e.target.checked,
                })
              }
              checked={gender.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="Switch">
              <Switch
                onChange={(e) =>
                  setGender({
                    ...gender,
                    show: e,
                  })
                }
                checked={gender.show}
                id="switch"
              />
              {gender.show ? "Show" : "Hide"}
            </label>
          </div>
        </div>
        {showQuestion ? (
          <Question onDelete={()=>setShowQuestion(false)} onSave={() => {}} />
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

export default PersonalInformation;
