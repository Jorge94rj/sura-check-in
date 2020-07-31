import syled from 'styled-components';

const CardContainer = syled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    position: relative;    

    .card-header {
        margin: 15px auto;
        font-size: 20px;
        font-weight: bold;
        text-align: center;                
    }

    .card-body {
        margin: 15px;
        word-wrap: break-word;
    }

    .card-footer {

    }
`;

export default CardContainer;