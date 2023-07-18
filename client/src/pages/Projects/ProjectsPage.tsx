import React, {useState} from 'react';
import AddProject from './components/AddProject';
const {ipcRenderer} = window.require('electron');

import './projects.css';
import ListProjects from './components/ListProjects';

function ProjectsPage() {
  const [showNew, setShowNew] = useState(false);
  return (
    <div className='projects-page'>
      <ListProjects />
      {showNew && <AddProject />}
      <button onClick={() => setShowNew(true)}>Add new project</button>
    </div>
  );
}

export default ProjectsPage;
