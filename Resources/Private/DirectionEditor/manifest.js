import manifest from "@neos-project/neos-ui-extensibility";

import Editor from "./Editor";

manifest("Carbon.DirectionEditor:Editor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Carbon.DirectionEditor/Editor", {
        component: Editor,
    });
});
