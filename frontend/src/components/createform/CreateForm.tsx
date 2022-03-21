import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

interface APIOptions {
  actions: {
    POST: {
      option: string;
    };
  };
}
interface FormEndpoint {
  APIEndpoint: string;
}

const CreateForm: React.FC<FormEndpoint> = (props) => {
  const [cop, setCop] = useState([]);
  const [formData, setFormData] = useState({});

  
  useEffect(() => {
    const createFormValues = (field_value: string, cc: string, label: string) => {
      // replave Name some to name_some
      const formKey = label.toLowerCase().replaceAll(" ", "_");
      formData[formKey] = field_value;
      console.log(formData);
    };
    
    
    
    void axiosInstance.options(props.APIEndpoint).then(({ data }) => {
      const pp = data as APIOptions;
      const optionKeys = Object.keys(pp.actions.POST);
      const options = pp.actions.POST;
      const rep = [];
      optionKeys.map((key) => {
        rep.push(options[key]);
      });
      const ok = rep.map((zz: { type: string; label: string }) => {
        const mapper = {
          integer: (
            <label key={Math.random()}>
              {zz.label}:
              <input
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="number"
              ></input>
            </label>
          ),
          string: (
            <label key={Math.random()}>
              {zz.label}:
              <input
                onChange={(e) =>
                  createFormValues(e.target.value, zz.type, zz.label)
                }
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="text"
              ></input>
            </label>
          ),
          date: (
            <label key={Math.random()}>
              {zz.label}:
              <input
                onChange={(e) =>
                  createFormValues(e.target.value, zz.type, zz.label)
                }
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="date"
              ></input>
            </label>
          ),
          boolean: (
            <label key={Math.random()}>
              {zz.label}:
              <input className=" m-2" key={Math.random()} type="checkbox" />
            </label>
          ),
          float: (
            <label key={Math.random()}>
              {zz.label}:
              <input
                onChange={(e) =>
                  createFormValues(e.target.value, zz.type, zz.label)
                }
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="number"
              ></input>
            </label>
          ),
          field: (
            <label key={Math.random()}>
              {zz.label}:
              <input
                onChange={(e) =>
                  createFormValues(e.target.value, zz.type, zz.label)
                }
                key={Math.random()}
                className="border-2 border-rose-600 m-2"
                type="text"
              ></input>
            </label>
          )
        };
        return mapper[zz.type] as { ty: string };
      });
      setCop(ok);
    });
  }, []);

  const onSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
    void axiosInstance.post(props.APIEndpoint, [formData]).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm} className="flex flex-col">
        {cop} <input type="submit" />
      </form>
    </div>
  );
};

export default CreateForm;
