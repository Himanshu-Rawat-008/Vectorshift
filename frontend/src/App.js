import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useState } from 'react';

function App() {
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeIsSubmit = (v) => {
    setIsSubmit(v);
  }

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI
        isSubmit={isSubmit}
        onChangeIsSubmit={onChangeIsSubmit}
      />
      <SubmitButton onClick={onChangeIsSubmit} />
    </div>
  );
}

export default App;
