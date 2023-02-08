/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
const fs = require("fs");

const TYPES = {
  SCREEN: "screen",
  STORE: "store",
  COMPONENT: "component",
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const header = `/**
* Copyright alwatroos
* https://github.com/alwatroos
*/`;

const firstLetterToUpperCase = ([first, ...rest]) =>
  first.toUpperCase() + rest.join("");

const firstLetterToLowerCase = ([first, ...rest]) =>
  first.toLowerCase() + rest.join("");

const createComponent = ({ type, name }) => {
  const projectPath = `.`;
  if (type && projectPath) {
    const isScreen = type === TYPES.SCREEN;

    const domainPath = `${projectPath}/src/${isScreen ? "screens" : "components"}`;
    const path = `${domainPath}/${name}`;

    if (!fs.existsSync(path)) {
      console.log("Creating directory ", path);
      fs.mkdirSync(path, { recursive: true });
    }
    console.log("Creating index file");
    fs.writeFileSync(
      `${path}/index.tsx`,

      `${header}
      export * from "./${name}";
      `
    );
    console.log("Creating scss file");
    fs.writeFileSync(
      `${path}/${name}.scss`,
      `@import "../../theme/theme.scss";\n\n.${name} {}`
    );
    console.log("Creating component file");
    fs.writeFileSync(
      `${path}/${name}.tsx`,
      `${header}
      import React from "react";\nimport cx from "classnames";${
        isScreen
          ? 'import { AppScreen } from "components/AppScreen";\n'
          : ""
      }\nimport "./${name}.scss";\n\ninterface I${name}Props extends React.HTMLAttributes<HTMLDivElement> {};\n\nexport const ${name} = ({className, ...divProps}: I${name}Props) => {\n\treturn <${
        isScreen ? "AppScreen" : "div"
      } {...divProps} className={cx('${name}', className)}>${name} ${type}</${
        isScreen ? "AppScreen" : "div"
      }>;\n};`
    );
  }
  readline.close();
};

const createReducers = (_name) => {
  const name = firstLetterToUpperCase(_name);
  const lowerCase = firstLetterToLowerCase(_name);
  const projectPath = `.`;
  const path = `${projectPath}/src/stores/${lowerCase}`;
  const filePath = `${path}/index.ts`;

  const content = `${header}
import { createSlice } from "@reduxjs/toolkit";
import { ICommonState } from "../ICommonState";

export interface I${name}State extends ICommonState {
 aa?: string;
}

const stateName = "${lowerCase}";

const initialState: I${name}State = {
 loading: false,
};

const ${lowerCase}Slice = createSlice({
 initialState,
 name: stateName,
 reducers: {},
 extraReducers: (builder) => {},
});

export const ${lowerCase} = ${lowerCase}Slice.reducer;
`;

  fs.mkdirSync(path, { recursive: true });
  fs.writeFileSync(filePath, content);
  readline.close();
};

const main = () => {
  readline.question("Type (screen, component, store): ", (type) => {
    readline.question("Name: ", (_name) => {
      let name = _name;

      if (type === TYPES.SCREEN) {
        name = _name.endsWith("Screen") ? _name : `${_name}Screen`;
      }

      switch (type) {
        case TYPES.SCREEN:
          createComponent({ type: TYPES.SCREEN, name });
          break;
        case TYPES.COMPONENT:
          createComponent({ type: TYPES.COMPONENT, name });
          break;
        case TYPES.STORE:
          createReducers(name);
          break;
        default:
          console.error("NO DEFINITION FOUND! CLOSING!");
          readline.close();
      }
    });
  });
};

main();
