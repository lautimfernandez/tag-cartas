export const type = 'updateState';

const updateState = (carta,state) => ({
    type,
    cartadiag : {carta,state}
});

export default updateState;