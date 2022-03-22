import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { useActions } from "../../hooks/useActions";

interface APIOptions {
  actions: {
    POST: {
      option: string;
    };
  };
}
interface FormEndpoint {
  APIEndpoint: string;
  editable?: boolean;
  data?: any[];
}

const CreateForm: React.FC<FormEndpoint> = (props) => {
  const { getWorkersList } = useActions();

  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const formDictionary = {};

  const createFormValues = (field_value: string, cc: string, label: string) => {
    // replave Name some to name_some
    const formKey = label.toLowerCase().replaceAll(" ", "_");
    formDictionary[formKey] = field_value;
    setFormData(formDictionary);
  };

  const createFormFields = (combinedValues: any[]) => {
    console.log(combinedValues);
    const formFields = combinedValues.map(
      (fieldData: {
        type: string;
        label: string;
        required: boolean;
        read_only: boolean;
      }) => {
        const mapper = {
          integer: (
            <label key={Math.random()}>
              <span className={`${fieldData.required ? "font-black" : null}`}>
                {fieldData.label}:
              </span>
              <input
                readOnly={fieldData.read_only}
                required={fieldData.required}
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="number"
              ></input>
            </label>
          ),
          string: (
            <label key={Math.random()}>
              <span className={`${fieldData.required ? "font-black" : null}`}>
                {fieldData.label}:
              </span>
              <input
                onChange={(e) =>
                  createFormValues(
                    e.target.value,
                    fieldData.type,
                    fieldData.label
                  )
                }
                required={fieldData.required}
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="text"
              ></input>
            </label>
          ),
          date: (
            <label key={Math.random()}>
              <span className={`${fieldData.required ? "font-black" : null}`}>
                {fieldData.label}:
              </span>
              <input
                onChange={(e) =>
                  createFormValues(
                    e.target.value,
                    fieldData.type,
                    fieldData.label
                  )
                }
                required={fieldData.required}
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="date"
              ></input>
            </label>
          ),
          boolean: (
            <label key={Math.random()}>
              <span className={`${fieldData.required ? "font-black" : null}`}>
                {fieldData.label}:
              </span>
              <input className=" m-2" key={Math.random()} type="checkbox" />
            </label>
          ),
          float: (
            <label key={Math.random()}>
              <span className={`${fieldData.required ? "font-black" : null}`}>
                {fieldData.label}:
              </span>
              <input
                onChange={(e) =>
                  createFormValues(
                    e.target.value,
                    fieldData.type,
                    fieldData.label
                  )
                }
                required={fieldData.required}
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="number"
              ></input>
            </label>
          ),
          field: (
            <label key={Math.random()}>
              <span className={`${fieldData.required ? "font-black" : null}`}>
                {fieldData.label}:
              </span>
              <input
                onChange={(e) =>
                  createFormValues(
                    e.target.value,
                    fieldData.type,
                    fieldData.label
                  )
                }
                required={fieldData.required}
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="text"
              ></input>
            </label>
          )
        };
        console.log(mapper[fieldData.type]);
        return mapper[fieldData.type] as {
          $$typeof: React.ReactElement;
          type: string;
          key: string;
          ref: string;
          props: { children: [] };
        };
      }
    );
    setFormFields(formFields);
  };

  useEffect(() => {
    void axiosInstance.options(props.APIEndpoint).then(({ data }) => {
      const optionsData = data as APIOptions;
      const optionsKeys = Object.keys(optionsData.actions.POST);
      const optionsContent = optionsData.actions.POST;
      const combinedValues = [];
      optionsKeys.map((key) => {
        combinedValues.push(optionsContent[key]);
      });
      createFormFields(combinedValues);
    });
  }, []);

  const onSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    void axiosInstance.post(props.APIEndpoint, formData).then((res) => {
      if (props.APIEndpoint === "workers/") {
        getWorkersList();
      }
      console.log("Submit completed", res);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm} className="flex flex-col">
        {formFields} <input type="submit" />
      </form>
    </div>
  );
};

export default CreateForm;
