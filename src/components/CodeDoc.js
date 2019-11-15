import React from "react";
import { CodeBlock, Code } from "react-code-blocks";

export default function(props) {
  return (
    <div className="card">
      <div className="header">
        <Code
          text={props.header}
          theme={Object.assign(
            {},
            { ...props.theme, backgroundColor: "transparent" }
          )}
          language={props.headerLang}
          wrapLines
        />
      </div>
      {!props.loading && (
        <div className="body">
          <CodeBlock
            text={props.block}
            theme={props.theme}
            language={props.blockLang}
            {...props}
          />
        </div>
      )}
    </div>
  );
}
