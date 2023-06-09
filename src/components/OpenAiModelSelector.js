import React, { useState } from 'react';
import Textdavinci003 from './openAi/text-davinci-003';
import Imgdavinci003 from './openAi/img-davinci-003';
import Editdavinci003 from './openAi/edits';
import TraductorFront from './openAi/traductor';
import Emoji from './openAi/emoji';
import ListFront from './openAi/list';
import { useTranslation } from 'react-i18next';

const OpenAIModelSelector = () => {
    const [selectedModel, setSelectedModel] = useState('');
    const { t } = useTranslation();
    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
    };

    return (
        <div>
            <label htmlFor="modelSelect">{t("Selecciona_un_modelo_de_OpenAI")}</label>
            <select id="modelSelect" value={selectedModel} onChange={handleModelChange}>
                <option value="">{t("Seleccionaunmodelo")}</option>
                <option value="text-davinci-003">{t("look_for_actors")}</option>
                <option value="img-davinci-003">{t("create_a_poster")}</option>
                <option value="edit-davinci-003">{t("text_correction")}</option>
                <option value="traductor">{t("Traductor")}</option>
                <option value="emoji">{t("Create_emoji")}</option>
                <option value="List">{t("Create_list")}</option>
            </select>

            {selectedModel && (
                <div>
                    <h2>Información del modelo {selectedModel}:</h2>
                    {selectedModel === 'text-davinci-003' && (
                        <Textdavinci003 />
                    )}
                    {selectedModel === 'img-davinci-003' && (
                        <Imgdavinci003 />
                    )}
                    {selectedModel === 'edit-davinci-003' && (
                        <Editdavinci003 />
                    )}
                    {selectedModel === 'traductor' && (
                        <TraductorFront />
                    )}
                    {selectedModel === 'emoji' && (
                        <Emoji />
                    )}
                    {selectedModel === 'List' && (
                        <ListFront />
                    )}
                </div>
            )}
        </div>
    );
};

export default OpenAIModelSelector;