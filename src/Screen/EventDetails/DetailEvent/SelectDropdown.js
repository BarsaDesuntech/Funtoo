import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { EventTypes } from "../../../services/APIServices";

function SelectDropdown(props) {
    const [value, setValue] = useState({
        label: "select",
        value: "select"
    });
    const [data, setData] = useState([]);
    const [names, setNames] = useState([]);
   
    useEffect(() => {
        
        EventTypes()
            .then((result) => {
                console.log(result);
                let event_type_options = [];
                if (result.is_success) {
                    result.data.forEach((item) => {
                        // setNames(item[0]?.name)
                    
                        event_type_options.push({
                            id: item.id,
                            value: item.name,
                            label: item.name,
                            item_id: item.id,
                        });
                    });
                }
                setNames(event_type_options)
               
                setData({
                    event_type_options: event_type_options,
                });
            })
    }, []);
    return (
        <Select
            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            theme={{
                borderRadius: 0,
                minHeight: 1,
                spacing: {
                    baseUnit: 0,
                    controlHeight: 10,
                    menuGutter: 5,

                }
            }}
            styles={{
                container: (base, action) => {
                    return {
                        ...base,
                        minHeight: "1px !important",
                        height: "20px",
                        width: 440,
                        outline: "none !important",
                        border: "none",
                    };
                },
                control: (base, action) => {
                    return {
                        ...base,
                        // boxShadow: "0 0 5px #394562",
                        border: 0,
                        // This line disable the blue border
                        boxShadow: 'none',
                        padding: "1px 2px",
                        background: "white",
                        border: "none",
                        width: "440px"
                    };
                },
                singleValue: base => {
                    return {
                        ...base,
                        color: "black"
                    };
                }
            }}
            isSearchable={false}
            hideSelectedOptions={true}

            options={names}
            value={value}
            onChange={(item, { action }) => {
                // if (action === "select-option") {
                   
                props.getSelectedValue(item.value,item. item_id)
                setValue(item);
         
                // }
            }}
        />
    );
}

export default SelectDropdown
