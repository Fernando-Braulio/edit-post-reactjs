import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [ content, setContent ] = useState({
    title: 'Hello OWord',
    section1: {
      title: 'Section',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since'
    }
  });
  const [editing, setEditing] = useState(false);

  return (
    <div className="App">
      <div className="App-Header">
        <div></div>
        {!editing 
          ? <h1>{content.title}</h1>
          : <input type="text"
              value={content.title}
              onChange={e => setContent({ ...content, title: e.target.value })}
              className="liveEditH1"/>
        }
        <p className="editBtn" onClick={() => setEditing(!editing)}>
          {!editing ? 'Edit' : 'Publish'}
          <FontAwesomeIcon icon={faEdit} className="icon" />
        </p>
      </div>

      <div className="App-Body">
        <div>
          {!editing
            ? <h3>{content.section1.title}</h3>
            : <input
                type="text"
                value={content.section1.title}
                onChange={e => setContent(
                  { ...content, 
                    section1: { ...content.section1, title: e.target.value }
                  })}
                className="liveEditH3"
              />
          }

          {!editing
            ? <p>{content.section1.content}</p>
            : <textarea
                value={content.section1.content}
                onChange={e => setContent(
                  { ...content, 
                    section1: { ...content.section1, content: e.target.value }
                  })}
                className="liveEditP"
              ></textarea>
          }
        </div>
      </div>
    </div>
  );
}


export default App;