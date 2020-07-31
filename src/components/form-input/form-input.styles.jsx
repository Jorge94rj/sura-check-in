import styled from 'styled-components';

const FormInputContainer = styled.div`
.form-group {
    position: relative;
    .form-label {
        display: block;
        color: gray;
        font-size: 18px;
        font-weight: normal;
        text-align: left;
        padding-bottom: 5px;
    }
    .form-input {
        width: 100%;
        border: none;
        border-bottom: 1px solid gray;
        font-size: 20px;
        &:focus {
            outline: none;
            border-bottom: 2px solid #0099cc
        }
    }
}
`;

export default FormInputContainer;