import React, { useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { withHistory } from "slate-history";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";

export function MyEditor()  {
  const editor = useMemo<ReactEditor>(() => withHistory(withReact(createEditor())) , [])

  const [value, setValue] = useState<Node[]>([
    {
      children: [{
        text: ""
      }], 
    },
  ]);

  return <Slate editor={editor} onChange={setValue} value={value}>
    <Editable placeholder="Write something..." autoFocus />
  </Slate>
}
