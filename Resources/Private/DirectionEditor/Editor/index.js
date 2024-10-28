import React, { useState, useEffect } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { Icon } from "@neos-project/react-ui-components";
import style from "./style.module.css";
import clsx from "clsx";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.RangeEditor"),
}));

const defaultOptions = {
    propertyMapping: false,
    north: true,
    east: true,
    south: true,
    west: true,
    northEast: true,
    northWest: true,
    southEast: true,
    southWest: true,
    center: true,
    disabled: false,
};

function Editor(props) {
    const options = { ...defaultOptions, ...props.config, ...props.options };
    const { value, highlight, i18nRegistry } = props;
    const { disabled } = options;
    const [state, setState] = useState(value);

    useEffect(() => {
        setState(getValueFromPropertyMapping(value));
    }, [value]);

    function getValueFromPropertyMapping(value) {
        if (options.propertyMapping) {
            const key = Object.keys(options.propertyMapping).find((key) => options.propertyMapping[key] === value);
            if (key) {
                return key;
            }
        }
        return value;
    }

    function setValueFromPropertyMapping(value) {
        return options?.propertyMapping?.[value] || value;
    }

    function changeValue(value) {
        setState(value);
        value = setValueFromPropertyMapping(value);
        if (value === "center") {
            value = "";
        }
        props.commit(value);
    }

    return (
        <div className={clsx(style.editor, disabled && style.editorDisabled)}>
            {Object.entries(options).map(([key, enabled]) => {
                if (!enabled || key === "disabled" || key === "propertyMapping") {
                    return null;
                }
                const title = typeof enabled == "string" ? i18nRegistry.translate(enabled) : null;
                if (key === "center") {
                    return (
                        <button
                            type="button"
                            className={clsx(
                                style.button,
                                style[key],
                                (!state || state == "center") && (highlight ? style.highlight : style.active),
                            )}
                            onClick={() => changeValue("center")}
                            disabled={disabled}
                            title={title}
                        >
                            <Icon icon="dot-circle" />
                        </button>
                    );
                }
                return (
                    <button
                        type="button"
                        className={clsx(
                            style.button,
                            style[key],
                            state === key && (highlight ? style.highlight : style.active),
                        )}
                        onClick={() => changeValue(key)}
                        disabled={disabled}
                        title={title}
                    >
                        <Icon icon="chevron-up" />
                    </button>
                );
            })}
        </div>
    );
}

export default neosifier(Editor);
