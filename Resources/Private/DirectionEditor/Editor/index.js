import React, { useState } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { Icon } from "@neos-project/react-ui-components";
import style from "./style.module.css";
import clsx from "clsx";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.RangeEditor"),
}));

const defaultProps = {
    options: {
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
    },
};

function Editor(props, second) {
    const changeValue = (value) => {
        if (value === "center") {
            value = "";
        }
        props.commit(value);
    };

    const options = { ...defaultProps.options, ...props.options };
    const { value, highlight, i18nRegistry } = props;
    const { disabled } = options;

    return (
        <div className={clsx(style.editor, disabled && style.editorDisabled)}>
            {Object.entries(options).map(([key, enabled]) => {
                if (enabled !== true || key === "disabled") {
                    return;
                }
                if (key === "center") {
                    return (
                        <button
                            type="button"
                            className={clsx(
                                style.button,
                                style[key],
                                !value && (highlight ? style.highlight : style.active),
                            )}
                            onClick={() => changeValue("")}
                            disabled={disabled}
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
                            value === key && (highlight ? style.highlight : style.active),
                        )}
                        onClick={() => changeValue(key)}
                        disabled={disabled}
                    >
                        <Icon icon="chevron-up" />
                    </button>
                );
            })}
        </div>
    );
}

export default neosifier(Editor);
