import { FileLoaderType, HandleType, Header } from "../Common"
import { FILE_LOADER_HANDLES } from "./constants"


export const FileLoaderNode = ({ id, data }) => {

    return (
        <div className="card">
            <div className="card-body">
                <Header
                    id={id}
                    title="File"
                />
                <HandleType
                    id={id}
                    data={FILE_LOADER_HANDLES}
                />
                <FileLoaderType
                    id={id}
                    label="Upload File"
                />
            </div>
        </div>
    )
}