import { Handle } from 'reactflow';
import { HANDLE_PROPS, HANDLE_INPUT } from '../Nodes/constants'

const calculateTop = (totalEntry, index) => {
    const partition = 100 / totalEntry;
    return (partition * index) + (partition / 2)
}

const CustomHandle = ({ id, data: { type, value }, index, totalEntry }) => {
    const handleProps = HANDLE_PROPS[type];

    return (
        <Handle
            type={type}
            position={handleProps.position}
            id={`${id}-${value}`}
            style={{ top: `${calculateTop(totalEntry, index)}%` }}
        />
    )
}



export const HandleType = ({ id, data }) => {

    const source = data.filter(({ type }) => type === HANDLE_INPUT.SOURCE);
    const target = data.filter(({ type }) => type === HANDLE_INPUT.TARGET);

    return (
        <div>
            {
                source.map((data, index) =>
                    <CustomHandle
                        key={index}
                        data={data}
                        index={index}
                        id={id}
                        totalEntry={source.length}
                    />
                )
            }
            {
                target.map((data, index) =>
                    <CustomHandle
                        key={index}
                        data={data}
                        index={index}
                        totalEntry={target.length}
                        id={id}
                    />
                )
            }
        </div>
    )
}