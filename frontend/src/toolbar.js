// toolbar.js

import { DraggableNode } from './draggableNode';
import { MdInput } from "react-icons/md";
import { MdOutput } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { MdOutlineComment } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div className='draggable-container'>
                <DraggableNode
                    type='customInput'
                    label='Input'
                    icon={<MdInput />}
                />
                <DraggableNode
                    type='llm'
                    label='LLM'
                    icon={<CiSettings />}
                />
                <DraggableNode type='customOutput' label='Output'
                    icon={<MdOutput />}
                />
                <DraggableNode type='text' label='Text' icon={<IoDocumentTextOutline />} />
                <DraggableNode type='note' label='Note' icon={<MdOutlineComment />} />
                <DraggableNode type='knowledgeBase' label='Knowledge Base' icon={<MdOutlineFileDownload />} />
                <DraggableNode type='url' label='URL' icon={<IoMdLink />} />
                <DraggableNode type='fileLoader' label='Upload File' icon={<CiFileOn />} />
                <DraggableNode type='condition' label='Condition' icon={<GoArrowSwitch />} />
            </div>
        </div>
    );
};
