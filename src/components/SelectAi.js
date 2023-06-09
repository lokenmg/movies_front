import React, { useState } from 'react';
import OpenAIModelSelector from './OpenAiModelSelector';
import Textdavinci003 from './openAi/edits';
import Imgdavinci003 from './openAi/img-davinci-003';
import Editdavinci003 from './openAi/edits';

const SelectModel = () => {
    const [selectedModel, setSelectedModel] = useState('');
  
    const handleModelChange = (event) => {
      setSelectedModel(event.target.value);
    };
  
    return (
      <div>
        <OpenAIModelSelector onSelectModel={handleModelChange} />
  
        {selectedModel === 'text-davinci-003' && (
            <Textdavinci003 />
        )}
  
        {selectedModel === 'img-davinci-003' && (
            <Imgdavinci003 />
        )}

        {selectedModel === 'edit-davinci-003' && (
            <Editdavinci003 />
        )}
      </div>
    );
  };
  
  export default SelectModel;