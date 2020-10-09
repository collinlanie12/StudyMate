import React from 'react';

const ModalContext = React.createContext({
    showCon: undefined,
    handleClose: () => undefined,
    afterClose: () => undefined,
});

export default ModalContext;
