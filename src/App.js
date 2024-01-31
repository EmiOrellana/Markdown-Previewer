import './App.css';
import {marked} from 'marked';
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: `# Title
## Subtitle
[Link](https://www.google.com)

### Inline Code:
\`<div></div>\`

---
### Unordered List:
- list item 1
- list item 2
- list item 3

---

> Block Quote

### Image:
![React Logo w/ Text](markdown_ico.png)

---

**Bolded Text**

*Italicized Text*

***Bolded and Italicized Text***

~~The world is flat.~~

---

### Code block:
\`\`\`
function add(num1, num2) {
  return num1 + num2;
}
\`\`\`

---

  ### Table:
  | Syntax | Description |
  | ----------- | ----------- |
  | Header | Title |
  | Paragraph | Text |

---

  ### Tasks list
  - [x] Task 1
  - [x] Task 2
  - [ ] Task 3
  - [ ] Task 4

   `
    }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render () {

    marked.setOptions({
      breaks: true
    })

    return (
    <div className="App">

      <div id="header">
        <h1 id="title">Markdown Previewer</h1>
      </div>
      <br />

      <div className="subheader">
        <h2>Editor Area</h2>
      </div>      

      <div className="subArea">
        <textarea 
        id="editor"
        className="editor"
        onChange = {this.handleTextChange}
        value = {this.state.text}
        />
      </div>

      <div className="subheader">
        <h2>Preview Area</h2>
      </div>

      <div className="subArea">
        <div
        id="preview"
        className="preview" 
        dangerouslySetInnerHTML={{ __html: marked(this.state.text)}}
        />
      </div>

    </div>
    );
  }
}

export default App;
